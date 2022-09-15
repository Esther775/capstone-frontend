<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js?",
      shipment: {}
    };
  },
  created: function () {
    this.showShipment()
  },
  methods: {
    showShipment() {
      console.log("showing shipment")
      axios.get("http://localhost:3000/shipments/86").then(response => {
        console.log(response.data)
        this.shipment = response.data
      })
    }
  },
};
</script>

<template>
  <div class="show">
    <h1>{{ message }}</h1>
    Book Id: {{shipment.book_id}}
    Quantity: {{shipment.quantity}}
  </div>
</template>

<style>

</style>