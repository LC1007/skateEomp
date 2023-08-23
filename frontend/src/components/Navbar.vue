<template>
  
  <div class="position-relative container d-flex justify-content-evenly">
      <!-- <img src="https://i.postimg.cc/rpBBt6rc/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100"> -->
      <!-- <img src="../assets/images/Screenshot_2023-08-19_121219-removebg-preview.png" alt="" class="logo me-auto"> -->
      <nav class="mt-1 ps-3 navbar position-fixed bg-black" style="z-index: 9999">
        <h1>SKATE<span>HUB</span></h1>
        <ul>
          <li class="nav-item">
            <router-link class="text" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text" to="/about">About us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text" to="/store">Store</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text" to="/contact">Contact us</router-link>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .text{
      color: white;
      text-decoration: none;
      font-family: 'M PLUS 1', sans-serif;
    }
    .logo{
      width: 16rem;
    }

    h1{
      color: white;
      font-size: 3rem;
      font-family: 'Jost', sans-serif;
      font-weight: 300;
    }

</style>