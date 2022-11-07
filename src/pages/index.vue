<template lang="pug">
div.top
  top-icon
  top-name
  top-link
</template>

<script>
import TopIcon from '~/components/index/top-icon.vue';
import TopName from '~/components/index/top-name.vue';
import BackKazari from '~/components/index/back-kazari.vue';
import TopLink from '~/components/index/top-link.vue';

export default {
  components: {
    TopIcon,
    TopName,
    BackKazari,
    TopLink
},
  layout: 'default',
}
</script>

<style lang="scss">
</style>