<template lang="pug">
nav.blog-nav
  ul.blog-nav-list
    li.blog-nav-item
      NuxtLink(to='/blog')
        fa(:icon="['fas', 'newspaper']")
        label Top
    li.blog-nav-item
      NuxtLink(to='/blog/about')
        fa(:icon="['fas', 'user']")
        label About
    li.blog-nav-item
      NuxtLink(to='/')
        fa(:icon="['fas', 'house']")
        label HomePage
</template>

<style lang="scss">
.blog-nav {
  &-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &-item {
    width: 100%;
    height: min(4rem, 6vmin);
    border-radius: min(1rem, 1.5vmin);
    &:hover {
      background-color: rgba($black, .2);
    }
  }
}
</style>