<script>
export default{
  name: 'App',
  data(){
    return {
      usuario:{
        nombre: '',
        nacionalidad: '',
        genero: '',
        direccion: '',
        estadoCivil: '',
        continentesVisitados: []
      },
      continentes: ["Asia", "Europa", "África", "América", "Oceanía"],
    }
  }
};
</script>

<template>
  <div class="container">
  <form>
  <div class="my-3">
    <label class="form-label">Nombre</label>
    <input class="form-control" v-model="usuario.nombre" /> 
  </div>
    <div class="mb-3">
      <label class="form-label">Nacionalidad</label>
      <select class="form-select" v-model="usuario.nacionalidad">
        <option value="chile">Chile</option>
        <option value="extranjero">Extranjero</option> 
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Genero</label> 
      <div class="d-flex gap-3">
        <div class="form-check"> 
          <input class="form-check-input" type="radio"name="flexRadioDefault" id="m" value="M" v-model="usuario.genero" />
          <label class="form-check-label fw-normal" for="m"> Masculino</label> 
        </div>
      <div class="form-check"> 
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="f" value="F" v-model="usuario.genero" />
        <label class="form-check-label fw-normal" for="f"> Femenino </label> 
      </div>
    </div> 
  </div>
  <div class="my-3">
      <label class="form-label">Dirección</label>
      <input class="form-control" v-model="usuario.direccion" /> 
    </div>

    <div class="mb-3">
      <label class="form-label">Estado Civil</label> 
      <div class="d-flex gap-3">
        <div class="form-check"> 
          <input class="form-check-input" type="radio" checked name="estadoCivil" id="estadoCivil" value="Soltero" v-model="usuario.estadoCivil" />
          <label class="form-check-label fw-normal" for="m"> Soltero</label> 
        </div>
      <div class="form-check"> 
        <input class="form-check-input" type="radio" name="estadoCivil" id="estadoCivil" value="Casado" v-model="usuario.estadoCivil" />
        <label class="form-check-label fw-normal" for="f"> Casado </label> 
      </div>
    </div> 
  </div>

  <div class="mb-3">
        <label class="form-label">Continentes Visitados</label>
        <div class="d-flex flex-wrap gap-3">
          <div class="form-check" v-for="continente in continentes" :key="continente">
            <input
              class="form-check-input"
              type="checkbox"
              :id="continente"
              :value="continente"
              v-model="usuario.continentesVisitados"
            />
            <label class="form-check-label" :for="continente">{{ continente }}</label>
          </div>
        </div>
      </div>

  </form>

<div class="planilla text-center mt-5 w-75 mx-auto"> 
  <h1>Planilla de Usuario</h1>
  <hr />
  <table class="table table-striped mb-5">
    <thead> 
      <tr><th>Nombre</th> <th>Nacionalidad</th> <th>Género</th></tr> 
    </thead> 
    <tbody>
      <tr>
        <td>{{ usuario.nombre }}</td> 
        <td>{{ usuario.nacionalidad }}</td> 
        <td>{{ usuario.genero }}</td>
      </tr> 
      <tr><th colspan="2" >Dirección de Residencia</th><th colspan="2">Estado Civil</th></tr> 
      <td colspan="2">{{ usuario.direccion }}</td><td colspan="2">{{ usuario.estadoCivil }}</td>  
      <tr><th colspan="3" >Continentes Visitados</th></tr>
      <td colspan="3" >{{ usuario.continentesVisitados.join(', ') }}</td>
    </tbody>
  </table> 
</div>
</div>
</template>

<style scoped>


</style>
