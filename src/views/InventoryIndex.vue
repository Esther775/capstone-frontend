<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Welcome Invneotry.js!",
      inventories: [],
      warehouses: [],
      currentSort: 'name',
      currentSortDir: 'asc',
    };
  },
  created: function () {
    this.showInventory(),
      this.warehouseIndex()
  },
  methods: {
    showInventory() {
      console.log(" inventory index ")
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
    },
    // filterBooks() {
    //   this.inventories.filter(inventory => {
    //     return inventory.title.includes("Time");
    //   })
    // }

    sort: function (s) {
      //if s == current sort, reverse
      (console.log('sorting'))
      console.log(this.currentSort)
      console.log(this.currentSortDir)

      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
  },
  computed: {
    sortedBooks: function () {
      return this.inventories.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === 'desc') modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      })

    }
  }
};
</script>

<template>
  <table class="table table-sm table-hover">
    <thead>
      <tr class="li">
        <th scope="col" v-on:click="sort('book_id')"> <u>Book Title</u></th>
        <th scope="col" v-on:click="sort('warehouse_id')"> <u>Warehouse </u></th>
        <th scope="col" v-on:click="sort('current_inventory')"> <u> Inventory </u> </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="details in sortedBooks">
        <th scope="row">{{ details.title.title }}</th>
        <td>{{ details.warehouse.name }}</td>
        <td>{{ details.current_inventory }}</td>
      </tr>

    </tbody>
  </table>
</template>

<style>
.li {
  cursor: pointer;
  margin: 15px 0;
}
</style>