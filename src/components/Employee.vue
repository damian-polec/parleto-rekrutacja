<template>
  <tr>
    <td>{{ employee.imie }}</td>
    <td>{{ employee.nazwisko }}</td>
    <td>{{ employee.dzial }}</td>
    <td>
      {{ employee.wynagrodzenieKwota }} {{ employee.wynagrodzenieWaluta }}
    </td>
  </tr>
</template>

<script>
export default {
  props: ["employee"]
};
</script>
