<template lang="pug">
.content-container
  main
    Nuxt
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
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