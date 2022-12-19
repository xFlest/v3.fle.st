<template lang="pug">
div.article-list
  ul
    li(v-for='article in articles' :key='article.slug')
      NuxtLink(:to="'/articles/' + article.slug")
        .article-image
          img(:src="'/image/' + article.slug + '/' + article.image")
        .article-detail
          h2 {{ article.title }}
          fa(:icon="['far', 'calendar']")
          time(:datetime='article.createdAt') {{ $dateFns.format(new Date(article.createdAt), 'yyyy/MM/dd') }}
</template>

<script>
export default {
  name: "Blog",
  layout: 'blog',
  async asyncData ({ $content }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return {
      articles
    }
  }
}
</script>

<style lang="scss">
.article-list {
  padding: min(2rem, 3vmin) min(3rem, 4.5vmin) 0;
  > ul {
    padding: 0;
    list-style: none;
    > li {
      display: block;
      margin-bottom: min(3rem, 4.5vmin);
      a {
        display: block;
        text-decoration: none;
        color: $black;
        background-color: rgba($dark-yellow, .1);
        border-radius: 1rem;
      }
    }
  }
  .article-image {
    border-radius: 1rem;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
  .article-detail {
    padding: 0 min(2rem, 3vmin) min(2rem, 3vmin);
    time {
      margin-left: .6em;
    }
  }
}
</style>