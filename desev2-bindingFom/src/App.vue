<!--
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío evaluado: Binding de formularios (I)
-->

<script>
export default {
  data() {
    return {
      tituloTarjeta: '',
      rutaImagenChip: '',
      numeroTarjeta: '',
      fechaExpiracion: '',
      propietario: '',
      rutaImagenVisa: ''
    }
  },
   mounted() {
    // Inicializar los tooltips de Bootstrap 5.3 manualmente
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
</script>

<template>
  <div id="app">
      <form>
        <div>
          <label>Título de la tarjeta: </label>
          <input v-model="tituloTarjeta" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="Visa Classic Crédito"/>
        </div>

        <div>
          <label>Chip SRC: </label>
          <input v-model="rutaImagenChip" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="/chip.png"/> 
        </div>
        
        <div>
          <label>Número: </label>
          <input v-model="numeroTarjeta" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="400 500 600 700"/>
        </div>
        
        <div>
          <label>Fecha de expiración: </label>
          <input v-model="fechaExpiracion" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="01/30"/>
        </div>
        
        <div>
          <label>Propietario: </label>
          <input v-model="propietario" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="WILLIAM HENRY GATES III"/>
        </div>
        
        <div>
          <label>Tipo de tarjeta SRC: </label>
          <input v-model="rutaImagenVisa" data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-title="/visa.png"/>
        </div>
      </form>

      <div class="carnet">
        <h3>{{ tituloTarjeta }}</h3>
        
        <img width="40" :src="rutaImagenChip" alt="imagen de un chip" />
        <div>
          <h2>{{ numeroTarjeta }}</h2>
          <span>Fecha Exp: <b>{{ fechaExpiracion }}</b></span>
        </div>
        <footer>
          <span>{{ propietario}}</span>
          <img :src="rutaImagenVisa" width="60" alt="logo de visa"/>
        </footer>
      </div>
    </div>

</template>

<style scoped>
.carnet {
  width: 400px;
  height: 230px;
  background: var(--clr-fondo-tarjeta);
  color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px 2px var(--clr-negro);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  font-size: 20px;
}

h2 {
  font-size: 30px;
  letter-spacing: 10px;
  margin-bottom: 15px;
  text-shadow: 0px 0px 1px gold;
  font-family: Times;
}

b {
  font-size: 16px;
}
</style>
