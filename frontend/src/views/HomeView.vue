<template>
  <div class="home">
    <img src="https://i.postimg.cc/rpBBt6rc/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100">
    <div class="div bg-dark">
      <h1 class="text-center text-white text-uppercase mb-5">Featured Products</h1>
      <div class="container">
        <div class="row g-2">
          <div class="col" v-for="item in skateboards" :key="item.skateID">
              <div class="card" style="width: 15rem;">
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
      skateboards(){
        return this.$store.state.skateboards
      }
    },
    mounted(){
      this.$store.dispatch('fetchBoards')
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
  margin-inline: 10%;
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