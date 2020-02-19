import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registro from '@/views/Registro'
import Ingreso from '@/views/Ingreso'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: { name: "Home" }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: Ingreso
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
