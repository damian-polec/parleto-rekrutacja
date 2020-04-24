<template>
  <div class="container mt-5">
    <div class="row">
      <app-summary></app-summary>
      <div class="col-md-5 col-sm-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Imię</th>
              <th scope="col">Nazwisko</th>
              <th scope="col">Dział</th>
              <th scope="col">Pensja</th>
            </tr>
          </thead>
          <tbody>
            <app-employee
              v-for="(employee, i) in employees"
              v-bind:key="i"
              :employee="employee"
            ></app-employee>
          </tbody>
        </table>
        <p class="text-center" v-if="employees.length <= 0">
          <strong>Żaden z pracowników nie spełnia kryteriów</strong>
        </p>
      </div>
      <app-filters></app-filters>
    </div>
  </div>
</template>

<script>
import Employee from "../components/Employee";
import Filters from "../components/Filters";
import Summary from "../components/Summary";
export default {
  computed: {
    employees() {
      return this.$store.getters.employees;
    }
  },
  components: {
    appEmployee: Employee,
    appFilters: Filters,
    appSummary: Summary
  }
};
</script>
