<script>
import axios from 'axios';


export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      prints: [],
      books: [],
      warehouses: []
    };
  },
  created: function () {
    this.getPrints()
    this.getBooks()
    this.getWarehouses()
  },
  methods: {
    getPrints() {
      axios.get('/prints.json').then(response => {
        console.log(response.data)
        this.prints = response.data
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
    },
    editPrint() {
      console.log("editing print")
    },
    deleteShipment(print) {
      console.log("deleting print")
      console.log(print.id)
      axios.delete(`http://localhost:3000/prints/${print.id}.json`).then(response => {
        console.log(response.data)
        this.$router.go()
      })
    }
  }
};
</script>

<template>
  <section class="bg-light py-5">
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="fw-bolder">Recent Printings</h1>
      </div>
      <div class="row gx-5 justify-content-center">

        <!-- Pricing card pro-->
        <div class="col-lg-6 col-xl-4" v-for="print in prints">
          <div class="card mb-5 mb-xl-0">
            <div class="card-body p-5">
              <div class="mb-3">
                <span class="text-muted">ID: {{ print.id }}</span>
              </div>

              <div v-for="warehouse in warehouses">
                <!-- {{warehouse.name}} -->
                <div v-if="print.warehouse_id === warehouse.id">{{ warehouse.name }}</div>
              </div>


              <br />
              <label>Book:</label>
              <div v-for="book in books">
                <div v-if="print.book_id === book.id">{{ book.title }}</div>
              </div>

              <div>
                <label>Quantity:</label>
                {{ print.quantity }}
              </div>

              <div class="d-grid"> <a class="btn btn-outline-primary" v-bind:href="`/prints/${print.id}/edit`">Edit</a>
              </div>

              <div class="d-grid"><a class="btn btn-outline-primary" v-on:click="deleteShipment(print)">Delete
                </a>
              </div>

              <!-- 

              <b><u>Comment:</u></b>
              <br />
              {{shipment.comment}}

              <div class="d-grid"><a class="btn btn-outline-primary" v-bind:href="`/shipments/${shipment.id}/edit`">Edit
                  Shipment</a></div>

              <div class="d-grid"><a class="btn btn-outline-primary" v-on:click="deleteShipment(shipment)">Delete
                  Shipment</a>
              </div> -->



            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>