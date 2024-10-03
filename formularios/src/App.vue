<script >
export default{
  name: 'App',
  data(){
    return {
      nombreDelCurso: '',
      numeroDeTelefono: '',
      perritoSrc: "https://i.imgur.com/Y0QQmIK.jpeg",
      altImg: 'perro',
      ciudadImg: 'https://static.independent.co.uk/2023/06/02/11/newFile-2.jpg',
      altImgCiudad: 'Ciudad de Cambridge',
      bannerSRC: '',
      bannerLabel: '',
      letra: '',
      imagenDeMascota: '',
      calificacion: '',
      colorProducto: '',
      genero: [],
      form:{
        comentario: ''
      },
      articulo:{
        titulo: '',
        contenido: ''
      }
    }
  }
};
</script>

<template>
<div>
  <form>
    <div>
    <label for="">Título</label>
    <br>
    <input type="text" v-model="articulo.titulo" />
  </div>
  <div>
    <label for="">Contenido</label>
    <br>
    <textarea rows="4" v-model="articulo.contenido"></textarea>
  </div>
  </form>
  <p>{{ articulo }}</p>
</div>

<!-- Ejemplo 11  - Formularios en Vue Select -->
<div>
  <form>
    <label>Cuéntanos sobre tu experiencia: </label> 
    <textarea v-model="form.comentario"></textarea>
  </form>
 <p> {{ form }}</p>
</div>


<!-- Ejemplo 10  - Formularios en Vue Select -->
<div>
  <form>
    <label>Lenguajes de programación que domina: </label> <ul>
    <li>
    <input v-model="genero" name="genero" type="checkbox" value="Rock" /> 
    Rock
    </li> 
    <li>
    <input v-model="genero" name="genero" type="checkbox" value="Baladas" />
    Baladas 
    </li>
    <li>
    <input v-model="genero" name="genero" type="checkbox" value="Urbano" />
    Urbano 
    </li>
    <li>
    <input v-model="genero" name="genero" type="checkbox" value="Jazz" />
    Jazz 
    </li>
    <li>
    <input v-model="genero" name="genero" type="checkbox" value="Blues" />
    Blues 
    </li>
    </ul>
{{ genero }} 
</form>
</div>


<!-- Ejemplo 9  - Formularios en Vue Select -->
<div>
  <h3>Seleccine el color de su producto</h3>
  <label for="">Azul
    <input type="radio" value="azul" name="color" v-model="colorProducto" checked="checked"/>
  </label><br>
  <label for="">Blanco
    <input type="radio" value="blanco" name="color" v-model="colorProducto" />
  </label> <br>
  <label for="">Negro
    <input type="radio" value="negro" name="color" v-model="colorProducto" />
  </label>
  <h4>{{ colorProducto }}</h4>
</div>




<!-- Ejemplo 8  - Formularios en Vue Select -->
<div>
<form>
  <label>¿Cómo calificas el servicio recibido? </label> 
  <ul>
    <li>
      <input type="radio" value="5" name="calificacion" v-model="calificacion" /> Muy bueno
    </li> 
    <li>
      <input type="radio" value="4" name="calificacion" v-model="calificacion" />Bueno 
    </li>
    <li>
      <input type="radio" value="3" name="calificacion" v-model="calificacion" />Neutral 
    </li>
    <li>
      <input type="radio" value="2" name="calificacion" v-model="calificacion" />Malo 
    </li>
    <li>
      <input type="radio" value="1" name="calificacion" v-model="calificacion" />Muy malo 
    </li>
  </ul> 
</form>
<p>{{ calificacion }}</p>
</div>


<!-- Ejemplo 7  - Formularios en Vue Select -->
<div>
  <br><br>
  <form>
    <label>Animal: </label>
    <select v-model="imagenDeMascota">
    <option value="https://i.imgur.com/Y0QQmIK.jpeg">Perro</option> 
    <option value="https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp">Gato</option> 
    <option value="https://www.clinicaveterinariazarpa.com/wp-content/uploads/2019/04/huron-cuidados-basicos-veterinario.jpg">Hurón</option> 

    </select> 
  </form>
  <div>
    <img :src="imagenDeMascota" alt="Mascota">
  </div>
</div>



<!-- Ejemplo 6  - Formularios en Vue Select -->
<div>
  <br><br>
  <form>
    <label>Licencia clase: </label>
    <select v-model="letra">
    <option value="a">A</option> 
    <option value="b">B</option> 
    <option value="c">C</option> 
    <option value="d">D</option> 
    <option value="e">E</option> 
    <option value="f">F</option>
    </select> 
  </form>
  <p>{{ letra }}</p>
</div>



<!-- Ejemplo 5  -Formularios en Vue input -->
<div>
  <br>
  <form>
  <label>{{ bannerLabel }}
  <input type="text" v-model="bannerLabel">
  </label>

  <br><br>
  <label>Agrega la url de una imagen:</label>
  <input v-model="bannerSRC" />
  </form>
  <img :src="bannerSRC" width="200" />

  <!-- https://i.imgur.com/Y0QQmIK.jpeg  -->
</div>


<!-- Ejemplo 4  -->
<div>
  <img :src="ciudadImg" :alt="altImgCiudad"/>
</div>

<!-- Ejemplo 3 v-model data binding -->
<div>
  <br/>
  <img v-bind:src="perritoSrc" :alt="altImg"/>
  <img :src="perritoSrc" :alt="altImg"/>
</div>

<!-- Ejemplo 2 v-model data binding (sin span) -->
<div>
  <p>Para más información contactarse al número {{ numeroDeTelefono }}</p>
  <input type="text" v-model="numeroDeTelefono">
</div>

  <!-- Ejemplo 1 de v-model data binding  -->
<div>
 <h1>Bienvenido al curso de <span> {{ nombreDelCurso }}</span> </h1>
 <input type="text" v-model="nombreDelCurso">
</div>



</template>

<style scoped>
span{
  color: #3bf27f;
}
img{
  width: 300px;
  border-radius: 10px;
}
</style>
