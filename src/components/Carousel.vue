<template>
  <!-- Fuente ::  https://buefy.org/documentation/carousel -->
  <section>
    <b-carousel
      :indicator="indicator"
      :indicator-background="indicatorBackground"
      :indicator-inside="indicatorInside"
      :indicator-mode="indicatorMode"
      :indicator-position="indicatorPosition"
      :indicator-style="indicatorStyle"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section class="hero is-fullheight">
          <!-- <div class="hero-body has-text-centered"> -->
          <!-- <h1 class="title">{{ carousel.title }}</h1> -->
          <figure class="image carousel-image">
            <img :src="carousel.link" />
          </figure>
          <!-- </div> -->
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      indicator: true,
      indicatorBackground: false,
      indicatorInside: true,
      indicatorMode: "click",
      indicatorPosition: "is-bottom",
      indicatorStyle: "is-lines",
      carousels: [
        { link: "https://picsum.photos/id/365/600/1200?grayscale", color: "info" },
        { link: "https://picsum.photos/id/962/600/1200", color: "success" },
        { link: "https://picsum.photos/id/500/600/1200?grayscale", color: "warning" },
        { link: "https://picsum.photos/id/617/600/1200", color: "danger" }
      ]
    };
  }
};
</script>
<style>
    .carousel-image img{
        height: 100vh;
    }
</style>
