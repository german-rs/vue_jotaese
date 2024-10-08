<script >
export default{
  name: 'App',
  data(){
    return{
      urlImg: "./src/assets/logo.svg",
      colorTitulo: 'green', //E.1.
      ancho: '60%', //E.2.

      unColor: '', //E.3.
      fondo: '',
      borde: '',

      girar: true, //E. 4. También puede ser una expresión 1+2==3

      colorTexto: false,
      fondoTexto: false,
      pesoTexto: false,
      estiloTexto: false,
      fuenteTexto: false
    }
  }
}
</script>

<template>
  <div>
    <input v-model="colorTexto" type="checkbox" value="Color"> <label>Color</label>
    <input v-model="fondoTexto" type="checkbox" value="Fondo"> <label>Fondo</label>
    <input v-model="pesoTexto" type="checkbox" value="Negrita"> <label>Negrita</label>
    <input v-model="estiloTexto" type="checkbox" value="Cursiva"> <label>Cursiva</label>
    <input v-model="fuenteTexto" type="checkbox" value="San-serif"> <label>San-serif</label>

    <p :class="{
      'color-texto': colorTexto,
      'fondo-texto': fondoTexto,
      'peso-texto': pesoTexto,
      'estilo-texto': estiloTexto,
      'fuente-texto': fuenteTexto}"
    >Lorem ipsum dolor sit amet consectetur adipisicing 
      elit. Explicabo nesciunt iste libero! Totam 
      perspiciatis rem nesciunt aspernatur iure quaerat 
      id? Voluptas corrupti illum ipsam eius ratione 
      dicta autem nam earum?</p>
  </div>

  <!-- Ejercicio 4.  -->
  <div>
    <p :class="{alReves: girar}">🙈🙉🙊</p>
  </div>

  <!-- Ejercicio 3.  -->
  <div>
    <div>
      <label>Color: </label>
      <input type="text" v-model="unColor" placeholder="green">
    </div>
    <div>
      <label for="">Fondo: </label>
      <input v-model="fondo" type="text" placeholder="black">
    </div>
    <div>
      <label for="">Borde: </label>
      <input v-model="borde" type="text" placeholder="yellow">
    </div>
    <p :style="{
      color: unColor,
      backgroundColor: fondo,
      border: `2px solid ${borde}`
      }">Lorem ipsum dolor sit amet consectetur adipisicing 
      elit. Cum quo ducimus veritatis fugit quia aliquid 
      nam, dignissimos quos doloremque odit.</p>
  </div>

  <!-- Ejercicio 2.  -->
  <img 
  :style="{width: ancho}" 
  :src="urlImg" alt="Logo de Vue">

  <!-- Ejercicio 1. -->
  <h1 :style="{color: colorTitulo}">Hola mundo</h1>
</template>

<style scoped>
.color-texto{
  color: violet;
}
.fondo-texto{
  background-color: blue;
}
.peso-texto{
  font-weight: 900;
}
.estilo-texto{
  font-style: italic;
}
.fuente-texto{
  font-family: sans-serif;
}

.alReves{
  transform: rotate(180deg);
}
</style>
