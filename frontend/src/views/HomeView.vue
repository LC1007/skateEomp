<template>
  <div class="home">
    <img src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100">
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
                  <router-link :to="{ name: 'byProduct', params: {id: item.skateID}, query: {skateboard: item.skateboard, img: item.prodUrl}}"><button class="btn  btn-outline-light ">View More</button></router-link>
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
      goToProduct(){
        this.$router.push({
          name: this.name,
          params: this.params.id,
          query: this.query.name
        })
      }
    }
  }
</script>


<style scoped>


.div{
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  padding-top: 1.5rem;
  position: relative;
  bottom: 4rem;
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

</style>