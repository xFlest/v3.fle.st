<template lang="pug">
header.blog-title
  figure.avatar
    img(src='/avatar/avatar1.png' alt='icon_xFlest')
  h1.blog-title-text ふれすとの#[wbr]ノート。
    p xFlest's #[wbr]Note
</template>

<style lang="scss">
.blog-title {
  width: 100%;
  > figure {
    margin: 0;
    width: 50%;
    aspect-ratio: 1;
    border-radius: 100%;
    box-shadow: 0 0 min(.8rem, 1.2vmin) rgba($black, .2);
    overflow: hidden;
    > img {
      width: 100%;
      display: block;
    }
  }
  > h1 {
    word-break: keep-all;
    font-size: min(1.6rem, 2.4vmin);
    margin: min(1.6rem, 2.4vmin) 0;
    font-family: 'Sawarabi Gothic', sans-serif;
    color: $black;
    > p {
      margin: min(.6rem, .9vmin) 0;
      font-size: min(1.2rem, 1.8vmin);
      opacity: .5;
      font-family: 'Outfit', 'Sawarabi Gothic', sans-serif;
      font-weight: lighter;
    }
  } 
}
</style>