<template lang="pug">
.blog-layout
  aside(v-if="windowAspect > 1.2")
    BlogTitle
    BlogNav
  BlogTitle(v-else)
  main
    Nuxt
  aside(v-if="windowAspect > 1.2")
    p.blog-index # index
</template>

<script>
import BlogTitle from '~/components/blog/blog-title.vue';
import BlogNav from '~/components/blog/blog-nav.vue';

export default {
  components: {
    BlogTitle,
    BlogNav
  },
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
    min-height: calc(100vh - 8vmin);
    overflow: hidden;
  }
  > header {
    width: 92vw;
    margin: 0 4vw;
    > figure {
      width: 25%;
    }
    + main {
      width: 92vw
    }
  }
  &:has(> header) {
    flex-direction: column;
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
  }
}
</style>
