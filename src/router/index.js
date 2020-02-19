import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from "@/views/Registro";
import Ingreso from "@/views/Ingreso";
import { Firebase } from "@/db";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: { name: "Home" }
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/registro",
    name: "registro",
    component: Registro,
    meta: {
      autentificado: false
    }
  },
  {
    path: "/ingreso",
    name: "ingreso",
    component: Ingreso,
    meta: {
      autentificado: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
console.log(app.$UsuarioActual);

router.beforeEach((to, from, next) => {
  // var autorized = to.matched.some(record => record.meta.isAuthenticated);
  var usuario = Firebase.auth().currentUser;
  if ((to.name == "ingreso" && usuario) || (to.name == "registro" && usuario)) {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
