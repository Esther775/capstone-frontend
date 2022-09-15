<script>
export default {
  methods: {
    getShipment() {
      console.log("hello")
      this.$router.push('/shipments')
    }
  }

}
</script>
<template>

  <nav class="navbar bg-light">
    <form class="container-fluid justify-content-start">
      <button v-on:click=getShipment() class="btn btn-outline-success me-2" type="button">Log a
        Shipment</button>
      <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
    </form>
  </nav>


  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/warehouses">Warehouses</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/shipments">My Shipment History</router-link>
    <router-link to="/inventory/:id">Current Inventory</router-link>
  </nav> -->
  <router-view />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
