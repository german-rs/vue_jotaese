<script>
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';
  import Instrumento from './components/Instrumento.vue';
  import Footer from './components/Footer.vue';
  export default{
    components:{
      Header,
      Hero,
      Instrumento,
      Footer
    },
    data(){
      return{
        instrumentos:[
          {
            foto: 'https://audiomusicacl.vtexassets.com/arquivos/ids/170318/bateria-electronica-avatar-a71-1109774-1.jpg',
            nombre: 'Batería electrónica',
            precio: '$649.900',
          },
          {
            foto: 'https://audiomusicacl.vtexassets.com/arquivos/ids/176132/guitarra-electrica-ibanez-azes31-vm-color-rojo-212246-1.jpg',
            nombre: 'Guitarra eléctrica',
            precio: '$429.900',
          },
          {
            foto: 'https://audiomusicacl.vtexassets.com/arquivos/ids/168012/teclado-personal-casio-cts200-color-rojo-1108765-3.jpg',
            nombre: 'Teclado',
            precio: '$499.900',
          },
          {
            foto: 'https://audiomusicacl.vtexassets.com/arquivos/ids/169875/controlador-dj-pioneer-ddj200-211592-1.jpg',
            nombre: 'Controlador DJ',
            precio: '$209.900',
          },
          {
            foto: 'https://audiomusicacl.vtexassets.com/arquivos/ids/171351/acordeon-scimone-l1308-color-rojo-60-bajos-34-teclas-incluye-case-205058-1.jpg',
            nombre: 'Acordeón Scimone',
            precio: '$699.900',
          },
          {
            foto: 'https://audiomusicacl.vtexassets.com/arquivos/ids/173006/bajo-electrico-ibanez-5-cuerdas-gsr205bfwnf-210937-1.jpg',
            nombre: 'Bajo eléctrico Ibanez',
            precio: '$349.990',
          }

        ]
      }
    }
  }
</script>

<template>
  <div>
    <Header/>
    <Hero/>
    <div class="productos" >
      <div v-for="instrumento in instrumentos" >
        <Instrumento 
          :foto="instrumento.foto"
          :nombre="instrumento.nombre"
          :precio="instrumento.precio"
        />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  .productos{
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    gap: 2em;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-evenly;
  }
</style>
