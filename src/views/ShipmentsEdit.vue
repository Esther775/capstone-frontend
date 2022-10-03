<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "EDIT.js!",
      shipment: {
        to_warehouse_id: 1,
        from_warehouse_id: 1,
        quantity: 0,
        books: [
          { book_id: 3, quantity: 3 },
        ],
        comment: "",
      },
      books: [],
      warehouses: []
    };
  },
  created: function () {
    this.showShipment()
    this.getBooks()
    this.getWarehouses()

  },
  methods: {
    showShipment() {
      console.log("showing SHipment")
      axios.get(`http://localhost:3000/shipments/${this.$route.params.id}.json`).then(response => {
        console.log(response.data);
        this.shipment = response.data
      })
    },
    editShipment() {
      console.log("editting Shipments")
      console.log(this.shipment)
      axios.patch(`http://localhost:3000/shipments/${this.shipment.id}`, this.shipment).then(response => {
        console.log(response.data)
        this.$router.push(`/shipments`)
      })
    },
    addBookToShipment() {
      console.log("adding book")
      this.shipment.books.push({ book_id: 2, quantity: 0 })
    },

    removeBookFromShipment(book) {
      console.log("book")
      console.log(book)
      console.log("shipment.books")
      console.log(this.shipment.books)
      var index = this.shipment.books.indexOf(book);
      this.shipment.books.splice(index, 1)
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
  },
};
</script>

<template>
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Contact form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <h1 class="fw">Editing Shipment #{{shipment.id}}</h1>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">

            <!-- <form> -->

            <!-- Book input-->
            <div class="form-floating mb-3" v-for="book in shipment.books" v-bind="shipment.id">
              Book
              <select v-model="book.book_id" class="form-control">
                <option disabled value="">Please select one</option>
                <option v-for="book in books" :value="book.id">{{book.title}}</option>
              </select>

              <!-- Quantity Input: -->
              <div class="form-floating mb-3"> Quantity:
                <input class="form-control" type="number" v-model="book.quantity">
              </div>
              <button class="btn btn-outline-danger" v-on:click="removeBookFromShipment(book)">Remove Book</button>
            </div>
            <button class="btn btn-outline-primary" v-on:click="addBookToShipment()">Add A Book</button>




            <!-- To Warehouse input-->
            <div class="form-floating mb-3" id="contactForm">{{shipment}}
              <br /> To Warehouse
              <select v-model="shipment.to_warehouse_id" class="form-control">
                <option v-for="warehouse in warehouses" :value="warehouse.id">{{warehouse.name}}</option>
              </select>

            </div>

            <!-- From Warehouse input-->
            <div class="form-floating mb-3"> From Warhouse
              <select v-model="shipment.from_warehouse_id" class="form-control">
                <option v-for="warehouse in warehouses" :value="warehouse.id">{{warehouse.name}}
                </option>
              </select>
            </div>


            <!-- Comment Input -->
            <div class="form-floating mb-3">
              <textarea class="form-control" type="text" v-model="shipment.comment"
                placeholder="Enter your message here..." style="height: 10rem"></textarea>
              <label for="message">Message</label>
            </div>


            <!-- Submit Button-->
            <div class="d-grid"><button class="btn btn-primary btn-lg " type="submit" value="Submit"
                v-on:click="editShipment()">Save</button></div>


            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>

</style>