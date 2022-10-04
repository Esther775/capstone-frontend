<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Inventory Page",
      inventory: [],
      warehouse: {}
    };
  },
  created: function () {
    this.getInventory();
    this.warehouseIndex()
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
      axios.get("http://localhost:3000/warehouses/" + this.$route.params.id).then(response => {
        console.log(response.data)
        this.warehouse = response.data

      })
    }
  },
};
</script>
  
<template>

  <div class="container">
    <br />
    <br />
    <h3> Inventory at: <u> {{warehouse.name}}</u></h3>
    <br />
    <br />
    <br />

    <table style="width:40%" class="center table">
      <thead class="thead-light">
        <tr>
          <th>Book</th>
          <th>Current Inventory</th>
        </tr>
      </thead>
      <tbody v-for="details in inventory">
        <tr>
          <th>
            <div v-if="details.book_id===1">Golden Apples</div>
            <div v-if="details.book_id===2">Time Peices</div>
            <div v-if="details.book_id===3">Rays of Wisdom</div>
          </th>
          <td>{{details.current_inventory}}</td>

        </tr>

      </tbody>
    </table>


  </div>
</template>
  
<style>
table.center {
  margin-left: auto;
  margin-right: auto;
}
</style>