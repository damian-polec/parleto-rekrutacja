<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Wynagrodzenia</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/"
          active-class="active"
          class="nav-item"
          tag="li"
          exact
        >
          <a class="nav-link">Lista pracowników</a>
        </router-link>
        <router-link
          to="/add-employee"
          active-class="active"
          class="nav-item"
          tag="li"
        >
          <a class="nav-link">Dodaj nowego pracownika</a>
        </router-link>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="userInput"
        />
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          @click.prevent="searchUser"
        >
          Szukaj
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      userInput: ""
    };
  },
  methods: {
    searchUser() {
      this.$store.dispatch("searchEmployees", this.userInput);
    }
  }
};
</script>
