<template>
  <b-navbar class="container">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <!--  -->
    </template>
    <!-- Log In :: Off -->
    <template slot="end" v-if="user">
      <b-navbar-dropdown :label="user.email">
        <!-- User Verified  : true -->
        <b-navbar-item
          href="#"
          @click="logOut"
          v-if="user_verified"
          class="has-text-success has-text-weight-bold"
        >
          Verificado</b-navbar-item
        >
        <b-navbar-item
          @click="verifiedEmail"
          v-else
          class="has-text-danger has-text-weight-bold"
        >
          Verificar Usuario
        </b-navbar-item>
        <!-- <b-navbar-item href="#" @click="logOut"> Cerrar Sesion</b-navbar-item> -->
        <b-navbar-item @click="logOut"> Cerrar Sesion</b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <!-- Log In :: On -->
    <template slot="end" v-else>
      <b-navbar-dropdown>
        <b-navbar-item>
          <router-link to="/registro">Registrarse</router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="/ingreso">Ingreso</router-link>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <!-- End -->
  </b-navbar>
</template>
<script>
import { Firebase } from "@/db";
import { ToastProgrammatic as Toast } from "buefy";
export default {
  data() {
    return {
      user: "",
      user_verified: ""
    };
  },
  methods: {
    logOut() {
      Firebase.auth()
        .signOut()
        .then(res => {
          // eslint-disable-next-line no-console
          console.log(res);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    verifiedEmail() {
      var user = Firebase.auth().currentUser;
      user
        .sendEmailVerification()
        .then(function() {
          // Email sent.
          Toast.open({
            message:
              "Se ha enviado un enlace a tu correo, por favor verificalo.",
            duration: 5000,
            type: "is-warning"
          });
        })
        .catch(function(error) {
            console.log(error);
            
        //   Toast.open({
        //     message:
        //       "Se ha enviado un enlace a tu correo, por favor verificalo.",
        //     duration: 5000,
        //     type: "is-warning"
        //   });
        });
    }
  },
  created() {
    Firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.user = user;
        this.user_verified = user.emailVerified;
      } else {
        this.user = null;
      }
    });
  }
};
</script>
