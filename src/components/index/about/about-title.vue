<template lang="pug">
.about-title
  img(src='/ribbon.png' alt='ribbon_flest')
  p.about-title-text ふれすと#[span について]
</template>

<style lang="scss">
.about-title {
  margin: min(20rem, 60vmin) auto 0;
  position: relative;
  width: min(26rem, 78vmin);
  > img {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-40deg);
    height:  min(1.6rem, 4.8vmin);
  }
  &-text {
    font-size: min(3rem, 9vmin);
    font-family: 'Sawarabi Gothic', sans-serif;
    font-weight: bold;
    color: $black;
    text-align: center;
    background-image: linear-gradient(to bottom, #0000 60%, $yellow 60.1%);
    > span {
      font-size: min(2.4rem, 7.2vmin);
    }
  }
}
</style>