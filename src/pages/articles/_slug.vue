<template lang="pug">
article.article
  .article-image(v-if='article.image')
    img(:src="`/image/${slug}/${article.image}`")
  .article-detail
    ul.article-tag
      li(v-for="tag in article.tags" :key="tag") {{ tag }}
    h1 {{ article.title }}
    .article-date
      fa(:icon="['far', 'calendar']")
      time(:datetime='article.createdAt') {{ $dateFns.format(new Date(article.createdAt), 'yyyy/MM/dd') }}
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
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `/image/${slug}/${article.image}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.description
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: summary
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@xflest'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        },
      ]

    }
  }
}
</script>

<style lang="scss">
.article {
  > .markdown-body {
    padding: 0 min(4rem, 6vmin) min(4rem, 6vmin);
    a {
      color: #FAD66D;
    }
    img {
      display: block;
    }
  }
  .article-image {
    width: 100%;
    > img {
      width: 100%;
    }
  }
  .article-detail {
    font-family: 'Outfit', -apple-system,BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    padding: min(2rem, 3vmin) min(4rem, 6vmin);
    > h1 {
      font-size: 2.8rem;
    }
    time {
      margin-left: .6em;
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
      color: #fff;
      border-radius: .2rem;
      margin-right: .4rem;
    }
  }
}
</style>