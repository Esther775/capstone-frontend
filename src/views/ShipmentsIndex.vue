<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      shipments: [],
      shipment: {},
      errors: []
    };
  },
  created: function () {
    this.getShipments()
  },
  methods: {

    getShipments() {
      axios.get("http://localhost:3000/shipments.json").then(response => {
        console.log(response.data)
        this.shipments = response.data
        console.log(Date())
      });
    },
    filteredShipments() {
      console.log("foilterinng")
      return this.shipments.filter(function (shipment) {
        return shipment.created_at === currentDate()
      })
    }
    // editShipment(shipment) {
    //   console.log("editing shipment...")
    //   console.log(this.shipment.id)
    // this.$router.push(`/shipments/${this.shipment.id}/edit`)
    // }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div v-for="shipment in shipments">
      Shipment Number: {{shipment.id}}
      <div>
        Book:
        <div v-if="shipment.book_id===1">Golden Apples</div>
        <div v-if="shipment.book_id===2">Time Peices</div>
        <div v-if="shipment.book_id===3">Rays of Wisdom</div>
      </div>
      Sending To Warehouse:
      <div>
        <div v-if="shipment.to_warehouse_id==='1'">Mond</div>
        <div v-if="shipment.to_warehouse_id==='2'">Berman</div>
        <div v-if="shipment.to_warehouse_id==='3'">Israel</div>
      </div>
      <div>
        From Warehouse:
        <div v-if="shipment.from_warehouse_id==='1'">Mond</div>
        <div v-if="shipment.from_warehouse_id==='2'">Berman</div>
        <div v-if="shipment.from_warehouse_id==='3'">Israel</div>
      </div>
      <div>
        quantity: {{shipment.quantity}}
      </div>
      <div>
        <!-- Date: {{shipment.created_at}} -->
      </div>
      <a v-bind:href="`/shipments/${shipment.id}/edit`">Edit Shipment</a>
      <hr />

    </div>
  </div>
</template>

<style>

</style>