<script>
import axios from "axios"


export default {
  data: function () {
    return {
      message: "Log a shipment",
    };
  },
  created: function () { },
  methods: {
    shipmentCreate() {
      console.log("creating shipment")
      var params = {
        book_id: 1,
        from_warehouse_id: 1,
        to_warehouse_id: 2,
        quantity: 0
      }
      axios.post("http://localhost:3000/shipments.json", params).then(response => {
        console.log(response.data)
      })
        .catch((error) => {
          console.log("shipment create error", error.response);
          this.errors - error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <form> -->
    <!-- <label for="warehouses"> Choose a Warehouse</label>
      <select id="warehouses" name="warehouses"> -->
    <!-- <option value="Mond"> Mond Warehouse </option> -->
    <!-- </select> -->
    <button v-on:click="shipmentCreate()"> Submit </button>
    <!-- </form> -->
  </div>
</template>

<style>
</style>