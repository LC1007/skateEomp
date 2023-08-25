<template>
  <div>
    <img
      src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg"
      class="img w-100"
    />
    <div class="heading">
      <h1 class="heading-text text-white">Admin</h1>
    </div>
    <h1 class="side-text">SKATE<span>HUB</span></h1>
    <div class="container">
      <h1 class="text text-white">Product Table</h1>
      <button class="btn btn-outline-light my-5">Add Product</button>
      <div class="table-responsive">

          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Skateboards</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Product url</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in skateboards" :key="item.skateID">
                <td>{{ item.skateID }}</td>
                <td>{{ item.skateboards }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.category }}</td>
                <td><img :src="item.prodUrl" style="width: 10rem" alt="" /></td>
                <td>
                  <button class="btn btn-outline-light  mx-1">Edit</button>
                  <button class="btn btn-outline-light"  @click="delProd(item.skateID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>

      <h1 class="text text-white">User Table</h1>
      <button class="btn btn-outline-light my-5">Add Product</button>
      <div class="table-responsive">

          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Age</th>
                <th>Gender</th>
                <th>Email Address</th>
                <th>Profile URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.profileUrl }}</td>
                <td>
                  <button class="btn btn-outline-light  mx-1">Edit</button>
                  <button class="btn btn-outline-light"  @click="delUser(item.skateID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions , mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['skateboards', 'users'])
  },
  mounted() {
    this.fetchBoards(),
    this.fetchUsers()
  },
  methods:{
    ...mapActions(['fetchBoards', 'fetchUsers']),
    delProd(skateID){
        this.$store.dispatch('delProduct', skateID)
    }
  }
};
</script>

<style scoped>
.container {
  background-color: rgb(25, 25, 25);
  position: relative;
  padding-left: 10rem;
  bottom: 4rem;
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

th {
  padding-left: 3rem;
}
td {
  padding-left: 3rem;
  background-color: rgb(79, 79, 79);
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  border-radius: 20px;
  background-color: rgba(24, 24, 24, 0.58);
  position: relative;
  z-index: 1;
  bottom: 32rem;
  left: 34rem;
  padding-inline: 2rem;
  padding-block: 2rem;
  margin-right: 70rem;
}

.heading-text {
  font-size: 7rem;
}
</style>
