<script>
    export default{
        name: 'DetalleUsuario',
        props: ['nombre', 'email', 'foto']
    }    
</script>

<template>
    <div>
        <div class="container">
            <img 
                class="foto" 
                :src="foto"  
                alt="Foto usuario" 
                v-if="foto" 
            >
            <h3>{{ nombre }}</h3>
            <p>{{ email }}</p>
        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .foto{
        max-width: 200px;
        width: 100%;
        height: auto;
    }
    h3{
        font-size: 1.5em;
        font-weight: 800;
    }
</style>