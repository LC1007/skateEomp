<template>
  <div class="about">
    <img src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100">
    <div class="heading">
      <h1 class="heading-text text-white">About Us</h1>
    </div>
    <h1 class="side-text">SKATE<span>HUB</span></h1>
    <img src="https://i.postimg.cc/Gp5wQ8TF/New-Project-1.png" alt="" class="w-100" v-motion-slide-right >
    <div class="container w-50 ">
    <div class="move">
      <h1 class="text-white">About Us - Welcome to SkateHub</h1>
        
      <p class="text-white">  At SkateHub, we live and breathe skateboarding. Our passion for the sport and culture is what drives us to provide you with the ultimate destination for all your skateboard needs. Whether you're a seasoned pro or just stepping onto a board for the first time, we're here to fuel your skateboarding journey. we're committed to enhancing your skateboarding journey. We're driven by authenticity, quality, and the vibrant skate culture. As riders, we're here to contribute to the ever-growing world of skateboarding.

        Thank you for being part of the SkateHub family. Let's shred and inspire, together. </p>
    </div>
  </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>



.container{
  position: relative;
  text-align: center;
  color: white;
}

.side-text {
  font-size: 7rem;
  color: white;
  transform: rotate(-90deg);
  position: fixed;
  right: 73rem;
  bottom: 15rem;
  font-weight: 200;
  z-index: 2;
}
.move{
  position: absolute;
  bottom: 7rem;
  width: 50%;
}

.heading{
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  z-index: 1;
  bottom: 32rem;
  left: 30rem;
  padding-inline: 2rem;
  padding-block: 2rem;
  margin-right: 62rem;

}

.heading-text{
  font-size: 7rem;
}



</style>