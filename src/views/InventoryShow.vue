
<script >

import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Inventory Page",
      inventory: [],
      books: [],
    };
  },
  created: function () {
    this.getInventory();
    this.getBooks()
  },
  methods: {
    getInventory() {
      console.log("get inventory")
      axios.get("http://localhost:3000/inventory.json").then(response => {
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
    },
    getBooks() {
      console.log("getting books")
      axios.get("http://localhost:3000/books.json").then(response => {
        console.log(response.data)
        this.books = response.data
      })
    }

  },
};
</script>



<template>

  <div class="container">
    <table class="table table-sm table-hover">

      <thead>
        <tr>
          <th scope="col">Book Title</th>
          <th scope="col">Warehouse</th>
          <th scope="col">Inventory</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="details in inventory">
          <th scope="row">{{details.title.title}}</th>

          <td>{{details.warehouse.name}}</td>
          <td>{{details.current_inventory}}</td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
<style>
div {
  text-align: center;
}

.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}
</style>