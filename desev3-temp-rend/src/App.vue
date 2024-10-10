<!--
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío Evaluado: Templates y rendering en Vue
-->


<script>
export default{
  data(){
    return{
      colorDeFondo: '',
      colorDeTexto: '',
      ocultarMostrarTexto: true,
      radioDelBorde: 1,
      textoDelDiv: 'Vue.js es awesome',
      fuenteElegida: '',
      estilosDeFuente:[
        'Cursiva', 'Negrita', 'Subrayada', 
        'Tachada', 'Serif', 'Sans-serif'],
      opcidadSeleccionada: false,   
      tamanioFuente:'',
      opcionesTamanioFuente: [
        { id: 'reducida', value: 'reducida', label: 'Pequeña' },
        { id: 'mediana', value: 'mediana', label: 'Mediana' },
        { id: 'grande', value: 'grande', label: 'Grande' }
      ],
      coloresTooltip: [
        'Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta','Gray',
        'Orange','Purple', 'Pink', 'Brown', 'Violet', 'Indigo', 'Teal' 
      ]
    }
  }
}
</script>

<template>
  <main class="principal">
      
      <!-- Formulario.  -->
      <article class="contenedor__formulario mt-4">
        <form class="formulario" aria-labelledby="formulario">
        <div>
          <label data-tooltip-target="tooltip-default" class="block text-gray-700 text-sm font-bold mb-2" for="color-fondo">Color de fondo</label>
          <input v-model="colorDeFondo" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="color-fondo" id="color-fondo" aria-label="Escribe un color para el fondo">
        </div>

        <div>
          <label data-tooltip-target="tooltip-default" class="block text-gray-700 text-sm font-bold mb-2" for="color-texto">Color de texto</label>
          <input v-model="colorDeTexto" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="color-texto" id="color-texto" aria-label="Escribe un color para el texto" >
        </div>

        <div>
          <label class="md:w-2/3" for="mostrar-texto">
          <span class="inline text-gray-700 text-sm font-bold mb-2">Mostrar texto </span>
          <input v-model="ocultarMostrarTexto" class="mx-1" type="checkbox" name="mostrar-texto" id="mostrar-texto" aria-label="Selecciona la casilla para mostrar el texto" checked>
          </label>
          <span class="block text-gray-600 text-xs mt-1" id="opacidad-descripcion">Marca esta casilla para mostrar u ocultar el texto.</span>
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="cambiar-borde">Borde</label>
          <input v-model="radioDelBorde" type="range" name="cambiar-borde" id="cambiar-borde" min="1" max="50" step="1" aria-label="Selecciona la casilla para mostrar el texto" >
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="contenido-texto">Contenido textual</label>
          <textarea v-model="textoDelDiv" class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300" name="contenido-texto" id="contenido-texto"></textarea>
        </div>

        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="tipografia">Tipografía</label>
          <select v-model="fuenteElegida" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="tipografia" id="tipografia" aria-label="Selecciona el tipo de letra para el texto">
            <option disabled selected value="">Seleccione un estilo</option>
            <option v-for="estilo in estilosDeFuente" :value="estilo">{{ estilo }}</option>
          </select>
        </div>

        <div>
          <label class="inline text-gray-700 text-sm font-bold mb-2" for="opacidad">Activar opacidad </label>
          <input v-model="opcidadSeleccionada" class="mx-1" type="checkbox" name="opacidad" id="opacidad" aria-describedby="opacidad-descripcion">
          <span class="block text-gray-600 text-xs mt-1" id="opacidad-descripcion">Marca esta casilla para aplicar opacidad al elemento.</span>
        </div>

        <div>
          <fieldset class="mb-4">
            <legend class="my-2">Tamaño de letra</legend>
            <div v-for="(opcion, index) in opcionesTamanioFuente" :key="index" class="inline mx-2">
              <input 
                v-model="tamanioFuente" 
                type="radio" 
                :name="`tamanio-fuente`" 
                :id="opcion.id" 
                :value="opcion.value"
              >
              <label 
                class="inline text-gray-700 text-sm font-bold mb-2 mx-2" 
                :for="opcion.id"
              >{{ opcion.label }}</label>
            </div>
          </fieldset>
        </div>
        </form>
      </article>


      <!-- Div resultado -->
      <article class="contenedor__div" >
        <div  
        :class="{
          div__modificable: true,
          'opacidad': opcidadSeleccionada == true
          }" 
        :style="{
          background : colorDeFondo,
          borderRadius: radioDelBorde + '%' 
        }">
          <p v-show="ocultarMostrarTexto"
          :class="{
            texto__div: true,
            'textoEnCursiva': fuenteElegida == 'Cursiva',
            'textoEnNegritas' : fuenteElegida == 'Negrita',
            'textoSubrayado':fuenteElegida == 'Subrayada',
            'textoTachado': fuenteElegida == 'Tachada',
            'textoConSerifas': fuenteElegida == 'Serif',
            'textoSinSerifas': textoSinSerifas == 'Sans-serif',
            'fuenteReducida': tamanioFuente == 'reducida',
            'fuenteMediana': tamanioFuente == 'mediana',
            'fuenteGrande': tamanioFuente == 'grande'
            }"
          :style="{
            color: colorDeTexto,
            fontStyle: fuenteElegida,
          }" >{{ textoDelDiv }}</p>
        </div>
      </article>


      <!-- Tooltip -->
      <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Estos son algunos colores: {{ coloresTooltip.join(', ') }}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
  </main>

</template>

<style scoped>

.textoEnCursiva{
  font-style: italic;
}

.textoEnNegritas{
  font-weight: bold;
}

.textoSubrayado{
  text-decoration: underline;
}
.textoTachado{
  text-decoration: line-through;
}
.textoConSerifas{
  font-family: serif;
}

.textoSinSerifas{
  font-family: sans-serif;
}

.fuenteReducida{
  font-size: 9px;
}

.fuenteMediana{
  font-size: 16px;
}

.fuenteGrande{
  font-size: 26px;
}

.opacidad{
  opacity: 0.3;
}
</style>
