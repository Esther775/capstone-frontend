<script>
import axios from "axios";


export default {

  data: function () {
    return {
      message: "Log a shipment",
      newShipment: {
        to_warehouse_id: 1,
        from_warehouse_id: 1,
        quantity: 0, book_id: 1
      },
      shipments: [],
      errors: []
    };
  },
  created: function () { },
  methods: {
    shipmentCreate() {
      console.log("creating shipment")
      console.log(this.newShipment.to_warehouse_id)
      axios.post("http://localhost:3000/shipments.json", this.newShipment).then(response => {
        console.log(response.data)
        // this.shipments.push(response.data)
        this.$router.push('/shipments')
        // console.log("this is shipments array")
        // console.log(this.shipments)
      })
      // .catch((error) => {
      //   this.errors = error.response.data.errors;
      // })
    },
    /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
    // function myFunction() {
    //   document.getElementById("myDropdown").classList.toggle("show");
    // }
  },
};
</script>

<template>
  <div class="new-shipment">
    <h1>{{ message }}</h1>
    <p>{{errors}}</p>

    <label for="shipment">To wareohouse</label>
    <select v-model="newShipment.to_warehouse_id">
      <option value="1">Mond</option>
      <option value="2">Berman</option>
      <option value="3">Israel (Lewin)</option>
    </select>

    <br />
    <label for="shipment">from Warehouse</label>
    <select v-model="newShipment.from_warehouse_id">
      <option value="1">Mond</option>
      <option value="2">Berman</option>
      <option value="3">Israel (Lewin)</option>
    </select>
    <br />

    <label for="shipment">Quantity</label>
    <input type="number" v-model="newShipment.quantity">
    <br />

    <label for="shipment">Book</label>
    <select v-model="newShipment.book_id">
      <option value="1">Golden Apples</option>
      <option value="2">Time Peices</option>
      <option value="3">Rays of Wisdom</option>
    </select>
    <br />

    <input type="submit" value="Submit" v-on:click="shipmentCreate()">




  </div>
</template>

<style>

</style>