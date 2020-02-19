<template>
  <div>
    <Carousel />
    <Body />
    <CarouselFoot />
    <Newsletter />
    <Foot />
    <Sticky />

  </div>
</template>
<script>
import Carousel from "@/components/Carousel";
import Body from "@/components/Body";
import CarouselFoot from "@/components/CarouselFoot";
import Newsletter from "@/components/Newsletter";
import Foot from "@/components/Foot";
import Sticky from "@/components/Sticky";

export default {
  components: {
    Carousel,
    Body,
    CarouselFoot,
    Newsletter,
    Foot,
    Sticky
  }
};
</script>
<style></style>
