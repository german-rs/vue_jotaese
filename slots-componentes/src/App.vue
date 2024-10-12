<script>
  import Card from './components/Card.vue';
  import Letras from './components/Letras.vue';
  import Numeros from './components/Numeros.vue';
  import Home from './components/Home.vue';
  import Contacto from './components/Contacto.vue';
  export default{
    components:{
      Card,
      Letras,
      Numeros,
      Home,
      Contacto
    },
    data(){
      return{
        componentesARenderizar: 'Letras',
        paginaARenderizar: 'Home'
      }
    }
  }
</script>

<template>
  <div class="card">
    <h2>Ejercicio 1</h2>
    <Card :imgSrc="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'">
      <h3>Title</h3>
      <p>Description</p>
      <button>Ver más</button>
    </Card>
    <hr>
  </div>

  <div>
    <h2>Ejercicio 2</h2>
    <h3>Componentes Dinámicos</h3>
    <button @click="componentesARenderizar = 'Letras'">Letras</button>
    <button @click="componentesARenderizar = 'Numeros'">Números</button>
    <div>
      <component :is="componentesARenderizar"/>
    </div>
    <hr>
  </div>

<div>
  <h2>Ejercicio 3</h2>
  <nav>
    <ul>
      <li><a @click="paginaARenderizar = 'Home'">Home</a></li>
      <li><a @click="paginaARenderizar = 'Contacto'">Contactos</a></li>
    </ul>
  </nav>
  <div>
      <component :is="paginaARenderizar"/>
    </div>
</div>
</template>

<style scoped>
  nav{
    background-color: black;
    color: whitesmoke;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ul{
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 2em;
  }
  li{
    list-style: none;
  }
  a{
    cursor: pointer;
  }
</style>
