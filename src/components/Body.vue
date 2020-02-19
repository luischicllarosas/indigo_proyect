<template>
  <!-- Fuente : https://bulma.io/documentation/columns/responsiveness/ -->
  <div>
    <!-- Columna 1 -->
    <div
      class="columns is-gapless is-marginless	"
      v-for="(image, index) in images"
      :key="index"
    >
      <div class="column has-background-danger">
        <figure class="image is-2by1">
          <img :src="image.url_left" />
        </figure>
      </div>
      <div class="column has-background-warning">
        <figure class="image is-2by1">
          <img :src="image.url_right" />
        </figure>
      </div>
    </div>
    <!-- Columna 4 -->
    <section class="hero hero-body indigo-background">
      <div class="has-text-centered">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          url_left: "https://picsum.photos/id/800/500/500",
          url_right: "https://picsum.photos/id/881/500/500?grayscale"
        },
        {
          url_left: "https://picsum.photos/id/889/500/500",
          url_right: "https://picsum.photos/id/785/500/500"
        },
        {
          url_left: "https://picsum.photos/id/825/500/500?grayscale",
          url_right: "https://picsum.photos/id/804/500/500"
        }
      ]
    };
  }
};
</script>
<style>
.indigo-background {
  /* background-image: url("https://picsum.photos/2400/3400?grayscale"); */
  background: #00ff00 url("https://picsum.photos/2400/3400?grayscale") no-repeat
    fixed center;
}
</style>
