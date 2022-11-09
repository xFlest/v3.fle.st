<template lang="pug">
header
  .hmmm
  .menu
    - for (var x = 1; x < 10; x++)
      .menu-dot(class=`dot${x}`)
</template>

<style lang="scss">
header {
  height: min(4rem, 12vmin);
  width: calc(100% - min(6rem, 18vmin));
  position: fixed;
  top: 0;
  margin: min(3rem, 9vmin);
  > .menu {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    aspect-ratio: 1;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    > .menu-dot {
      background-color: $black;
      width: 45%;
      height: 45%;
      border-radius: 100%;
      transition: filter .2s ease;
      @for $x from 0 through 4 {
        &.dot#{$x * 2} {
          transition-delay: .1s;
        }
        @if ($x * 2 + 1) != 5 {
          &.dot#{$x * 2 + 1} {
            transition-delay: .2s;
          }
        }
      }
    }
    &:hover {
      > .menu-dot {
        filter: brightness(2) saturate(16) hue-rotate(-190deg);
      }
    }
    &:active {
      > .menu-dot {
        filter: none;
      }
    }
  }
}
</style>