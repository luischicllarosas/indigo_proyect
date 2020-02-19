<template>
  <div class="has-background-black">
    <section class="container has-text-white foot-hero">
      <div class="columns is-gapless">
        <div class="column is-6">
          <div class="column">
            <p class="has-text-weight-semibold foot-title">Telefonos</p>
            <p>440-3099, 421-2428 y 441-2232.</p>
          </div>
          <div class="column">
            <p class="has-text-weight-semibold foot-title">Direccion :</p>
            <p></p>
          </div>
          <div class="column">
            <p class="has-text-weight-semibold foot-title">Horarios :</p>
            <p>Lunes a Sábados de 11am - 8pm.</p>
            <p>Domingos y feriados de 11 a.m. - 7 p.m.</p>
          </div>
        </div>
        <div class="column is-6 columns">
          <div class="column">
            <p class="has-text-weight-semibold foot-title">Indigo</p>
            <ul>
              <li v-for="(item, index) in indigo_links" :key="index">
                <a class="has-text-white" href="">{{ item.link }}</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <p class="has-text-weight-semibold foot-title">Legal</p>
            <ul>
              <li v-for="(item, index) in legal_links" :key="index">
                <a class="has-text-white" href="">{{ item.link }}</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <div class="columns is-multiline">
              <div class="column">
                <p class="has-text-weight-semibold foot-title">Visitanos</p>
                <ul>
                  <!-- <li> -->
                    <a href="#" class="padding-small">
                      <b-icon
                        type="is-white"
                        icon="facebook-box"
                        size="is-medium"
                      ></b-icon>
                    </a>
                  <!-- </li> -->
                  <!-- <li> -->
                    <a href="#" class="padding-small">
                      <b-icon
                        type="is-white"
                        icon="instagram"
                        size="is-medium"
                      ></b-icon>
                    </a>
                  <!-- </li> -->
                  <!-- <li> -->
                    <a href="#" class="padding-small">
                      <b-icon
                        type="is-white"
                        icon="tripadvisor"
                        size="is-medium"
                        pack="fab"
                      ></b-icon>
                    </a>
                  <!-- </li> -->
                </ul>
              </div>
              <div class="column">
                <p class="has-text-weight-semibold foot-title">Hablemos</p>
                <p>(+511) 440-3099</p>
                <p>(+511) 521-2428</p>
                <p>(+511) 441-2232</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indigo_links: [
        { link: "Nosotros" },
        { link: "Artistas" },
        { link: "Notas" },
        { link: "Eventos" },
        { link: "Regalos" },
        { link: "Tienda" },
        { link: "Contacto" }
      ],
      legal_links: [
        { link: "Terminos y Condiciones de Uso" },
        { link: "Politicas de Privacidad y Confidencialidad" },
        { link: "Politicas de Devoluciones" }
      ]
    };
  }
};
</script>
<style lang="css">
.foot-title {
  margin-bottom: 5px;
  font-size: 1.1rem;
}
.padding-small{
  padding:10% 10% 10% 0;
}
.foot-hero{
  padding: 2rem 1.5rem;
}
</style>
