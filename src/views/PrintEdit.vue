<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      print: [],
      warehouses: [],
      books: []
    };
  },
  created: function () {
    this.showPrint()
    this.getWarehouses()
    this.getBooks()

  },
  methods: {
    showPrint() {
      axios.get(`/prints/${this.$route.params.id}.json`).then(response => {
        console.log(response.data)
        this.print = response.data
      })
    },
    getWarehouses() {
      console.log("getting warehouses")
      axios.get("/warehouses.json").then(response => {
        console.log(response.data)
        this.warehouses = response.data
      })
    },
    getBooks() {
      console.log("getting books")
      axios.get("/books.json").then(response => {
        console.log(response.data)
        this.books = response.data
      })
    },
    editPrint() {
      console.log(this.print)
      axios.patch(`/prints/${this.print.id}`, this.print).then(response => {
        console.log(response.data)
        this.$router.push(`/prints`)
      })
    }
  },
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
        <div class="col-lg-6 col-xl-4">
          <div class="card mb-5 mb-xl-0">
            <div class="card-body p-5">
              <div class="mb-3">
                <span class="text-muted">ID: {{print.id}}</span>
              </div>

              <br />
              <!-- Book input-->

              <div class="form-floating mb-3" id="contactForm">
                <select v-model="print.book_id" class="form-control">
                  <option v-for="book in books" :value="book.id"> {{book.title}} </option>
                </select>
                <label>Book Title</label>
              </div>

              <!-- Quantity input-->
              <div class="form-floating mb-3" id="contactForm">
                <input type="number" class="form-control" v-model="print.quantity">
                <label>Quantity</label>
              </div>

              <!-- To Warehouse input-->
              <div class="form-floating mb-3" id="contactForm">
                <input class="form-control" type="text" value="Israel Printhouse" readonly>
                <label>Warehouse</label>

              </div>

              <div class="d-grid"><button class="btn btn-outline-primary" value=sumbit
                  v-on:click="editPrint()">Save</button>
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