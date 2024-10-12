<script>
    export default {
        props: ["imgSrc"]
    }
</script>
<template>
    <div class="card" >
        <img 
            :src="imgSrc"
            alt="Card Image">
        <div class="card-content">
            <slot/>
        </div>    
    </div>
</template>
<style scoped>
img{
    width: 200px;
}
</style>