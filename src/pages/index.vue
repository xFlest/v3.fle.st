<template lang="pug">
.top
  top-icon
  top-name
  top-link
</template>

<script>
import TopIcon from '~/components/index/top-icon.vue';
import TopName from '~/components/index/top-name.vue';
import TopLink from '~/components/index/top-link.vue';

export default {
  components: {
    TopIcon,
    TopName,
    TopLink
},
  layout: 'default',
}
</script>

<style lang="scss">
.top {
  height: var(--vh, 100vw);
  overflow: visible;
}
</style>