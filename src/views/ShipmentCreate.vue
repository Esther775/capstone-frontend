<script>
import axios from "axios";


export default {

  data: function () {
    return {
      message: "Create a Shipment",
      newShipment: {
        to_warehouse_id: 1,
        from_warehouse_id: 1,
        quantity: 0,
        books: [
          { book_id: 3, quantity: 3 }
        ],
        comment: ""
      },
      shipments: [],
      errors: "",
      books: [],
      warehouses: []
    };
  },
  created: function () {
    this.getBooks()
    this.getWarehouses()
  },
  methods: {
    shipmentCreate() {
      console.log("creating shipment")
      axios.post("/shipments.json", this.newShipment).then(response => {
        console.log(response.data)
        this.shipments.push(response.data)
        this.$router.push('/shipments')
        console.log("this is shipments array")
        console.log(this.shipments)
      })
        .catch((error) => {
          console.log(error.response)
          this.errors = error.response.data.message;
        })
    },
    addBookToShipment() {
      console.log("adding book")
      this.newShipment.books.push({ book_id: 3, quantity: 0 })
    },
    removeBookFromShipment(book) {
      console.log(" book")
      console.log(book)
      console.log("this.newShipment.book")
      console.log(this.newShipment.books)
      var index = this.newShipment.books.indexOf(book);
      this.newShipment.books.splice(index, 1)
      console.log(this.newShipment.books)
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
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
}
</script>
    
<template>
  {{errors}}
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Create Shipment form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <h1 class="fw-bolder">Create a Shipment</h1>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">

            <!-- <form> -->

            <!-- Book input -->
            <div class="form-floating mb-3" v-for="book in newShipment.books" id="contactForm">
              <select v-model="book.book_id" class="form-control">
                <option disabled value="">Please select one</option>
                <option v-for="book in books" :value="book.id">{{book.title}}</option>
              </select>
              <label>Book Title</label>
              <br />

              <!-- Quantity input -->
              <div class="form-floating mb-3">
                <input class="form-control" type="number" v-model="book.quantity">
                <label>Quantity</label>
              </div>

              <!-- Add/Remove Books -->
              <button class="btn btn-outline-danger" v-on:click="removeBookFromShipment(book)">Remove Book</button>
            </div>
            <button class="btn btn-outline-primary" v-on:click="addBookToShipment()">Add Another Book</button>


            <!-- To Warehouse input-->

            <div class="form-floating mb-3" id="contactForm">
              <select v-model="newShipment.to_warehouse_id" class="form-control">
                <option v-for="warehouse in warehouses" :value="warehouse.id">{{warehouse.name}}</option>
              </select>
              <label>Where are you shipping the books TO?</label>
            </div>

            <!-- From Warehouse input-->
            <div class="form-floating mb-3">
              <select v-model="newShipment.from_warehouse_id" class="form-control">
                <option v-for="warehouse in warehouses" :value="warehouse.id">{{warehouse.name}}
                </option>
              </select>
              <label>Where are you shipping the books FROM?</label>

            </div>



            <!-- Comment Input: -->
            <div class="form-floating mb-3">
              <textarea class="form-control" type="text" v-model="newShipment.comment"
                placeholder="Enter your message here..." style="height: 10rem"></textarea>
              <label for="message">Message</label>
            </div>


            <!-- Submit Button-->
            <div class="d-grid"><button class="btn btn-primary btn-lg " type="submit" value="Submit"
                v-on:click="shipmentCreate()">Submit Shipment</button></div>

            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </section>


</template>
    
<style>
div.a {
  text-align: left;
}
</style>