<template>
  <div class="home">
    <img src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100">
    <div class="heading">
      <h1 class="heading-text text-white" >Welcome to <span class="ps-3">SkateHub</span></h1>
    </div>
    <div class="our-intro">
      <div>
        
      </div>
      <h1 class="our-heading text-light w-">
        Our Story
      </h1>
      <p class="our-text text-light w-">
        In the concrete jungles where dreams take flight, our skateboard journey began. Founded by a crew of lifelong riders in 2023, our startup skateboard company was born from a shared vision: to break molds, bridge styles, and create rides that pulse with innovation.
      </p>
    </div>
    <div class="container">
        <div class="div bg-dark">
    <h1 class="text-center text-white text-uppercase mb-5">Featured Products</h1>
        <div class="row g-5 m-2">
          <div class="col col-lg-4 col-md-6" v-for="item in featuredProds" :key="item.skateID">
              <div class="card h-100 w-100" style="width: 15rem;">
                <img :src="item.prodUrl" class="card-top-img custom-img" alt="">
                <div class="card-body">
                  <div class="card-title text-white">{{ item.skateboard }}</div>
                  <div class="card-text text-white">{{ item.quantity }}</div>
                  <button class="btn  btn-outline-light ">View More</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
      featuredProds(){
        return this.$store.state.featuredProds
      }
    },
    mounted(){
      this.$store.dispatch('fetchFeatured')
    },
    methods:{
    }
  }
</script>


<style scoped>


.div{
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding-top: 1.5rem;
  position: relative;
  bottom: 20rem;
}

.custom-img{
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.custom-img:hover{
  object-fit: contain;
}

.card{
  background-color: rgb(64, 63, 63);
}

.heading{
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  z-index: 1;
  bottom: 45rem;
  left: 4rem;
  padding-inline: 2rem;
  padding-block: 2rem;
  text-align: center;
  display:inline-block;
  white-space:nowrap;
 
}

span{
  display: flex;
}
.heading-text{
  font-size: 4rem;
  display: flex;
}

.our-text{
  position: relative;
  font-size: 20px;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
}

.our-intro{
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  bottom: 39rem;
  margin-right: 50%;
  left: 4rem;
  padding-inline: 2rem;
  padding-block: 2rem;
}

.heading-text:first-of-type {  
animation: showup 7s infinite;
}

.heading-text:last-of-type {
width:0px;
animation: reveal 7s infinite;
}

.heading-text:last-of-type span {
animation: slidein 7s infinite;

}

@keyframes showup {
0% {opacity:0;}
20% {opacity:1;}
80% {opacity:1;}
100% {opacity:0;}
}

@keyframes slidein {
0% { margin-left:-800px; }
20% { margin-left:-800px; }
35% { margin-left:0px; }
100% { margin-left:0px; }
}

@keyframes reveal {
0% {opacity:0;width:0px;}
20% {opacity:1;width:0px;}

80% {opacity:1;}

}



</style>