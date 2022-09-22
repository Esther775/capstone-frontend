<script>
import axios from "axios";


export default {

  data: function () {
    return {
      message: "Create a Shipment",
      newShipment: {
        to_warehouse_id: 1,
        from_warehouse_id: 1,
        quantity: 0, book_id: 1,
        comment: ""
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
        .catch((error) => {
          console.log(error.response)
          this.errors = error.response.data.error;
        })
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
  <!-- {{errors}} -->
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Contact form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div> -->
          <h1 class="fw-bolder">Create a Shipment</h1>
          <!-- <p class="lead fw-normal text-muted mb-0">We'd love to hear from you</p> -->
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">

            <!-- <form> -->
            <!-- Book input-->
            <div class="form-floating mb-3">Book
              <select v-model="newShipment.book_id" class="form-control">
                <label for="shipment">Book</label>
                <option value="1">Golden Apples</option>
                <option value="2">Time Peices</option>
                <option value="3">Rays of Wisdom</option>
              </select>
            </div>
            <!-- To Warehouse input-->
            <div class="form-floating mb-3" id="contactForm"> To Warehouse
              <select v-model="newShipment.to_warehouse_id" class="form-control">
                <option value="1">Mond</option>
                <option value="2">Berman</option>
                <option value="3">Israel (Lewin)</option>
                <label for="shipment">To Warehouse:</label>
              </select>

            </div>

            <!-- From Warehouse input-->
            <div class="form-floating mb-3"> From Warhouse
              <select v-model="newShipment.from_warehouse_id" class="form-control">
                <label for="shipment">from Warehouse</label>
                <option value="1">Mond</option>
                <option value="2">Berman</option>
                <option value="3">Israel (Lewin)</option>
              </select>
            </div>



            <!-- Quantity Input: -->
            <div class="form-floating mb-3"> Quantity:
              <label for="shipment"></label>
              <input class="form-control" type="number" v-model="newShipment.quantity">
            </div>
            <!-- Comment Input: -->
            <div class="form-floating mb-3">
              <textarea class="form-control" type="text" v-model="newShipment.comment"
                placeholder="Enter your message here..." style="height: 10rem"></textarea>
              <label for="message">Message</label>
            </div>

            <!-- Add Comment input-->
            <!-- <div class="form-floating mb-3">
                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."
                  style="height: 10rem" data-sb-validations="required"></textarea>
                <label for="message">Message</label>
                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div> -->


            <!-- Submit Button-->
            <div class="d-grid"><button class="btn btn-primary btn-lg " type="submit" value="Submit"
                v-on:click="shipmentCreate()">Submit</button></div>

            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </section>


</template>
  
<style>

</style>