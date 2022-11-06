<template lang="pug">
.top-name
  .fluid
  .avatar-container
    img(src='/avatar/avatar1.png')
</template>

<style lang="scss">
.top-name {
  width: 50%;
  margin: 15% 25%;
  aspect-ratio: 1;
  position: relative;
  > .avatar-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 3px #0002;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > .fluid {
    background: linear-gradient(35deg, rgba(255,234,196,1) 0%, rgba(252,255,0,1) 50%, rgba(255,182,0,1) 100%);
    animation: fluid 15s ease 0s infinite;
    width: 100%;
    height: 100%;
    opacity: .4;
  }
}
@keyframes fluid {  
  0%, 100% {
    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
    transform: rotate(0deg);
  } 14% {
    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
  } 28% {
    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
  } 42% {
    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
  } 56% {
    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
  } 70% {
    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
  } 84% {
    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
    transform: rotate(360deg);
  }
}
</style>