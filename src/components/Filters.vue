<template>
  <div class="col-lg-3 col-md-12 col-sm-12">
    <h3 class="text-center">Filtry</h3>
    <form>
      <div class="form-group">
        <div class="card bg-light mb-3">
          <div class="card-header">Dział</div>
          <div class="card-body">
            <h5 class="card-title">Dział</h5>
            <div class="form-check" v-for="(section, i) in sections" :key="i">
              <input
                class="form-check-input"
                type="checkbox"
                :value="section"
                v-model="filters.sections"
              />
              <label class="form-check-label" for="section">
                {{ section }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="card bg-light mb-3">
          <div class="card-header">Wynagrodzenie</div>
          <div class="card-body">
            <h5 class="card-title">Wynagrodzenie</h5>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="min">Min</label>
                <input
                  type="number"
                  class="form-control"
                  id="min"
                  v-model="filters.salary.min"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="max">Max</label>
                <input
                  type="number"
                  class="form-control"
                  id="max"
                  v-model="filters.salary.max"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="currency">Waluta</label>
                <select
                  id="currency"
                  class="form-control"
                  v-model="filters.salary.currency"
                >
                  <option>PLN</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="onFilter" :disabled='filters.salary.max < 0 || filters.salary.min < 0'>
        Filtruj
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        sections: [],
        salary: {
          min: 0,
          max: 10000,
          currency: "PLN"
        }
      }
    };
  },
  computed: {
    sections() {
      return this.$store.getters.sections;
    }
  },
  methods: {
    onFilter() {
      this.$store.dispatch("filterEmployees", this.filters);
    }
  }
};
</script>
