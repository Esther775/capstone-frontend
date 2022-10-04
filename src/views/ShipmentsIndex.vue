<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      shipments: [],
      shipment: {},
      errors: [],
      books: [],
      warehouses: []
    };
  },
  created: function () {
    this.getShipments()
    this.getBooks()
    this.getWarehouses()
  },
  methods: {

    getShipments() {
      axios.get("http://localhost:3000/shipments.json").then(response => {
        console.log(response.data)
        this.shipments = response.data
      });
    },
    deleteShipment(shipment) {
      console.log("deleting shipment")
      console.log(shipment.id)
      axios.delete(`http://localhost:3000/shipments/${shipment.id}.json`).then(response => {
        console.log(response.data)
        this.$router.go()

      })
    },
    getBooks() {
      console.log("getting books")
      axios.get("/books.json").then(response => {
        console.log(response.data)
        this.books = response.data
      })
    },
    getWarehouses() {
      console.log("getting warehouses")
      axios.get("/warehouses.json").then(response => {
        console.log(response.data)
        this.warehouses = response.data
      })
    }
  },
};
</script>

<template>

  <!-- Pricing section-->
  <section class="bg-light py-5">
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="fw-bolder">Recent Shipments</h1>
      </div>
      <div class="row gx-5 justify-content-center">

        <!-- Pricing card pro-->
        <div class="col-lg-6 col-xl-4" v-for="shipment in shipments">
          <div class="card mb-5 mb-xl-0">
            <div class="card-body p-5">
              <div class="mb-3">
                <span class="text-muted">Shipment Number: {{shipment.id}}</span>
              </div>
              <!-- From Warehouse:
              <template v-for="warehouse in warehouses">
                <div v-if="warehouse.id === shipment.from_warehouse_id"> {{warehouse.name}}</div>
              </template> -->

              <div v-if="shipment.from_warehouse_id==='1'"> <b><u>From:</u></b>Mond Warehouse</div>
              <div v-if="shipment.from_warehouse_id==='2'"><b><u>From:</u></b>Berman Warehouse</div>
              <div v-if="shipment.from_warehouse_id==='3'"><b><u>From:</u></b>Israel Printhouse</div>

              <br />
              <div>
                <div v-if="shipment.to_warehouse_id==='1'"><b><u>To:</u></b> Mond Warehouse</div>
                <div v-if="shipment.to_warehouse_id==='2'"><b><u>To:</u></b> Berman Warehouse</div>
                <div v-if="shipment.to_warehouse_id==='3'"><b><u>To:</u></b> Israel Printhouse</div>
              </div>

              <br />
              <div v-for="books in shipment.book_shipment">
                <b><u>Book:</u></b> {{books.book.title}}
                <br />
                <b><u>Quantity:</u></b>{{books.quantity}}
                <br />
                <br />
              </div>

              <b><u>Comment:</u></b> {{shipment.comment}}
              <div class="d-grid"><a class="btn btn-outline-primary" v-bind:href="`/shipments/${shipment.id}/edit`">Edit
                  Shipment</a></div>

              <div class="d-grid"><a class="btn btn-outline-primary" v-on:click="deleteShipment(shipment)">Delete
                  Shipment</a>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



</template>

<style>

</style>