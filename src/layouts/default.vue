<template lang="pug">
._
  Menu
  Header
  .content-container
    main(v-bind:class="{'isDesktop': $device.isDesktop}")
      Nuxt
</template>

<script>
import Header from '~/components/header.vue';
import Menu from '~/components/menu.vue';

export default {
  components: {
    Header,
    Menu
  },
  mounted() {
    window.addEventListener('resize', this.setHeight)
    this.setHeight()
  },
  methods: {
    setHeight() {
      const vh = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>

<style lang="scss">
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: var(--vh, 100vw);
  > main {
    width: min(var(--vh, 100vw)*0.7, 120vw);
  }
  .light-mode & {
    background-color: $white;
  }
  .dark-mode & {
    background-color: $black;
  }
}
</style>