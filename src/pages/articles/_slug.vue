<template lang="pug">
article
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

<style lang="scss">
.markdown-body {
  padding: min(4rem, 6vmin)
}
</style>