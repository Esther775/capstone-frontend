<script>
import axios from "axios"


export default {
  data: function () {
    return {
      message: "Log a shipment",
      newShipment: {},
      shipments: []
    };
  },
  created: function () { },
  methods: {
    shipmentCreate() {
      console.log("creating shipment")
      // var params = {
      //   book_id: 1,
      //   from_warehouse_id: 1,
      //   to_warehouse_id: 2,
      //   quantity: 0
      // }
      axios.post("http://localhost:3000/shipments.json", this.newShipment).then(response => {
        console.log(response.data)
        this.shipments.push(response.data)
      });
      // .catch((error) => {
      //   console.log("shipment create error", error.response);
      //   this.errors - error.response.data.errors;
      // });
    },
  },
};
</script>

<template>
  <div class="new-shipment">
    <h1>{{ message }}</h1>

    <p> From Warehouse: <input type="text" v-model="newShipment.from_warehouse_id"> </p>
    <p> To Warehouse: <input type="text" v-model="newShipment.to_warehouse_id"> </p>
    <p> Book_id: <input type="text" v-model="newShipment.book_id"> </p>
    <p> Quantity: <input type="text" v-model="newShipment.quantity"> </p>
    <button v-on:click="shipmentCreate()"> Submit </button>

  </div>
</template>

<style>
</style>