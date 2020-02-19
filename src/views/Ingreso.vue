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
                <!-- <button
                  class="button is-block is-large is-fullwidth"
                  style="background:#cce268"
                >
                  Ingresar
                </button> -->
                <b-button
                  type="is-success"
                  native-type="submit"
                  expanded
                  :loading="buttonActive"
                  >Ingresar</b-button
                >
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
      },
      buttonActive: false
    };
  },
  methods: {
    async login() {
      try {
        this.buttonActive = true;
        var Toast = this.Toast;
        var login = await Firebase.auth().signInWithEmailAndPassword(
          this.email,
          this.pass
        );
        this.$router.replace({ name: "Home" });
        this.messageError(err);
      } catch (error) {
        this.buttonActive = false;
        this.messageError(error);
      }
    },
    messageError(err) {
      switch (err.code) {
        case "auth/invalid-email":
          this.error.message = "El email que intenta ingresar es inválido.";
          break;
        case "auth/user-not-found":
          this.error.message = "Usuario o email no encontrado.";
          break;
        case "auth/wrong-password":
          this.error.message = "La contraseña no coincide con el email.";
          break;
        case "auth/user-disabled":
          this.error.message =
            "Parece que la cuenta que intenta acceder esta deshabilitada.";
          break;
        case "auth/too-many-requests":
          this.error.message =
            "Se ha sobrepasado el límite de intentos permitidos, por favor inténtelo de nuevo dentro de unos minutos.";
          break;
        default:
          this.error.message = "Correo y contraseña incorrectos";
          break;
      }
    }
  }
};
</script>
<style></style>
