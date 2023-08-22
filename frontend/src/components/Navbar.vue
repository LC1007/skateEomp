<template>
 
  <div>
    <div class="container position-fixed d-flex justify-content-evenly div-sticky">
      <!-- <img src="../assets/images/Screenshot_2023-08-19_121219-removebg-preview.png" alt="" class="logo me-auto"> -->
      <h1>SKATEHUB</h1>
      <nav class="m-5 navbar nav-sticky">
        
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
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .text{
      color: black;
      text-decoration: none;
    }
    .logo{
      width: 16rem;
    }

    h1{
      color: white;
      font-size: 3rem;
    }

    .nav-sticky{
      
    }
    .div-sticky{
      position: relative;
      z-index: 99999;
      background: rgba(0, 0, 0, 0.3);
    }
</style>