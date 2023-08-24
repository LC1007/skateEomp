<template>
    <div>
        <img src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="img w-100">
        <div class="container">
            <h1 class="text text-white">Product Table</h1>
            <button class="btn btn-outline-light my-5">Add Product</button>
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
                    <tr v-for="item in skateboards" :key="item.skateID ">
                        <td >{{ item.skateID }}</td>
                        <td>{{ item.skateboards }}</td>
                        <td >{{ item.quantity }}</td>
                        <td >{{ item.amount }}</td>
                        <td >{{ item.category }}</td>
                        <td ><img :src="item.prodUrl" style="width: 10rem" alt=""></td>
                        <td >
                            <!-- Button trigger modal -->
                            <button class="btn btn-outline-light  mx-1">Edit</button>
                            
  
  <!-- Modal -->
  <div class="modal fade" style="margin-top: 5rem;" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
                            <!-- <button class="btn btn-outline-light  mx-1">Edit</button> -->
                            <button class="btn btn-outline-light ">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
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

<style scoped>

th{
    padding-left: 3rem;
}
td{
    padding-left: 3rem;
    background-color: rgb(79, 79, 79);
}

.text{
    display: flex;
    align-items: center;
    justify-content: center;
}




</style>