<template lang="pug">
.menu
  .menu-background
    img.menu-avatar(src='/avatar/avatar2-alpha.png' alt='icon_flest')
    .menu-border
      .border-right
      .border-bottom
      .border-left
      .border-top
  nav.menu-nav
    ul.menu-nav-list
      li.menu-nav-item(@click='toggleMenu')
        NuxtLink(to='/').menu-link
          p.menu-title トップページ
          p.menu-text top page
      li.menu-nav-item(@click='toggleMenu')
        NuxtLink(to='/blog').menu-link
          p.menu-title ブログ
          p.menu-text blog
      li.menu-nav-item(@click='toggleMenu')
        NuxtLink(to='/illust').menu-link
          p.menu-title イラスト
          p.menu-text illust
      li.menu-nav-item(@click='toggleMenu')
        NuxtLink(to='/link').menu-link
          p.menu-title リンク
          p.menu-text link
      li.menu-nav-item(@click='toggleMenu')
        NuxtLink(to='/gyagu').menu-link
          p.menu-title ギャグ
          p.menu-text gyagu
    .menu-control
      .control-colormode(@click="toggleColorMode")
        fa(:icon="['fas', 'lightbulb']")
        .darkmode-line
          .darkmode-line-white
          .darkmode-line-black
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const menu = document.getElementsByClassName('menu')[0]
      menu.classList.toggle('isOpen')
    },
    toggleColorMode() {
      if (this.$colorMode.preference != 'light') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
}
</script>

<style lang="scss">
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 0;
  overflow: hidden;
  z-index: 3;
  transition: height 0s .6s;
  &-background {
    width: 100%;
    height: var(--vh, 100vh);
    padding: min(3rem, 9vmin);
    box-sizing: border-box;
    position: absolute;
    left: 100%;
    transition: left .6s ease;
    background-color: #143e7e;
    z-index: 4;
    .isOpen & {
      left: 0;
    }
  }
  &-avatar {
    position: absolute;
    bottom: 0;
    right: 5vmin;
    width: 60vmin;
    aspect-ratio: 1;
    filter: saturate(0);
    mix-blend-mode: soft-light;
  }
  &-border {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    transition: opacity .3s ease;
    > div {
      transition: {
        duration: 0s;
        delay: .6s;
      }
    }
    > .border-right {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 0;
      width: 2px;
      background-color: $white;
    }
    > .border-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $white;
    }
    > .border-left {
      position: absolute;
      top: 0;
      left: 0;
      height: 0;
      width: 2px;
      background-color: $white;
    }
    > .border-top {
      position: absolute;
      top: 0;
      right: min(4rem, 12vmin);
      width: 0;
      height: 2px;
      background-color: $white;
    }
  }
  &-nav {
    position: absolute;
    top: 0;
    left: 100%;
    transition: left .6s ease;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: var(--vh, 100vh);
    padding: min(6rem, 18vmin) {
      top: min(9rem, 27vmin)
    }
    box-sizing: border-box;
    .isOpen & {
      left: 0;
    }
    >  ul {
      list-style: none;
      width: 100%;
      padding: 0;
      margin: 0;
      > li {
        opacity: 0;
        transform: translateY(min(3rem, 4.5vmin));
        transition: {
          property: opacity, transform;
          duration: .3s, 0s;
          delay: 0s, .6s;
        }
      }
      .menu-link {
        display: block;
        width: 100%;
        text-decoration: none;
        margin: {
          bottom: min(2rem, 3vmin);
          left: min(3rem, 9rem);
        }
        .menu-title {
          font-family: 'Sawarabi Gothic', sans-serif;
          font-size: min(3rem, 4.5vmin);
          color: $white;
          font-weight: bold;
          letter-spacing: min(.3rem, .45vmin);
          user-select: none;
          margin: 0;
          position: relative;
          z-index: 7;
          text-shadow: 0 0 5px #143e7e;
        }
        .menu-text {
          font-family: 'League Script';
          color: rgba($yellow, .8);
          font-weight: bold;
          font-size: min(4rem, 8vmin);
          transform: translateX(min(4rem, 6vmin));
          user-select: none;
          margin: 0 {
            top: max(-2rem, -3vmin);
            left: min(4rem, 6vmin);
          }
          position: relative;
          z-index: 6;
        }
      }
    }
    > .menu-control {
      height: min(4rem, 6vmin);
      margin: min(2rem, 3vmin);
      opacity: 0;
      transition: opacity .3s 0s;
      > div {
        height: 100%;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        > svg {
          height: 100%;
          color: $white;
        }
        > .darkmode-line {
          position: absolute;
          top: 0;
          left: 0;
          height: min(.8rem, 2.4vmin);
          margin-top: max(-.4rem, -1.2vmin);
          transform: rotate(45deg);
          transform-origin: 0;
          transition: width .3s ease;
          > div {
            width: 100%;
            height: 50%;
            border-radius: min(.2rem, .6vmin);
          }
          > .darkmode-line-white {
            background-color: $white;
          }
          > .darkmode-line-black {
            background-color: #143e7e;
          }
        }
        .light-mode & {
          > .darkmode-line {
            width: 0;
          }
          &.control-colormode:active {
            > .darkmode-line {
              width: 141%;
            }
          }
        }
        .dark-mode & {
          > .darkmode-line {
            width: 141%;
          }
          &.control-colormode:active {
            > .darkmode-line {
              width: 0;
            }
          }
        }
      }
    }
  }
  &.isOpen {
    height: var(--vh, 100vh);
    transition-delay: 0s;
    .menu-border {
      opacity: 1;
      > .border-right {
        height: calc(100% - min(4rem, 12vmin));
        transition: height .1s .9s;
      }
      > .border-bottom {
        width: 100%;
        transition: width .1s .8s;
      }
      > .border-left {
        height: 100%;
        transition: height .1s .7s;
      }
      > .border-top {
        width: calc(100% - min(4rem, 12vmin));
        transition: width .1s .6s;
      }
    }
    .menu-nav-item {
      transform: none;
      opacity: 1;
      transition: {
        property: opacity, transform;
        duration: .5s;
        timing-function: ease-out;
      }
      @for $child from 1 through 5 {
        &:nth-child(#{$child}) {
          transition-delay: ($child * .2s + .6s);
        }
      }
    }
    .menu-control {
      opacity: 1;
      transition: opacity .5s 2s;
    }
  }
}
</style>