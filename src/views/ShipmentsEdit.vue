<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "EDIT.js!",
      shipment: {

      },
      shipments: []
    };
  },
  created: function () {
    this.showShipment()
  },
  methods: {
    showShipment() {
      console.log("showing SHipment")
      axios.get(`http://localhost:3000/shipments/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.shipment = response.data
      })
    },
    editShipment() {
      console.log("editting Shipments")
      axios.patch(`http://localhost:3000/shipments/${this.shipment.id}`, this.shipment).then(response => {
        console.log(response.data)
        this.$router.push(`/shipments`)
      })
    }
  },
};
</script>

<template>
  <div class="edit">


    <label for="shipment">To warehouse</label>
    <select v-model="shipment.to_warehouse_id">
      <option value="1">Mond</option>
      <option value="2">Berman</option>
      <option value="3">Israel (Lewin)</option>
    </select>

    <br />
    <label for="shipment">from Warehouse</label>
    <select v-model="shipment.from_warehouse_id">
      <option value="1">Mond</option>
      <option value="2">Berman</option>
      <option value="3">Israel (Lewin)</option>
    </select>
    <br />

    <label for="shipment">Quantity</label>
    <input type="number" v-model="shipment.quantity">
    <br />

    <label for="shipment">Book</label>
    <select v-model="shipment.book_id">
      <option value="1">Golden Apples</option>
      <option value="2">Time Peices</option>
      <option value="3">Rays of Wisdom</option>
    </select>
    <br />

    <input type="submit" value="Submit" v-on:click="editShipment()">

  </div>
</template>

<style>

</style>