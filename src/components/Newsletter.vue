<template>
  <div class="newsletter">
    <section class="container news-hero newsletter-container">
      <div class="columns is-horizontal">
        <div class="column is-3">
          <b-field class="is-marginless is-padding-medium">
            <b-icon icon="email-open-outline" size="is-large"></b-icon>
            <label
              class="has-text-weight-semibold is-size-4 has-text-white news-title"
              >Newsletter</label
            >
          </b-field>
          <div class="has-text-weight-semibold has-text-centered">
            ¿Quieres saber más de nuestros eventos y noticias?
          </div>
        </div>
        <div class="column news-column">
          <b-field>
            <b-input
              class="news-input"
              placeholder="Nombres y Apellidos"
              size="is-medium"
            >
            </b-input>
          </b-field>
        </div>
        <div class="column news-column">
          <b-field>
            <b-input
              class="news-input"
              placeholder="email@ejemplo.com"
              size="is-medium"
              icon="email"
            >
            </b-input>
            <b-button
              type="is-dark news-button"
              size="is-medium"
              icon-right="arrow-right"
              >Suscribete</b-button
            >
          </b-field>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
.newsletter {
  background: purple;
  color: white;
  /* padding: 10px 105px; */
}
.news-title {
  margin-left: 10px;
}
.news-button {
  border-radius: 0px;
}
.news-input > input {
  border-radius: 0px !important;
}
.news-input > .icon {
  color: purple !important;
}
.news-column {
  align-self: center;
}
.is-padding-medium {
  padding: 0 20%;
}
.news-button{
  display: inline;
}
.news-button > .icon {
  vertical-align: middle;
}
.news-hero{
  padding: 2rem 1.5rem;
}
</style>
