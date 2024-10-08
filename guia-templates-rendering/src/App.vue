<script>
export default{
  data(){
    return{
      email: '',
      password: '',
      age : null,
      phone: '',
      requisitos : [
        'Dormí 4 horas',
        'Tomé 8 vasos de agua',
        'Consumí los nutrientes que me recomendó el doctor'
      ],
      requisitosSeleccionados : []
    }
  }
}
</script>

<template>
<div class="form__container">
  <form> 
    <div>
      <h2>Formulario con Vue</h2>
    </div>
    <div>
      <label>Email: </label> 
      <input v-model="email" />
      <p v-show="!email.includes('@')"> 
        El correo debe incluir un arroba @
      </p>
    </div> 
    <div>
      <label for="contraseña">Contraseña: </label>
      <input type="password" v-model="password" id="contraseña">
      
      <!-- <p v-show="password.length < 8"> -->
      <p v-if="password.length < 8">
        La contraseña debe contener al menos 8 caracteres.
      </p>
    </div>
    <div>
      <label for="edad">Edad: </label>
      <input type="text" v-model="age">
      <p v-show="age < 21">
        Debe tener al menos 21 años
      </p>
    </div>
    <div>
      <label for="telefono">Teléfono: </label>
      <input type="text" v-model="phone" id="telefono">
      <p v-if="!/^\d*$/.test(phone)">
        El teléfono solo debe contener números
      </p>
    </div>
    <div>
      <h3>Requisitos cumplidos</h3>
      <div v-for="requisito in requisitos">
        <input type="checkbox" :value="requisito"
        v-model="requisitosSeleccionados">{{ requisito }}
      </div>
      <p v-show="requisitosSeleccionados.length < requisitos.length">
        Debes cumplir con todos los requisitos
      </p>
    </div>
  </form>
</div>
</template>

<style scoped>
.form__container{
  width: 400px;
  height: auto;
  background-color: antiquewhite;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 3px 3px 5px orangered;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

p{
  color: red
}
</style>
