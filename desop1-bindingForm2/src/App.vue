<script>
export default {
  data() {
    return {
      estudiante: {
        titulo: '',
        emoji: '',
        apreciacion: '',
        competenciasAprendidas: [],
        opinion: ''
      },
      competencias: [
        'Morfología de un componente', 
        'One-Way y Two-Way data binding', 
        'El patrón de diseño MVVM',
        'Directivas', 'Estado'
      ]
    }
  }
}
</script>

<template>
<div id="app">
  <div class="grid-container">

    <div class="grid-x grid-margin-x grid-margin-y align-center">

      <div class="formulario-contenedor cell small-12 medium-4">
        
        <form>
          <div class="grid-x grid-padding-x grid-margin-y">
            <div class="small-3 cell">
              <label for="titulo">Título:</label>
            </div>
            <div class="small-9 cell">
              <input type="text" id="titulo" v-model="estudiante.titulo">
            </div>
          </div>
          <hr>

          <div class="grid-x grid-padding-x grid-margin-y">
            <div class="small-3 cell">
              <label for="emoji">Emoji:</label>
            </div>
            <div class="small-9 cell">
              <select id="emoji" v-model="estudiante.emoji">
                <option selected value="🐢">🐢</option>
                <option value="🦦">🦦</option>
                <option value="🐉">🐉</option>
                <option value="🐈‍⬛">🐈‍⬛</option>
                <option value="🦖">🦖</option>
              </select>
            </div>
          </div>
          
          <hr>
          <div class="grid-x grid-padding-x grid-margin-y">
            <div class="small-3 cell">
              <label for="apreciacion">Apreciación:</label>
            </div>
            <div class="small-9 cell fluid">
              <input type="radio" name="apreciacion" v-model="estudiante.apreciacion" value="Regular" id="Regular" required><label for="Regular">Regular</label>
              <input type="radio" name="apreciacion" v-model="estudiante.apreciacion" value="Bien" id="Bien"><label for="Bien">Bien</label>
              <input type="radio" name="apreciacion" v-model="estudiante.apreciacion" value="Muy bien" id="Muy bien"><label for="Muy bien">Muy bien</label>
              <input type="radio" name="apreciacion" v-model="estudiante.apreciacion" value="Increible" id="Increible"><label for="Increible">Increible</label>
            </div>
          </div>
          <hr>

          <div class="grid-x grid-padding-x grid-margin-y">
            <div class="small-3 cell">
              <label>Competencias aprendidas:</label>
            </div>

            <div class="small-9 cell">
              <div v-for="competencia in competencias" :key="competencia">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="competencia"
                  :value="competencia"
                  v-model="estudiante.competenciasAprendidas"
                />
                <label class="form-check-label" :for="competencia">{{ competencia }}</label>
              </div>
            </div>
          </div>
          
          <hr>

          <div class="grid-x grid-padding-x grid-margin-y">
            <div class="small-3 cell">
              <label for="opinion">Opinión:</label>
            </div>
            <div class="small-9 cell">
              <textarea id="opinion" v-model="estudiante.opinion"></textarea>
            </div>
          </div>

        </form>
      </div>


      <div class="resultado cell small-12 medium-8">
        <div class="emoji">{{ estudiante.emoji }}</div>
        <h1>{{ estudiante.titulo }}</h1>
        <p>Y me parece <strong>{{ estudiante.apreciacion }}</strong></p>
        <p>He aprendido: <strong>{{ estudiante.competenciasAprendidas.join(', ') }}</strong></p>
        <p>En mi opinión el FrameWork es:</p>
        <p><strong>{{ estudiante.opinion }}</strong></p>
      </div>

    </div>
  </div>
</div>
</template>


<style scoped>
  .formulario-contenedor{
    background-color: var(--clr-negro-suave);
    border-radius: 10px;
    padding: 2em;
    min-width: 500px;
    max-width: 600px;
    height: auto;
  }

  .resultado{
    border-radius: 10px;
    border: 1px solid var(--clr-gris);
    padding: 2em;
    min-width: 500px;
    max-width: 600px;
    height: 400px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;
  }
</style>
