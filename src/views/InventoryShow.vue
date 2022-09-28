<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Inventory Page",
      inventory: []
    };
  },
  created: function () {
    this.getInventory();
  },
  methods: {
    getInventory() {
      console.log("get inventory")
      axios.get("http://localhost:3000/inventory/" + this.$route.params.id).then(response => {
        console.log(response.data)
        this.inventory = response.data
      })
    },
    warehouseIndex() {
      console.log("showing all warehouses");
      axios.get("http://localhost:3000/warehouses.json").then(response => {
        console.log(response.data)
        this.warehouses = response.data

      })
    }
  },
};
</script>

<template>
  <div class="home">

    <!-- <div v-if="$route.params.id===1"> Mond</div> -->
    <!-- {{inventory}} -->
    <div v-for="details in inventory">

      <div>
        Book:
        <div v-if="details.book_id===1">Golden Apples</div>
        <div v-if="details.book_id===2">Time Peices</div>
        <div v-if="details.book_id===3">Rays of Wisdom</div>
      </div>
      <div>
        Current Inventory: {{details.current_inventory}}
        <hr />
      </div>

    </div>
  </div>
</template>

<style>

</style>