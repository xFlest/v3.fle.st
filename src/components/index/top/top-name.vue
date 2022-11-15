<template lang="pug">
.top-name
  p.screenname xflest
  p.name #[span ふ]#[span れ]#[span す]#[span と]
</template>

<style lang="scss">
.top-name {
  height: 10vh;
}
.name {
  font-family: 'Sawarabi Gothic', sans-serif;
  text-align: center;
  font-size: min(3rem, 9vmin);
  .light-mode & {
    color: $black;
  }
  .dark-mode & {
    color: $white;
  }
  margin-top: max(-10rem, -30vmin);
  position: relative;
  font-weight: bold;
  letter-spacing: min(.3rem, .9vmin);
  user-select: none;
  > span {
    transition: transform .15s;
    display: inline-block;
    &:hover {
      transform: scale(1.2);
    }
  }
}
.screenname {
  font-family: 'League Script';
  color: rgba($yellow, 70%);
  text-align: center;
  font-weight: bold;
  font-size: min(4rem, 12vmin);
  transform: translateX(min(4rem, 12vmin));
  user-select: none;
}
</style>