<!--
    Nombre estudiante: Germán A. Riveros Sepúlveda.
    Generación: 14.
    Jornada: Vespertina.   
    Desafío Evaluado: Introducción a Componentes Web y Vue JS.
-->

<script>
export default {
  data() {
    return {
      run: '22.222.222-2',
      apellidos: 'MUSK',
      nombres: 'ELON REEVE',
      nacionalidad: 'SUDAFRICANO',
      sexo: 'M',
      fecha_nacimiento: '28 JUN 1971',
      numero_documento: '222.222.222',
      fecha_emision: '01 ENE 2025',
      fecha_vencimiento: '01 ENE 2030'
    }
  }
}
</script>

<template>
  <div class="carnet">
      <aside>
        <div>
          <span>CEDULA DE INDENTIDAD</span>
          <img width="40" src="/chile_bandera.png" alt="bandera de Chile" />
        </div>

        <img src="/foto_elon.jpg" alt="Fotografía del rostro de Elon Musk" />
        <p>RUN {{ run }}</p>
      </aside>

      <main>
        <header>
          <p>REPUBLICA DE CHILE</p>
          <span>SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN</span>
        </header>

        <section>

          <article>
            <header>APELLIDOS</header>
            <span>{{ apellidos }}</span>
          </article>

          <article>
            <header>NOMBRES</header>
            <span>{{ nombres }}</span>
          </article>

          <div class="grid-2-colums">
            <article>
              <header>NACIONALIDAD</header>
              <span>{{ nacionalidad }}</span>
            </article>
            <article>
              <header>SEXO</header>
              <span>{{ sexo }}</span>
            </article>
          </div>

          <div class="grid-2-colums">
            <article>
              <header>FECHA DE NACIMIENTO</header>
              <span>{{ fecha_nacimiento }}</span>
            </article>
            <article>
              <header>NÚMERO DOCUMENTO</header>
              <span>{{ numero_documento }}</span>
            </article>
          </div>

          <div class="grid-2-colums">
            <article>
              <header>FECHA DE EMISIÓN</header>
              <span>{{ fecha_emision }}</span>
            </article>
            <article>
              <header>FECHA DE VENCIMIENTO</header>
              <span>{{ fecha_vencimiento }}</span>
            </article>
          </div>

          <article>
            <header>FIRMA DEL TITULAR</header>
            <span>X Æ A-12</span>
          </article>

        </section>
      </main>
  </div>
</template>

<style scoped>
.carnet {
  width: 490px;
  height: 270px;
  background: var(--clr-bg-cedula);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 30% 1fr;
  padding: 15px;
  box-shadow: 0px 0px 10px 2px var(--clr-sombra-cedula);
}

aside div {
  display: flex;
}

aside > img {
  margin-top: 15px;
  width: 100%;
}

aside p {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
}
</style>
