<template lang="pug">
article.article
  .article-image(v-if='article.image')
    img(:src="`/image/${slug}/${article.image}`")
  .article-detail
    ul.article-tag
      li(v-for="tag in article.tags" :key="tag") {{ tag }}
    h1 {{ article.title }}
  div.markdown-body
    NuxtContent(:document="article")
</template>

<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params }) {
    const slug = params.slug
    const article = await $content(`articles/${slug}`).fetch()
    return { 
      article,
      slug
     }
  },
}
</script>

<style lang="scss">
.article {
  > .markdown-body {
    padding: 0 min(4rem, 6vmin);
    a {
      color: #FAD66D;
    }
  }
  &-image {
    width: 100%;
    > img {
      width: 100%;
    }
  }
  &-detail {
    font-family: 'Outfit', -apple-system,BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    padding: min(2rem, 3vmin) min(4rem, 6vmin);
    > h1 {
      font-size: 2.8rem;
    }
  }
  &-tag {
    padding: 0;
    list-style: none;
    > li {
      display: inline-block;
      background-color: $blue;
      font-size: 1.2rem;
      line-height: 2rem;
      padding: 0 .4rem;
      color: $white;
      border-radius: .2rem;
      margin-right: .4rem;
    }
  }
}
</style>