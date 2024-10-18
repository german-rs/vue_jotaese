<script>
export default {
  props: {
    telefono: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }, 
  }
} 
</script>

<template>
    <div>
      <h1>Esta es la página Contacto</h1>
    </div>
    <div>
      <p>Teléfono: {{ telefono }}</p>
      <p>Correo: {{ email }}</p>
    </div>
    <div>
      <router-link to='/'>Volver al inicio</router-link>
    </div>
</template>
  
<style>
</style>