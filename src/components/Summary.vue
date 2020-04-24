<template>
  <div class="col-md-4 col-sm-12">
    <h3 class="text-center">Wynagrodzenia</h3>
    <div class="card bg-light mb-3">
      <div class="card-header"><h5 class="card-title">Łącznie</h5></div>
      <div class="card-body">
        <div v-for="(value, key, i) in totalSalaries" :key="i" class="row">
          <div class="col-8">
            <p class="card-text">
              <strong> Wynagrodzenia w {{ key }} </strong>
            </p>
          </div>
          <div class="col-4">
            <p class="card-text float-right mb-0">{{ value.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card bg-light mb-3">
      <div class="card-header"><h5 class="card-title">Działy</h5></div>
      <div class="card-body">
        <div v-for="(value, key, i) in sectionsSalaries" :key="i" class="row">
          <div class="col-7">
            <p class="card-text">
              <strong> {{ key }} </strong>
            </p>
          </div>
          <div class="col-5">
            <p
              class="card-text float-right mb-0"
              v-for="(salary, key, i) in value"
              :key="i"
            >
              {{ salary.toFixed(2) }} {{ key }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["sectionsSalaries", "totalSalaries"])
};
</script>
