<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Check Inventory",
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
    },
    allInventory() {
      this.$router.push("/inventory")
    }
  },
};
</script>

<template>
  <div class="home" id="wrapper">
    <br />
    <br />
    <h1>{{ message }}</h1>
    <br />
    <br />
    <div class="btn" v-for=" warehouse in warehouses" v-bind:key="warehouse.id">
      <a class="btn btn-outline-primary" v-bind:href="`/inventory/${warehouse.id}`">{{ warehouse.name }} </a>
    </div>
    <a class="btn btn-outline-primary" v-on:click="allInventory()"> All Inventory </a>




  </div>
</template>

<style>
#wrapper {
  width: 500px;
  margin: 0 auto;
}
</style>