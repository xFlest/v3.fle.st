<template lang="pug">
ul.top-link
  li
    a.top-link-twitter(href="https://twitter.com/xflest")
      .top-link-button(v-if="$device.isDesktop")
        .top-link-button-bg
          p @xFlest
        .top-link-button-square
      .top-link-icon
        fa(:icon="['fab', 'twitter']")
  li
    a.top-link-discord(href="https://discord.com/users/559273656342151179")
      .top-link-button(v-if="$device.isDesktop")
        .top-link-button-bg
          p ふれすと#1351
        .top-link-button-square
      .top-link-icon
        fa(:icon="['fab', 'discord']")
  li
    a.top-link-github(href="https://github.com/xFlest")
      .top-link-button(v-if="$device.isDesktop")
        .top-link-button-bg
          p xFlest
        .top-link-button-square
      .top-link-icon 
        fa(:icon="['fab', 'github']")
  li
    a.top-link-misskey(href="https://submarin.online/@f")
      .top-link-button(v-if="$device.isDesktop")
        .top-link-button-bg
           p @f@submarin.online
        .top-link-button-square
      .top-link-icon 
        icon-misskey
</template>

<script>
import IconMisskey from '~/components/icon/icon-misskey.vue';

export default {
  components: {
    IconMisskey,
  }
}
</script>

<style lang="scss">
.top-link {
  height: calc((var(--vh, 100vw)*0.9) - min(var(--vh, 100vw)*0.56, 96vw));
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: min(2rem, 6vmin);
  padding: 0;
  margin: 0;
  > li {
    width: min(5rem, 15vmin);
    height: min(5rem, 15vmin);
    transition: width .4s;
    transition-delay: .2s;
    > a {
      height: 100%;
      width: 100%;
    }
    &:hover {
      .isDesktop & {
        width: min(20rem, 60vmin);
      }
      transition-delay: 0s;
      .top-link-button-bg {
        width: min(15rem, 45vmin);
        transition-delay: 0s;
        > p {
          transform: translateY(0);
          opacity: 1;
          transition: {
            property: transform, opacity;
            duration: .3s, .3s;
            delay: .1s, 0s;
          }
        }
      }
    }
    &:active {
      .top-link-button-bg {
        &::before {
          left: 100%;
        }
        &::after {
          right: 100%;
        }
      }
      .top-link-button-square {
        transform: rotate(45deg) rotate3d(1, 1, 0, 180deg);
      }
      .top-link-icon {
        border-color: $sky;
        svg {
          transform: rotate(-45deg) rotateY(360deg);
        }
      }
    }
  }
  &-icon {
    height: calc(min(5rem,15vmin) / 1.414);
    aspect-ratio: 1;
    transform: rotate(45deg);
    transition: border-color 1s;
    background-color: $white;
    border: solid 1px $dark-yellow;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: calc(min(5rem, 15vmin) * .207 / 1.414);
    margin-top: calc(min(5rem, 15vmin) * .207 / 1.414);
    position: relative;
    z-index: 2;
    color: $gray;
    svg {
      transform: rotate(-45deg);
      height: min(2rem, 6vmin);
      vertical-align: middle;
      transition: transform .6s ease-in;
    }
  }
  &-button {
    margin-bottom: max(-5rem, -15vmin);
    white-space: nowrap;
    &-bg {
      display: inline-block;
      vertical-align: middle;
      height: min(5rem, 15vmin);
      width: 0;
      position: relative;
      z-index: 1;
      transition: width .4s;
      transition-delay: .2s;
      overflow:  hidden;
      margin: {
        left: min(2.5rem, 7.5vmin);
        right: max(-2.5rem, -7.5vmin);
      }
      > p {
        color: #fff;
        height: 100%;
        margin: 0 {
          left: min(2.5rem, 7.5vmin);
        }
        line-height: min(5rem, 15vmin);
        text-align: center;
        font-family: 'Outfit', 'Sawarabi Gothic', sans-serif;
        font-weight: bold;
        font-size: min(1.2rem, 3.6vmin);
        opacity: 0;
        user-select: none;
        transform: translateY(-100%);
        transition: {
          property: transform, opacity;
          duration: 0s, .3s;
          delay: .3s, 0s;
        }
      }
      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 1px;
        width: min(1rem, 3vmin);
        background-color: #fff;
        transition: {
          property: left, right;
          duration: .3s;
          timing-function: ease-in;
        }
      }
      &::before {
        top: 3px;
        left: max(-1rem, -3vmin);
      }
      &::after {
        bottom: 3px;
        right: max(-1rem, -3vmin);
      }
    }
    &-square {
      display: inline-block;
      vertical-align: middle;
      width: calc(min(5rem, 15vmin) / 1.414);
      aspect-ratio: 1;
      position: relative;
      z-index: 0;
      transform: rotateZ(45deg);
      transition: transform .5s ease-in;
      margin-left: calc(min(5rem, 15vmin) * .207 / 1.414);
    }
    :is(&-bg, &-square) {
      .top-link-twitter & {
        background-color: lighten(desaturate($twitter, 20%), 15%);
      }
      .top-link-discord & {
        background-color: lighten(desaturate($discord, 20%), 15%);
      }
      .top-link-github & {
        background-color: lighten(desaturate($github, 20%), 15%);
      }
      .top-link-misskey & {
        background-color: lighten(desaturate($misskey, 20%), 15%);
      }
    }
  }
}
@keyframes flip {
  0% {
    transform: rotateY(-360deg);
  } 100% {
    transform: rotateY(0deg);
  }
}
</style>