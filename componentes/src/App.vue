<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Persona from './components/Persona.vue'
export default {
  components: {
    Header,
    Hero,
    Persona
  },

  data() {
    return {
      personas: [
      {
        foto: "https://avatars.githubusercontent.com/u/499550?v=4",
        nombre: "Evan You",
        descripcion: "Creador de Vue Js",
      }, 
      {
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOXV71f7avr9mc4ClyIK0DLdp_HNIIHEsANyAy_pQnjAYuI-jqkNaEWNvECZAO_ftjeg&usqp=CAU",
        nombre: "Robert C. Martin",
        descripcion: "Co autor Manifiesto Agil",
      }, 
      {
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ2wyxmtbqDdFJWMA-yu4vmzGy999LWNMqQ&s",
        nombre: "Bjarne Stroustrup",
        descripcion: "Creador de C++",
      }
      
    ]
    }
  }
}
</script>

<template>
  <div>
    <Header />
    <Hero />
    <div class="personas">
      <div v-for="persona in personas">
        <Persona :foto="persona.foto" :nombre="persona.nombre" :descripcion="persona.descripcion"/>
      </div>
    </div>

  </div>
</template>

<style>
.personas {
  width: 80%;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
}
</style>