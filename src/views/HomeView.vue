<script>
import axios from "axios";


export default {

  data: function () {
    return {
      message: "Log a shipment",
      newShipment: {
        to_warehouse_id: 1,
        from_warehouse_id: 1,
        quantity: 0, book_id: 1
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
      // .catch((error) => {
      //   console.log(error.response)
      //   // this.errors = error.response.data.errors;
      // })
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

  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Contact form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div> -->
          <h1 class="fw-bolder">Log a Shipment</h1>
          <!-- <p class="lead fw-normal text-muted mb-0">We'd love to hear from you</p> -->
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <!-- <form> -->
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


            <!-- Book input-->
            <div class="form-floating mb-3">Book
              <select v-model="newShipment.book_id" class="form-control">
                <label for="shipment">Book</label>
                <option value="1">Golden Apples</option>
                <option value="2">Time Peices</option>
                <option value="3">Rays of Wisdom</option>
              </select>
            </div>

            <!-- Quantity Input: -->
            <div class="form-floating mb-3"> Quantity:
              <label for="shipment"></label>
              <input class="form-control" type="number" v-model="newShipment.quantity">
            </div>

            <!-- Add Comment input-->
            <!-- <div class="form-floating mb-3">
              <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."
                style="height: 10rem" data-sb-validations="required"></textarea>
              <label for="message">Message</label>
              <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div> -->
            <!-- Submit success message-->
            <!---->
            <!-- This is what your users will see when the form-->
            <!-- has successfully submitted-->
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                <div class="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a
                  href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            <!-- Submit error message-->
            <!---->
            <!-- This is what your users will see when there is-->
            <!-- an error submitting the form-->
            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">Error sending message!</div>
            </div>
            <!-- Submit Button-->
            <div class="d-grid"><button class="btn btn-primary btn-lg " type="submit" value="Submit"
                v-on:click="shipmentCreate()">Submit</button></div>

            <!-- </form> -->
          </div>
        </div>
      </div>
      <!-- Contact cards-->
      <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-chat-dots"></i></div>
          <div class="h5 mb-2">Chat with us</div>
          <p class="text-muted mb-0">Chat live with one of our support specialists.</p>
        </div>
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
          <div class="h5">Ask the community</div>
          <p class="text-muted mb-0">Explore our community forums and communicate with other users.</p>
        </div>
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-question-circle"></i>
          </div>
          <div class="h5">Support center</div>
          <p class="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
        </div>
        <div class="col">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone"></i></div>
          <div class="h5">Call us</div>
          <p class="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
        </div>
      </div>
    </div>
  </section>


</template>

<style>

</style>