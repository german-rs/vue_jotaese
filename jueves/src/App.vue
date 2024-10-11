<script >
  export default{
    name: 'App',
    data(){
      return{
        nuevaTarea: '',
        tareas: [],
        nuevoColor: '',
        colores: [],
        tamanioFuente: 16,
        ancho: 200
      }
    },  
    methods:{
      saludar(){
        alert('Hola mundo desde vuejs');
        // this.mostrarNombre(); //Llamar función.
      },
      mostrarNombre(){
        console.log('Hola mi nombre es Germán');
      },
      agregarTarea(){
        const nuevaTarea = this.nuevaTarea;
        this.tareas.push(nuevaTarea);
        this.nuevaTarea = '';
      },
      agregarCirculo(){
        const nuevoColor = this.nuevoColor;

        this.colores.push(nuevoColor);
        this.nuevoColor = '';
      },
      send(){
        console.log('hola');
      }, 
      incrementar(){
       this.tamanioFuente++; 
      },
      disminuir(){
        this.tamanioFuente--;
      },
      aumentarTamanioImg(){
        this.ancho = this.ancho + 10;
      },
      disminuirTamanioImg(){
        this.ancho = this.ancho - 10;
      }

    }
  }
</script>

<template>
  <div>
    <h3>Ejercicio 7</h3>
    <input 
    type="text" 
    @keyup.up="aumentarTamanioImg" 
    @keydown.down="disminuirTamanioImg" >

    <img src="./assets/logo.svg" 
    :style="{
      width: ancho + 'px'
      }">
  </div>

<div>
  <h3>Ejercicio 6</h3>
  <input 
    type="text" 
    @keyup.up="incrementar" 
    @keydown.down="disminuir"
    :style="{
      fontSize: tamanioFuente + 'px' 
    }">
</div>


<!-- E.5 -->
<div>
  <h3>Formulario E.5</h3>
  <form @submit.prevent="send">
  <button>Enviar</button>
</form>
</div>

<!-- E.4 Pendiente-->
<div>
  <h3>Ejercicio 4.</h3>
  <input v-model="nuevoColor" type="text">
  <button @click="agregarCirculo">Agregar</button>
  <ul>
    <!-- <li v-for="color in colores" style="{backgroundColor : color, width: 50px, borderRadius: 50%}"> -->
    <!-- </li> -->
  </ul>
</div>

<div>
  <!-- E.3 -->
  <h3>Ejercicio 3.</h3>
  <input type="text" v-model="nuevaTarea" name="" id="">
  <button @click="agregarTarea">Agregar</button>
  <u>
    <li v-for="tarea in tareas">{{ tarea }}</li>
  </u>
</div>
<div>
  <!-- E. 1 -->
  <h3 @click="saludar" >Hazme click</h3>

  <!-- E.2.  -->
  <img @dblclick="mostrarNombre" src="./assets/logo.svg" alt="" style="width: 200px;">
</div>


</template>

<style scoped>

</style>
