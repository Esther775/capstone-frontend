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
      });
    },

    // editShipment(shipment) {
    //   console.log("editing shipment...")
    //   console.log(this.shipment.id)
    // this.$router.push(`/shipments/${this.shipment.id}/edit`)
    // }
  },
};
</script>
<!-- <div v-for="shipment in shipments">
  Shipment Number: {{shipment.id}}
  <div>
    Book:
    <div v-if="shipment.book_id===1">Golden Apples</div>
    <div v-if="shipment.book_id===2">Time Peices</div>
    <div v-if="shipment.book_id===3">Rays of Wisdom</div>
  </div> -->

<template>

  <!-- Pricing section-->
  <section class="bg-light py-5">
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="fw-bolder">Recent Shipments</h1>
        <!-- <p class="lead fw-normal text-muted mb-0">With our no hassle pricing plans</p> -->
      </div>
      <div class="row gx-5 justify-content-center">

        <!-- Pricing card pro-->
        <div class="col-lg-6 col-xl-4" v-for="shipment in shipments">
          <div class="card mb-5 mb-xl-0">
            <div class="card-body p-5">
              <div class="mb-3">
                <span class="text-muted">Shipment Number: {{shipment.id}}</span>

              </div>
              <br />
              <div v-if="shipment.from_warehouse_id==='1'"> From: Mond Warehouse</div>
              <div v-if="shipment.from_warehouse_id==='2'">From: Berman Warehouse</div>
              <div v-if="shipment.from_warehouse_id==='3'">From: Israel Printhouse</div>

              <div>
                <div v-if="shipment.to_warehouse_id==='1'">To: Mond Warehouse</div>
                <div v-if="shipment.to_warehouse_id==='2'">To: Berman Warehouse</div>
                <div v-if="shipment.to_warehouse_id==='3'">To: Israel Printhouse</div>
                Comment: {{shipment.comment}}
              </div>

              <div v-for="books in shipment.book_shipment">
                Book: {{books.book.title}}
                <br />
                Quantity:{{books.quantity}}
              </div>

              <div class="d-grid"><a class="btn btn-outline-primary" v-bind:href="`/shipments/${shipment.id}/edit`">Edit
                  Shipment</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



</template>

<style>

</style>