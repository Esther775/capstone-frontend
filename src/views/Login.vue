<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {
        name: "Esther",
        password: "password"
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.name = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <section class="py-5">
    <div class="container px-5">
      <!-- Contact form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>

            <form id="contactForm" v-on:submit.prevent="submit()">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input class="form-control" type="text" v-model="newSessionParams.name" />
                <label for="name">Name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>

              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input class="form-control" type="password" v-model="newSessionParams.password"
                  data-sb-validations="required" />
                <label for="phone">Password</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>

              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <!-- <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a
                    href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div> -->
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <!-- <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">Error sending message!</div>
              </div> -->
              <!-- Submit Button-->
              <div class="d-grid"><button v-on:click="submit()" class="btn btn-primary btn-lg" type="submit"
                  value="Submit">Login</button></div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>



</template>