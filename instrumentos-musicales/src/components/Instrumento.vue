<script>
    export default{
        props:['foto', 'nombre', 'precio']
    }
</script>

<template>
    <div class="producto">
        <div 
            class="fotoInstrumento"
            :style="{
                backgroundImage: `url(${foto})`
            }">
        </div>
        <h2>{{ nombre }}</h2>
        <p>{{ precio }}</p>
    </div>
</template>

<style scoped>
    .producto{
        margin-top: 15px;
        text-align: center;
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .fotoInstrumento{
        background-image: url("https://avatars.githubusercontent.com/u/499550?v=4");
        background-size: cover;
        background-position: center;
        height: 200px;
        width: 200px;
        border-radius: 50%;
    }
</style>