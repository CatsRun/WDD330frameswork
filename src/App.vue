<script setup>
</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">VFW Auxiliary 12202</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <!-- REMOVE THIS. Only for testing -->
              <li class="nav-item">
                <router-link to="/login_success" class="nav-link">Login Successful</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
    <!-- this formats everything on the other pages because it wraps router-view -->
    <section class="container container my-4 flex-grow-1 text-center max-w-3xl mx-auto">
      <div class="hero ">
        <img src="/images/3-flags-small.jpg" alt="Flag" />
        <h1>Welcome to VFW Auxiliary 12202</h1>
      </div>
      <!-- router-view is populated with everything on the other .vue pages if left empty -->
      <router-view>
      </router-view>
    </section>
    <footer class="footer mt-auto py-3 bg-light  card-footer container-content fixed-bottom text-center">
      &copy; 2025 WDD330 class project. Angela Murray.
      <div class="footer-links">
        <ul class="link-dark">
          <li><a href="https://malta.vfwauxiliary.org/Account/NewLogin " class=" link-dark">MALTA</a></li>
          <li><a href="https://vfwauxiliary.org/ " class=" link-dark">National VFW Auxiliary</a></li>
          <li><a href="https://vfwauxva.org/di/vfw/v2/default.asp " class=" link-dark">Virginia VFW Auxiliary</a></li>
          <li><a href="https://www.vafoodhandlers.com/eFoodMainReg " class=" link-dark">Virginia Food Handlers
              Certification</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
}

#app li {
  list-style-type: none;
}

#navbarNav {
  font-weight: bold;
}

footer li {
  display: inline;
  margin: 0 10px;
}

.form-group {
  max-width: 500px;
  margin: 0 auto 10rem auto;
  text-align: left;
}
</style>
