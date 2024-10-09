<script>
export default{
  data(){
    return{
      /* Ejercicio 1.  */
      fondo: "",
      colores: ["green", "purple", "pink", "black"],

      /* Ejercicio 2.  */
      espaciado : 0,

      /* Ejercicio 3.  */
      colorDeFondo : '',

      /* Ejercicio 4.  */
      horaSeleccionada: ""
    }
  }
}
</script>

<template>
  <div class="header">
    <h1>Guía - Templates y Rendering en Vue</h1>
    <h2>Estilos condicionales</h2>
  </div>
  <!-- Ejercicio 4.  -->
   <div class="container">

   
  <div class="ejercicio4">
      <h3>Ejercicio 4. </h3>
      <h4>Seleccione una Hora</h4>
      <input type="time" v-model="horaSeleccionada">
      <div :class="{
        'horario': true,
        'manana': horaSeleccionada >= '00:00' && horaSeleccionada < '12:00', 
        'tarde': horaSeleccionada >= '12:00' && horaSeleccionada < '19:00', 
        'noche': horaSeleccionada >= '19:00'}">

        <span v-if="horaSeleccionada < '12:00'"> Mañana</span>
        <span v-else-if="horaSeleccionada < '19:00'"> Tarde</span>
        <span :class="{ 'text-white': horaSeleccionada >= '19:00' }" v-else> Noche</span>
      </div>
    </div>

  <!-- Ejercicio 3.  -->
  <div class="ejercicio3" >
    <h3>Ejercicio 3. </h3>
    <h4>Seleccione un color</h4>
    <input type="color" v-model="colorDeFondo" name="" id="">
    <div 
    :style="{
      background: colorDeFondo, 
      height: '200px', 
      width: '200px',
      border: '1px dotted gray'
      }"
    >Este es un div que cambia de color</div>
  </div>

  <!-- Ejercicio 2.  -->
    <div class="ejercicio2">
      <h3>Ejercicio 2</h3>
      <h4>Modifique el espaciado de las palabras</h4>
      <input v-model="espaciado" type="range" id="points" name="points" min="0" max="100" step="1">
      <p :style="{'letter-spacing': espaciado + 'px'}">
        En solo pocas líneas estamos logrando cosas
        sorprendentes!!
      </p>
    </div>

    <!-- Ejercicio 1.  -->
    <div class="ejercicio1">
      <h3>Ejercicio 1.</h3>
      <h4>Seleccione un color para el fondo del texto</h4>
    <select v-model="fondo">
      <option v-for="color in colores">{{ color }}</option>
    </select>
    <h1 
    :style="{ background: fondo }"
    :class="{'text-white': fondo == 'black'}"
    >Enlace de estilos</h1> 
  </div>
</div>
</template>

<style scoped>
/* Ejercicio 4.  */
.horario{
  padding: 2em;
}

.text-white {
  color: white;
}

.manana{
  background-color: beige;
}

.tarde{
  background-color: orange;
}

.noche{
  background-color: purple;
}

/* Ejercicio 1.  */
.text-white {
  color: white; 
}
</style>
