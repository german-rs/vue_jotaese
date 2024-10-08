<!-- <script setup>
  import { ref } from 'vue'
  const estaSeleccionado = ref(false)
</script> -->

<script>
  export default{
    data(){
      return{
        meses: [
          'Enero', 'Febrero', 'Marzo', 'Abril', 
          'Mayo', 'Junio', 'Julio', 'Agosto', 
          'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ], //E.3.
        mesElegido : '',
        dias: [
          'Lunes', 'Martes', 'Miércoles', 'Jueves', 
          'Viernes', 'Sábado', 'Domingo'
        ], //E.2.
        estaSeleccionado: false //E.1.
      }
    }
  }
</script>

<template>
  <!-- Ejercicio 3. Directiva v-for -->
  <div>
    <h3>Meses del año</h3>
    <select id="meses" name="meses" v-model="mesElegido">
     <option disabled value=''>Selecione un mes</option>
     <option v-for="mes in meses" :value="mes">{{ mes }}</option>
    </select>
    <p>Mes: {{ mesElegido }}</p>
  </div>

  <!-- Ejercicio 2. Directiva v-for -->
  <div>
    <h2>Días de la semana</h2>
   <ul>
    <li v-for="dia in dias">{{ dia }}</li>
    <!-- <li v-for="(dia, indice) in dias" :key="indice">{{ dia }}</li> -->
   </ul>
  </div>

  <!-- Ejercicio 1. Directiva v-if - v-else y v-show  -->
  <div>
    <p>Mostrar</p>
    <input type="checkbox" v-model="estaSeleccionado">
    <p v-if="estaSeleccionado">Harry Houdini</p>
    <p v-else="estaSeleccionado">Algo ocurre con el mago</p>
    <p v-show="estaSeleccionado">Otro mago ('v-show')</p>
  </div>
</template>

<style scoped>

</style>
