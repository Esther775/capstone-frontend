<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to Index .js!",
      warehouses: []
    };
  },
  created: function () {
    this.warehouseIndex()
  },
  methods: {
    warehouseIndex() {
      console.log("showing all warehouses");
      axios.get("http://localhost:3000/warehouses.json").then(response => {
        console.log(response.data)
        this.warehouses = response.data

      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for=" warehouse in warehouses" v-bind:key="warehouse.id">
      {{ warehouse.name }}
    </div>
  </div>
</template>

<style>

</style>