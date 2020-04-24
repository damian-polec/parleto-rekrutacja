<template>
  <div class="container mt-3 p-5">
    <app-form :form="form" :addNewEmployee="addNewEmployee"></app-form>
  </div>
</template>

<script>
import Form from "../components/Form";
export default {
  data() {
    return {
      form: {
        imie: "",
        nazwisko: "",
        dzial: "",
        wynagrodzenieKwota: 0,
        wynagrodzenieWaluta: "PLN"
      }
    };
  },
  methods: {
    addNewEmployee() {
      this.$store.dispatch("addEmployee", this.form);
      this.$router.push('/');
    }
  },
  components: {
    appForm: Form
  }
};
</script>
