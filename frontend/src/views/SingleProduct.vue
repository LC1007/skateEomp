<template>
    <div>
        <div class="card m-5" style="width: 18rem">
            <img :src="$route.query.img" class="card-img-top" alt="">
            <div class="card-title text-white">
                {{ $route.query.skateboard }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>