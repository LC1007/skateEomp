<template>
    <div>
        <img src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="w-100 h-100" alt="">
        <div class="container bg-dark">
        <div class="heading">

                <h1 class=" text text-white">Contact us</h1>
            </div>
            <form>
                <div class="row">
                    <div class="col-6">
                        <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label text-white">Full Name</label>
                      <input type="email" class="form-control bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                      <input type="email" class="form-control bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label text-white">Message</label>
                      <textarea name="" id="" cols="90" rows="5" class=" bg-transparent"></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-light">Submit</button>
                    </div>
                    <div class="col-6">
                      <h3>
                          Contact
                      </h3>
                      <p>skatehub@gmail.com</p>
                      <h3>
                          Location
                      </h3>
                      <p>Landsdown, Life Choices Academy</p>
                    </div>
                </div>
              </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    width: 50%;
    position: relative;
    bottom: 4rem;
    border-radius: 5%;
    padding-bottom: 4rem;
}

.heading{
 padding-block: 3rem;
}

.text{
    font-size: 4.5rem;
}

h3{
    color: white;
}

p{
    color: white;
}





</style>