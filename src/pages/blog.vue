<template lang="pug">
div
  ul
    li(v-for='article in articles' :key='article.slug')
      NuxtLink(:to="'/articles/' + article.slug")
        time(:datetime='article.createdAt') {{ $dateFns.format(new Date(article.createdAt), 'yyyy/MM/dd') }}
        p {{ article.title }}
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