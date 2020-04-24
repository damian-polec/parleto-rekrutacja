<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
    <!-- <app-employees></app-employees> -->
  </div>
</template>

<style lang="scss"></style>

<script>
import Nav from "./components/Nav";
export default {
  components: {
    appNav: Nav
  },
  created() {
    this.$store.dispatch("initEmployees");
    this.$store.dispatch('calculateSalaries');
    this.$store.dispatch('initSections');
  }
};
</script>
