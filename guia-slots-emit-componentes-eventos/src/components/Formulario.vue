<script>
import Usuario from './Usuario.vue';
import DetalleUsuario from './DetalleUsuario.vue';
export default{
    components:{
        Usuario,
        DetalleUsuario
    },
    data(){
        return{
            usuarios: [],
            nombre: '',
            email: '',
            foto: '',
            usuarioSeleccionado: null
        }
    },
    methods:{
        agregarUsuario() {
            if (this.usuarios.find(usuario => usuario.email === this.email)) {
                alert('Este email ya está registrado.');
                return;
            }
            this.usuarios.push({ nombre: this.nombre, email: this.email, foto: this.foto });
            this.limpiarCampos();
        },
        limpiarCampos() {
            this.nombre = '';
            this.email = '';
            this.foto = '';
        },
        eliminarUsuario(email) {
            this.usuarios = this.usuarios.filter(usuario => usuario.email !== email);
        },
        mostrarDetalle(usuario) {
            this.usuarioSeleccionado = usuario; 
        }
    }
}
</script>
<template>
    <div class="layout">
        <aside class="sidebar">
            <div class="formulario">
                <form @submit.prevent="agregarUsuario">
                    <div class="input-container">
                        <label for="nombre">Nombre:</label>
                        <input class="input input-bordered w-full max-w-xs" type="text" name="nombre" id="nombre" v-model="nombre" required />
                    </div>
                    <div class="input-container">
                        <label for="foto">Foto:</label>
                        <input class="input input-bordered w-full max-w-xs" type="text" name="foto" id="foto" v-model="foto" required />
                    </div>
                    <div class="input-container">
                        <label for="email">Email:</label>
                        <input class="input input-bordered w-full max-w-xs" type="email" name="email" id="email" v-model="email" required />
                    </div>
                    <div class="button-container">
                        <button class="btn btn-outline btn-primary" type="submit" >Agregar</button>
                        <input class="btn btn-outline btn-success" type="reset" value="Limpiar" @click="limpiarCampos" />
                    </div>
                </form>
            </div>

            <div class="lista-usuarios">
                <h3>Listado de Usuarios</h3>
                <ul>
                    <li v-for="usuario in usuarios" :key="usuario.email">
                        <Usuario 
                            :nombre="usuario.nombre" 
                            :email="usuario.email" 
                            :foto="usuario.foto" 
                            @eliminar="eliminarUsuario(usuario.email)" 
                            @ver-detalle="mostrarDetalle(usuario)" />
                    </li>
                </ul>
            </div>
        </aside>

        <div 
            class="detalle-usuario" 
            v-if="usuarioSeleccionado"
        >
            <detalle-usuario 
                :nombre="usuarioSeleccionado.nombre" 
                :email="usuarioSeleccionado.email" 
                :foto="usuarioSeleccionado.foto"
                @close="usuarioSeleccionado = null" /> 
        </div>
    </div>
</template>

<style scoped>
.layout {
    display: flex; 
    height: auto;
    min-height: 100vh; 
}

.sidebar {
    width: 300px; 
    background-color: #172554; 
    color: white; 
    padding: 20px; 
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); 
    overflow-y: auto;
}

.detalle-usuario {
    flex-grow: 1; 
    padding: 20px; 
    background-color: #f9f9f9; 
    overflow: hidden; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.formulario, .lista-usuarios {
    margin-bottom: 20px; 
}

.input-container,
.button-container {
    margin-bottom: 15px; 
}

button {
    cursor: pointer; 
}

.lista-usuarios h3{
    margin: 1em 0;
}

.lista-usuarios ul{
    display: flex;
    flex-direction: column;
    gap: 1em;
} 

.lista-usuarios ul li{
    list-style: none;
}

.button-container{
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
}

input{
    color: #172554;
}

</style>

<!--
    Usuarios:
    https://randomuser.me/api/portraits/men/26.jpg
    https://randomuser.me/api/portraits/women/92.jpg
    https://randomuser.me/api/portraits/men/23.jpg    
    https://randomuser.me/api/portraits/women/1.jpg
    https://randomuser.me/api/portraits/women/6.jpg
-->
