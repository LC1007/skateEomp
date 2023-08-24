<template>
  <div class="about">
    <img src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100">
    <h1 class="side-text">SKATE<span>HUB</span></h1>
    <img src="https://i.postimg.cc/Gp5wQ8TF/New-Project-1.png" alt="" class="w-100" v-motion-slide-right >
    <div class="container w-50 ">
    <div class="move">
      <h1 class="text-white">About Us - Welcome to SkateHub</h1>
        
      <p class="text-white">  At SkateHub, we live and breathe skateboarding. Our passion for the sport and culture is what drives us to provide you with the ultimate destination for all your skateboard needs. Whether you're a seasoned pro or just stepping onto a board for the first time, we're here to fuel your skateboarding journey. </p>
    </div>
  </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.side-text{
  font-size: 7rem;
  color: white;
  transform: rotate(-90deg);
  position: relative;
  right: 40rem;
  top: 5rem;
  font-weight: 200;
}

.container{
  position: relative;
  text-align: center;
  color: white;
}

.move{
  position: absolute;
  bottom: 7rem;
  width: 50%;
}

</style>