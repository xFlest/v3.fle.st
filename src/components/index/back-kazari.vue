<template lang="pug">
.kazari
  .kazari-line
  .kazari-emoji(v-emoji) 🐣
</template>

<style lang="scss">
.kazari {
  &-line {
    height: 35vh;
    width: 1px;
    margin-left: .5rem;
    background-color: $black;
  }
  &-emoji {
   height: 1em;
   width: 1em;
   margin: 0 .05em 0 .1em;
   vertical-align: -0.1em;
  }
}
</style>