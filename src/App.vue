
<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt
    }
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt
    }
  }
}
</script>


<template>

  <main class="flex-shrink-0">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container px-5">
        <a class="navbar-brand" href="index.html"></a>
        <img src="/assets/logo-white.png" width="100" height="100">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Login</a></li>
            <!-- <li class="nav-item"><a class="nav-link" href="/">Home</a></li> -->
            <li class="nav-item"><a class="nav-link" href="/shipment/new">New Shipment</a></li>
            <li class="nav-item"><a class="nav-link" href="/shipments">All Shipments</a></li>
            <li class="nav-item"><a class="nav-link" href="/inventory">Check Inventory</a></li>
            <li class="nav-item"><a class="nav-link" href="/print/new">New Printing</a></li>
            <!-- <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li> -->
            <!-- <li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li> -->
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
                <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                <li><a class="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                <li><a class="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>


  </main>
  <div class="container">
    <router-view />
  </div>
  <!-- Footer-->
  <footer class="bg-dark py-4 mt-auto">
    <div class="container px-5">
      <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="col-auto">
          <div class="small m-0 text-white">Copyright &copy; Eshel Publications 2022</div>
        </div>
        <!-- <div class="col-auto">
          <a class="link-light small" href="#!">Privacy</a>
          <span class="text-white mx-1">&middot;</span>
          <a class="link-light small" href="#!">Terms</a>
          <span class="text-white mx-1">&middot;</span>
          <a class="link-light small" href="#!">Contact</a>
        </div> -->
      </div>
    </div>



  </footer>

</template>

<style>

</style>
