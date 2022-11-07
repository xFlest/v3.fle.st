<template lang="pug">
.content-container
  main(v-bind:class="{'isDesktop': $device.isDesktop}")
    Nuxt
</template>

<script>
export default {
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
  background-color: $white;
  overflow: hidden;
  width: 100vw;
  height: var(--vh, 100vw);
  > main {
    width: min(var(--vh, 100vw)*0.7, 120vw);
  }
}
</style>