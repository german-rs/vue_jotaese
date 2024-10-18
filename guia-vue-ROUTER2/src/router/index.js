import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductosView.vue'),
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue'),
      props: () =>{
        return{
          telefono: '99988877766',
          email: 'contacto@contacto.com'
        }
      }
    },
    {
      // Para visualizar localhost:5173/producto/100
      path: "/producto/:id",
      name: "producto",
      component: () => import("../views/ProductoDetalleView.vue"),
      props: (route) => {
        return {
          id: Number(route.params.id),
          nombre: "Tomate",
          precio: 2000,
        };
      },
      children: [
        {
          path: "comentarios",
          component: () =>
            import(
              "../views/ComentariosView.vue"
            ),
          name: "comentarios",
        },
      ],

    }   
  ]
})

export default router
