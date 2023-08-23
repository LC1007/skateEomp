<template>
  <div class="home">
    <img src="https://i.postimg.cc/rpBBt6rc/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100">

    <div class="div-store bg-dark">
      <h1 class="text-center text-white text-uppercase mb-5">Products</h1>
      <div>
        <div class="container">
          <h2 class="text-white">skateboards</h2>
          <ul class="cards">
            <li class="card" v-for="item in skateboards" :key="item.skateID">
              <div>
                <h3 class="card-title text-white">{{ item.skateboard }}</h3>
                <img :src="item.prodUrl" class="w-100 test" alt="">
                <div class="card-content">
                  <p class="text-white">{{ item.category }}</p>
                </div>
              </div>
              <div class="card-link-wrapper">
                <a href="" class="btn  btn-outline-light me-2">Buy Now</a>
                <router-link :to="{ name: 'byProduct', params: {id: item.skateID}, query: {skateboard: item.skateboard, img: item.prodUrl}}"><button class="btn  btn-outline-light ">View More</button></router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="container">
          <h2 class="text-white">Trucks</h2>
          <ul class="cards">
            <li class="card" v-for="item in trucks" :key="item.skateID">
              <div>
                <h3 class="card-title text-white">{{ item.skateboard }}</h3>
                <img :src=item.prodUrl class="w-100 test" alt="">
                <div class="card-content">
                  <p class="text-white">{{ item.category }}</p>
                </div>
              </div>
               <div class="card-link-wrapper">
                <a href="" class="btn  btn-outline-light me-2">Buy Now</a>
                <router-link :to="{ name: 'byProduct', params: {id: item.skateID}, query: {skateboard: item.skateboard, img: item.prodUrl}}"><button class="btn  btn-outline-light ">View More</button></router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    skateboards() {
      return this.$store.state.skateboards;
    },
    trucks() {
      return this.$store.state.trucks;
    },
  },
  mounted() {
    this.$store.dispatch("fetchBoards");
    this.$store.dispatch("fetchTrucks");
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
};
</script>

<style scoped>
.div {
  padding: 4rem;
  margin-inline: 1rem;
  border-radius: 10px;
  position: relative;
  bottom: 5rem;
}

.custom-img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.custom-img:hover {
  object-fit: contain;
}

.side-text {
  font-size: 7rem;
  color: white;
  transform: rotate(-90deg);
  position: relative;
  right: 40rem;
  bottom: 5rem;
  font-weight: 200;
}

.test {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.card{
  background-color: rgb(79, 79, 79);
}
</style>

