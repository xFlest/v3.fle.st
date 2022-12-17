<template lang="pug">
nav.blog-nav
  ul.blog-nav-list
    li.blog-nav-item
      NuxtLink(to='/blog')
        fa(:icon="['fas', 'newspaper']")
        span Top
    li.blog-nav-item
      NuxtLink(to='/blog/about')
        fa(:icon="['fas', 'user']")
        span About
    li.blog-nav-item
      NuxtLink(to='/')
        fa(:icon="['fas', 'house']")
        span HomePage
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
    height: min(3rem, 4.5vmin);
    border-radius: min(.8rem, 1.2vmin);
    &:hover {
      background-color: rgba($black, .2);
    }
    > a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: min(1rem, 1.5vmin);
      padding: 0 1em;
      color: $gray;
      text-decoration: 0;
      > svg {
        font-size: 1.5em;
        width: 1em;
        text-align: left;
      }
      > span {
        vertical-align: middle;
        font-family: 'Outfit', 'Sawarabi Gothic', sans-serif;
      }
    }
  }
}
</style>