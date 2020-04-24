<template>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="firstName">Imię</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="form.imie"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="lastName">Nazwisko</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="form.nazwisko"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="section">Dział</label>
        <input
          type="text"
          class="form-control"
          id="section"
          v-model="form.dzial"
        />
      </div>
      <div class="form-group col-md-4">
        <label for="salary">Wynagrodzenie</label>
        <input
          type="number"
          class="form-control"
          id="salary"
          v-model="form.wynagrodzenieKwota"
        />
      </div>
      <div class="form-group col-md-4">
        <label for="currency">Waluta</label>
        <select
          id="currency"
          class="form-control"
          v-model="form.wynagrodzenieWaluta"
        >
          <option>PLN</option>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      :disabled='form.wynagrodzenieKwota < 0'
      @click.prevent="addNewEmployee"
    >
      Dodaj
    </button>
  </form>
</template>

<script>
export default {
  props: ["form", "addNewEmployee"]
};
</script>
