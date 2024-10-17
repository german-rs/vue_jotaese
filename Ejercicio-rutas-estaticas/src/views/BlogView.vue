<template>
    <div>
        <h1>{{ tituloEntrada }}</h1>
        <router-link :to="paginar(false)">Anterior</router-link> | 
        <router-link :to="paginar(true)">Avanzar</router-link>
        <br>
        <button @click="volverInicio">Volver al inicio</button>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default{
    name: 'BlogView',
    methods:{
        paginar(siguiente){
            const entrada = parseInt(this.$route.params.entrada);
            //if(siguiente === true)
            if(siguiente){
                return entrada < 10 ? `/blog/${entrada + 1}`: `/blog/${entrada}`; 
            }else{
                return entrada > 1 ? `/blog/${entrada - 1}`: `/blog/${entrada}`; 
            }
        },
        volverInicio(){
            return this.$router.push('/');
        }
    },
    computed:{
        tituloEntrada(){
            return `Entrada ${this.$route.params.entrada} del Blog`
        }
    }
}
</script>