<template>
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Ingreso</h3>
            <p class="subtitle has-text-grey">
              Coloque sus datos para ingresar
            </p>
            <div class="box">
              <figure class="avatar">
                <!-- <router-link to="/">
                  <img src="../assets/animalfriend.png" width="45%" />
                </router-link> -->
              </figure>
              <form @submit.prevent="login">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-medium"
                      type="text"
                      placeholder="Tu email"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-medium"
                      type="password"
                      placeholder="6 caracteres como mìnimo"
                      v-model="pass"
                    />
                  </div>
                </div>
                <div class="notification is-danger" v-if="error.message">
                  {{ error.message }}
                </div>
                <div class="field">
                  <label class="checkbox">
                    <input type="checkbox" />
                    Recordarme
                  </label>
                </div>
                <button
                  class="button is-block is-large is-fullwidth"
                  style="background:#cce268"
                >
                  Ingresar
                </button>
              </form>
            </div>
            <p class="has-text-grey has-text-centered">
              <router-link to="/registro">Registrarse</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Firebase from "firebase";
import { ToastProgrammatic as Toast } from "buefy";

export default {
  data() {
    return {
      email: "",
      pass: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    login() {
      var Router = this.$router;
      var Fail = this.error;
      var Toast = this.Toast;
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.pass)
        .then(function(result) {
          Router.replace({ name: "Home" });
        })
        .catch(function(err) {
          switch (err.code) {
            case "auth/invalid-email":
              Fail.message = "El email que intenta ingresar es inválido.";
              break;
            case "auth/user-not-found":
              Fail.message = "Usuario o email no encontrado.";
              break;
            case "auth/wrong-password":
              Fail.message = "La contraseña no coincide con el email.";
              break;
            case "auth/user-disabled":
              Fail.message =
                "Parece que la cuenta que intenta acceder esta deshabilitada.";
              break;
            case "auth/too-many-requests":
              Fail.message =
                "Se ha sobrepasado el límite de intentos permitidos, por favor inténtelo de nuevo dentro de unos minutos.";
              break;
            default:
              Fail.message = "Correo y contraseña incorrectos";
              break;
          }
        });
    }
  }
};
</script>
<style></style>
