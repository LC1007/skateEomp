<template>
    <div>
        <img src="https://i.postimg.cc/xCWBmDbY/christophe-meyer-ffv-A4qp-Rj-HY-unsplash.jpg" class="w-100 h-100" alt="">
        <div class="heading">
            <h1 class="heading-text text-white">Contact Page</h1>
          </div>
        <h1 class="side-text">SKATE<span>HUB</span></h1>
        <div class="container bg-dark">
        <div class="heading-1">

                <h1 class=" text text-white">Contact us</h1>
            </div>
            <form>
                <div class="row">
                    <div class="col-6">
                        <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label text-white">Full Name</label>
                      <input type="email" class="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                      <input type="email" class="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label text-white">Message</label>
                      <textarea name="" id="texta" cols="90" rows="5" class="bg-dark w-100" required></textarea>
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
    bottom: 20rem;
    border-radius: 5%;
    padding-bottom: 4rem;
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

.heading-1{
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

#exampleInputEmail1 {
    color: rgb(255, 255, 255);
}

#texta {
    color: blue;
}

.heading{
    border-radius: 20px;
    background-color: rgba(24, 24, 24, 0.58);
    position: relative;
    z-index: 1;
    bottom: 32rem;
    left: 27rem;
    padding-inline: 2rem;
    padding-block: 2rem;
    margin-right: 51.5rem;
  
  }
  
  .heading-text{
    font-size: 7rem;
  }



</style>