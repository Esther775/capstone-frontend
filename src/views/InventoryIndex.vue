<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome Invneotry.js!",
      inventories: [],
      warehouses: []
    };
  },
  created: function () {
    this.showInventory(),
      this.warehouseIndex()
  },
  methods: {
    showInventory() {
      console.log("showing inventory")
      axios.get("http://localhost:3000/inventory.json").then(response => {
        console.log(response.data)
        this.inventories = response.data
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
  <table class="table table-sm table-hover">
    <thead>
      <tr>
        <th scope="col">Book Title</th>
        <th scope="col">Warehouse</th>
        <th scope="col">Inventory</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="details in inventories">
        <th scope="row">{{details.title.title}}</th>

        <td>{{details.warehouse.name}}</td>
        <td>{{details.current_inventory}}</td>
      </tr>

    </tbody>
  </table>
</template>

<style>

</style>