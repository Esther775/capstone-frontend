<script>
import axios from 'axios';


export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      prints: []
    };
  },
  created: function () {
    this.getPrints()
  },
  methods: {
    getPrints() {
      axios.get('/prints.json').then(response => {
        console.log(response.data)
        this.prints = response.data
      })
    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ prints }}</h1>
  </div>
</template>

<style>

</style>