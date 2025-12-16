<script setup>
// have json populate to login_success.vue
// import { ref } from 'vue'

// const officers = ref([])

// fetch('/path/to/your/officers.json')
//   .then(response => response.json())
//   .then(data => {
//     officers.value = data
//   })
import officers from '@/assets/officers_contact.json';

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
            <!-- <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>

  </header>
  <!-- this formats everything on the other pages because it wraps router-view -->
  <section class="container">
    <!-- <a>
      <img src="/flag_med" alt="Flag" />
    </a> -->
    <img src="/images/3-flags-small.jpg" alt="Flag" />
    <h1>Welcome to VFW Auxiliary 12202</h1>

    <!-- router-view is populated with everything on the other .vue pages if left empty -->
    <router-view>
    </router-view>
  </section>
  <footer class="card-footer">
    &copy; 2025 WDD330 class project. Angela Murray.
    <div class="footer-links">
      <ul>
        <li><a href="https://malta.vfwauxiliary.org/Account/NewLogin ">MALTA</a></li>
        <li><a href="https://vfwauxiliary.org/ ">National VFW Auxiliary</a></li>
        <li><a href="https://vfwauxva.org/di/vfw/v2/default.asp ">Virginia VFW Auxiliary</a></li>
      </ul>
    </div>

    <div class="more-footer-links">
      <ul>
        <li><a href="https://www.vafoodhandlers.com/eFoodMainReg ">Virginia Food Handlers Certification</a></li>
      </ul>
    </div>
  </footer>

</template>

<style>
/* .main-template {
  max-width: 800px;
  padding: 16px;
} */
/* used container instead */
/* container fluid */
</style>
