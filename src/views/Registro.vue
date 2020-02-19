<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="column is-5 is-offset-4">
            <h1 class="title has-text-grey has-text-centered">Regístrate</h1>
            <!-- <p class="subtitle has-text-grey"></p> -->
            <div class="box">
              <figure class="avatar has-text-centered">
                <router-link to="/">
                  <img src="" width="35%" />
                </router-link>
              </figure>
              <form @submit.prevent="registrar" autocomplete="off">
                <div class="field columns">
                  <label class="column is-4" for>Email</label>
                  <div class="control column">
                    <input
                      type="email"
                      class="input is-medium"
                      placeholder
                      autofocus="autofocus"
                      v-model="user.email"
                    />
                    <p
                      id="LValidarEmail"
                      class="is-size-7 has-text-centered"
                    ></p>
                  </div>
                </div>
                <div class="field columns">
                  <label class="column is-4" for>Contraseña</label>
                  <div class="control column">
                    <input
                      type="password"
                      style="opacity: 0;position: absolute;"
                    />
                    <input
                      type="password"
                      class="input is-medium"
                      placeholder
                      autofocus="autofocus"
                      autocomplete="off"
                      minlength="6"
                      v-model="user.password"
                    />
                  </div>
                </div>
                <div class="notification is-danger" v-if="error.message">
                  {{ error.message }}
                </div>
                <button
                  class="button is-block is-large is-fullwidth"
                  style="background:#cce268;color:white;"
                  type="submit"
                >
                  Registrarse
                </button>
              </form>
            </div>
            <p class="has-text-grey has-text-centered">
              <router-link to="/ingreso">Ingresar</router-link> 
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
import { ToastProgrammatic as Toast } from "buefy";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      error: {
        cod: "",
        message: ""
      }
    };
  },
  methods: {
    registrar() {
      var User = this.user;
      var Error = this.error;
      var Router = this.$router;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(function(user) {
          console.log(user);
          Toast.open({
            duration: 4000,
            message:
              "Ya estas registrado, por favor ingresa tu usuario para poder ingresar",
            position: "is-top",
            type: "is-success"
          });
          setTimeout(() => {
            Router.replace({ name: "ingreso" });
          }, 1000);
        })
        .catch(function(err) {
          switch (err.code) {
            case "auth/email-already-in-use":
              Error.message =
                "Este email o usuario ya existe, intente con otro.";
              break;
            case "auth/invalid-email":
              Error.message =
                "Este email o usuario no puede usarse para registrarse.";
              break;
            case "auth/operation-not-allowed":
              Error.message =
                "Parece que el registro no esta habilitado en este momento, vuelva a intentarlo mas tarde.";
              break;
            case "auth/weak-password":
              Error.message =
                "La contraseña es demasiado debil, debe tener al menos 6 caracteres";
              break;
            default:
              break;
          }
        });
    }
  }
};
</script>

<style>
/* require('@/assets/log.css') */
/* @import "../assets/login.css"; */
.column {
  /* align-self: center; */
}
</style>
