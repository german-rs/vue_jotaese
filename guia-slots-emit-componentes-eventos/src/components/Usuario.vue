<script>
export default {
    name: 'Usuario',
    props: ["foto", "email", "nombre"],
}
</script>

<template>
    <div class="listado__usuarios" >
        <img 
            :src="foto" 
            alt="Foto de usuario" 
            v-if="foto" 
            @click="$emit('ver-detalle', { nombre, email, foto })" 
        /> 
        <button 
            @click="$emit('eliminar', email)" 
            class="btn btn-outline btn-warning"
        >Eliminar</button>
    </div>
</template>

<style scoped>
.listado__usuarios{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

img {
    width: 100px;
    height: 100px; 
    cursor: pointer; 
}
</style>