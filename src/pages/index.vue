<template lang="pug">
div
  Top
  Dot.dot-space
  About
  Triflest
</template>

<script>
import Top from '~/components/index/top/top.vue';
import Dot from '~/components/svg/dot.vue';
import About from '~/components/index/about/about.vue';
import Triflest from '~/components/svg/triflest.vue';

export default {
  components: {
    Top,
    Dot,
    About,
    Triflest
},
  layout: 'default',
}
</script>

<style lang="scss">
.dot-space {
  width: min(20rem, 60vmin);
  display: block;
  margin: min(5rem, 15vmin) auto;
}
</style>