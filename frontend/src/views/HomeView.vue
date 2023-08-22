<template>
  <div class="home">
    <div class="div">
      <h1 class="text-center text-uppercase mb-5">Featured Products</h1>
      <div class="container">
        <div class="row">
          <div class="col" v-for="item in skateboards" :key="item.skateID">
              <div class="card" style="width: 15rem;">
                <img :src="item.prodUrl" class="card-top-img custom-img" alt="">
                <div class="card-body">
                  <div class="card-title">{{ item.skateboard }}</div>
                  <div class="card-text">{{ item.quantity }}</div>
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
    }
  }
</script>


<style>
.div{
  background-color: white;
  padding: 4rem;
  margin-inline: 10rem;
  border-radius: 10px;
  position: relative;
  bottom: 5rem;
}

.custom-img{
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.custom-img:hover{
  object-fit: contain;
}
</style>