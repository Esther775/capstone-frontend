<script>
import axios from "axios";


export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      newPrint: {
        book_id: 1,
        quantity: 1,
        warehouse_id: 3
      },
      books: [],
      warehouses: []
    };
  },
  created: function () {
    this.getBooks()
    this.getWarehouses()

  },
  methods: {
    print() {
      console.log("creating shipment")
      console.log(this.newPrint)
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
  <!-- <div class="home">
    <h1>{{ message }}</h1>
    Book:
    <input type="text" v-model="newPrint.book_id" />
    Quantity:
    <input type="text" v-model="newPrint.quantity" />
    Going to Warehouse:
    <input type="text" v-model="newPrint.warehouse_id" />
    <button v-on:click="print()">Submit</button>
  </div> -->

  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <h1 class="fw-bolder">Print</h1>

        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">

            <!-- Book input-->
            <div class="form-floating mb-3" id="contactForm">
              <select v-model="newPrint.book_id" class="form-control">
                <option v-for="book in books" :value="book.id"> {{book.title}} </option>
              </select>
              <label>Book Title</label>
            </div>
            <!-- Quantity input-->
            <div class="form-floating mb-3" id="contactForm">
              <input type="number" class="form-control" v-model="newPrint.quantity">
              <label>Quantity</label>
            </div>

            <!-- To Warehouse input-->
            <div class="form-floating mb-3" id="contactForm">
              <input class="form-control" type="text" value="Israel Printhouse" readonly>
              <label>Warehouse</label>

            </div>


            <!-- Submit Button-->
            <div class="d-grid"><button class="btn btn-primary btn-lg" value="Submit"
                v-on:click="print()">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>