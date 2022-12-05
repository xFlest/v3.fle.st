<template lang="pug">
.top
  TopIcon
  TopName
  TopLink
</template>

<script>
import TopIcon from '~/components/index/top/top-icon.vue';
import TopName from '~/components/index/top/top-name.vue';
import TopLink from '~/components/index/top/top-link.vue';

export default {
  components: {
    TopIcon,
    TopName,
    TopLink
  },
  layout: 'default'
}
</script>

<style lang="scss">
</style>