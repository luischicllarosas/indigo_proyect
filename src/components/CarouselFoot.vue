<template>
  <section>
    <b-carousel-list
      class="overflow-x-scroll"
      v-model="values"
      :data="items"
      :arrow="arrow"
      :arrow-hover="arrowHover"
      :items-to-list="perList"
      :repeat="repeat"
      :has-drag="drag"
      :has-grayscale="gray"
      :has-opacity="opacity"
      :items-to-show="5"
    />
  </section>
</template>
<script>
export default {
  data() {
    return {
      arrow: true,
      arrowHover: true,
      drag: true,
      gray: false,
      opacity: false,
      values: 1,
      perList: 1,
      repeat: true,
      items: [
        {image: this.getLink()},
        {image: this.getLink()},
        {image: this.getLink()},
        {image: this.getLink()},
        {image: this.getLink()},
        {image: this.getLink()},
        {image: this.getLink()},
        {image: this.getLink()},
        {image: this.getLink()},
      ]
    };
  },
  methods: {
    getLink(){
        var random = Math.round(Math.random() * (999 - 801) + 1)
        return `https://picsum.photos/id/${random}/700/800`
    }  
  },
};
</script>
<style>
.carousel-slide {
  border: 0px solid transparent !important;
}
.overflow-x-scroll {
  overflow-x: auto;
}

.overflow-x-scroll::-webkit-scrollbar {
    width: 1em;
    height: 0.7em;
}
.overflow-x-scroll::-webkit-scrollbar-thumb {
    background: silver;
    border-radius: 10px;
}
</style>
