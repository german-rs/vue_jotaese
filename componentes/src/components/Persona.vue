<template>
    <div class="persona">
        <div  :style="{ 
            backgroundImage: `url(${foto})`
            }"
            class="avatar"
            ></div>
        <h2>{{ nombre }}</h2>
        <p> {{ descripcion }}</p>
    </div>
</template>

<script>
export default{
    props:['foto', 'nombre', 'descripcion']
}
</script>


<style scoped>
.persona {
    margin-top: 10px;
    text-align: center;
    width: fit-content;
}

.avatar {
    background-image:
        url("https://avatars.githubusercontent.com/u/499550?v=4");
    background-size: cover;
    background-position: center;
    height: 200px;
    width: 200px;
    border-radius: 50%;
}
</style>