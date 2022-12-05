<template lang="pug">
header.header
  .nya
  button.menu-button(@click='toggleMenu')
    div
      - for (var x = 1; x < 10; x++)
        .menu-dot(class=`dot${x}`)
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const menu = document.getElementsByClassName('menu')[0]
      menu.classList.toggle('isOpen')
    }
  }
}
</script>

<style lang="scss">
.header {
  height: min(3rem, 4.5vmin);
  width: calc(100% - min(4rem, 6vmin));
  position: fixed;
  top: 0;
  z-index: 5;
  margin: min(2rem, 3vmin);
  > .menu-button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    aspect-ratio: 1;
    padding: 0;
    border: 0;
    background-color: unset;
    transition: transform .2s .3s ease-out;
    cursor: pointer;
    > div {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(3, 1fr);
      gap: 20%;
      justify-items: center;
      align-items: center;
      transition: transform .15s ease;
      > .menu-dot {
        :where(.light-mode) & {
          background-color: $gray;
        }
        :where(.dark-mode) & {
          background-color: $yellow;
        }
        width: 100%;
        height: 100%;
        border-radius: min(.3rem, .45vmin);
        opacity: 1;
        transition: {
          property: filter, opacity, width, transform, background-color;
          duration: .2s, .1s, .1s, .1s, .4s;
          delay: 0s, .0s, 0s, 0s, .3s;
          timing-function: ease, ease-in, linear, linear, ease-out;
        }
        @for $x from 0 through 4 {
          &.dot#{$x * 2} {
            transition-delay: .1s, .2s, 0s, 0s, .3s;
          }
          @if ($x * 2 + 1) != 5 {
            &.dot#{$x * 2 + 1} {
              transition-delay: .2s, .3s, 0s, 0s, .3s;
            }
          }
        }
        &.dot2 {
          transform: rotate(90deg);
        }
        &.dot6 {
          transform: rotate(180deg);
        }
        &.dot8 {
          transform: rotate(-90deg);
        }
      }
    }
    &:hover {
      .menu-dot {
        filter: brightness(2) saturate(16) hue-rotate(-190deg);
      }
    }
    &:active {
      .menu-dot {
        filter: none;
      }
    }
  }
  .isOpen + & {
    > .menu-button {
      transform: rotate(45deg);
      transition: {
        property: transform, filter;
        duration: .2s, .4s;
        delay: .3s, 0s;
        timing-function: ease-out, ease;
      }
      &:hover {
        filter: drop-shadow(0px 0px 4px #000);
      }
      &:active {
        > div {
          transform: scale(.8);
        }
      }
      &:focus-visible {
        outline: 0;
        filter: drop-shadow(0px 0px 4px #000);
      }
      > :focus-visible {
        outline: 0;
      }
      .menu-dot {
        filter: none;
        background-color: #fff;
        @for $x from 0 through 4 {
          &.dot#{$x * 2} {
            width: 250%;
            transition-delay: 0s, 0s, .4s, .4s, .5s;
          }
          @if ($x * 2 + 1) != 5 {
            &.dot#{$x * 2 + 1} {
              opacity: 0;
              transition-delay: 0s, .3s, 0s, 0s, .5s;
            }
          } @else {
            &.dot5 {
              opacity: 0;
              transition-delay: 0s, .4s, 0s, 0s, .5s;
            }
          }
        }
        &.dot2 {
          transform: rotate(90deg) translateX(30%);
        }
        &.dot4 {
          transform: translateX(30%);
        }
        &.dot6 {
          transform: rotate(180deg) translateX(30%);
        }
        &.dot8 {
          transform: rotate(-90deg) translateX(30%);
        }
      }
    }
  }
}
</style>