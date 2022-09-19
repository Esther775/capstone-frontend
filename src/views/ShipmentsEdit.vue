<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "EDIT.js!",
      shipment: {

      },
      shipments: []
    };
  },
  created: function () {
    this.showShipment()
  },
  methods: {
    showShipment() {
      console.log("showing SHipment")
      axios.get(`http://localhost:3000/shipments/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.shipment = response.data
      })
    },
    editShipment() {
      console.log("editting Shipments")
      axios.patch(`http://localhost:3000/shipments/${this.shipment.id}`, this.shipment).then(response => {
        console.log(response.data)
        this.$router.push(`/shipments`)
      })
    }
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
          <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div> -->
          <h1 class="fw">Editing Shipment #{{shipment.id}}</h1>
          <!-- <p class="lead fw-normal text-muted mb-0">We'd love to hear from you</p> -->
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">

            <!-- <form> -->
            <!-- To Warehouse input-->
            <div class="form-floating mb-3" id="contactForm"> To Warehouse
              <select v-model="shipment.to_warehouse_id" class="form-control">
                <option value="1">Mond</option>
                <option value="2">Berman</option>
                <option value="3">Israel (Lewin)</option>
                <label for="shipment">To Warehouse:</label>
              </select>

            </div>

            <!-- From Warehouse input-->
            <div class="form-floating mb-3"> From Warhouse
              <select v-model="shipment.from_warehouse_id" class="form-control">
                <label for="shipment">from Warehouse</label>
                <option value="1">Mond</option>
                <option value="2">Berman</option>
                <option value="3">Israel (Lewin)</option>
              </select>
            </div>


            <!-- Book input-->
            <div class="form-floating mb-3">Book
              <select v-model="shipment.book_id" class="form-control">
                <label for="shipment">Book</label>
                <option value="1">Golden Apples</option>
                <option value="2">Time Peices</option>
                <option value="3">Rays of Wisdom</option>
              </select>
            </div>

            <!-- Quantity Input: -->
            <div class="form-floating mb-3"> Quantity:
              <label for="shipment"></label>
              <input class="form-control" type="number" v-model="shipment.quantity">
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