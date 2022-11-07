<template lang="pug">
.content-container
  main(v-bind:class="{'isDesktop': $device.isDesktop}")
    Nuxt
</template>

<script>
export default {
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
  height: 100vh;
  > main {
    width: min(70vh, 100vw);
  }
}
</style>