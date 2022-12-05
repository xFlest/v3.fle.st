<template lang="pug">
.blog-layout
  aside(v-if="windowAspect > 1.2")
    header.blog-title
      figure.avatar
        img(src='/avatar/avatar1.png' alt='icon_xFlest')
      h1.blog-title-text ふれすとの#[wbr]ノート。
        p xFlest's #[wbr]Note
  header(v-else)
  main
    p content
  aside(v-if="windowAspect > 1.2")
    p.blog-index # index
</template>

<script>
export default {
    data() {
        return {
            windowAspect: ""
        };
    },
    mounted() {
        const resizeWindow = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            this.windowAspect = width / height;
        };
        window.addEventListener("resize", resizeWindow);
        resizeWindow();
    },
}
</script>

<style lang="scss">
.blog-layout {
  display: flex;
  justify-content: center;
  background-color: $white;
  padding: 4vmin 0;
  > main {
    background-color: #fff;
    width: min(100vh, 62vw);
    margin: 0 4vmin;
    border-radius: min(2rem, 3vmin);
    min-height: 180vh;
  }
  > header {
    + main {
      width: 94vw
    }
  }
  > aside {
    width: 15vw;
    background-color: $white;
    border-radius: min(2rem, 3vmin);
    &:has(.blog-title) {
      margin-left: 4vmin;
    }
    &:has(.blog-index) {
      margin-right: 4vmin;
    }
    > .blog-title {
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
  }
}
</style>
