<template lang="pug">
article
  h1 {{ page.title }}
  div.markdown-body
    nuxt-content(:document="page")
</template>

<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params }) {
    const page = await $content(`articles/${params.slug}`).fetch()
    return { page }
  },
}
</script>