<template>
  <div class="home">
    <div class="div bg-dark">
      <h1 class="text-center text-white text-uppercase mb-5">Products</h1>
      <div>
        <div class="container">
          <h2 class="text-white">skateboards</h2>
          <ul class="cards">
            <li class="card" v-for="item in skateboards" :key="item.skateID">
              <div>
                <h3 class="card-title text-white">{{ item.skateboard }}</h3>
                <img :src=item.prodUrl class="w-100 test" alt="">
                <div class="card-content">
                  <p class="text-white">{{ item.category }}</p>
                </div>
              </div>
              <div class="card-link-wrapper">
                <a href="" class="btn btn-danger">Buy Now</a>
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
                <a href="" class="btn btn-danger">Learn More</a>
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
};
</script>

<style>
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
</style>
