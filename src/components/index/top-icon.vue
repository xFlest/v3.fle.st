<template lang="pug">
.top-icon
  .anm-fluid
  .anm-line(v-if="$device.isDesktop")
    .anm-line-left
      .anm-line-1: .line
      .anm-line-2: .line
      .anm-line-3: .line
    .anm-line-right
      .anm-line-1: .line
      .anm-line-2: .line
      .anm-line-3: .line
  .avatar-container(@click='avatarChange')
    div
      img.avatar(:src="returnPath" alt='icon_xFlest')
</template>

<script>
export default {
  data() {
    return {
      avatarImage: 0,
      avatarPath: ['/avatar/avatar1.png', '/avatar/avatar2.jpg']
    }
  },
  methods: {
    avatarChange() {
      this.avatarImage = (this.avatarImage + 1) % 2
    }
  },
  computed: {
    returnPath() {
      return this.avatarPath[this.avatarImage]
    }
  }
}
</script>

<style lang="scss">
.top-icon {
  width: 50%;
  margin: 15% 25%;
  main:not(.isDesktop) & {
    margin-top: 25%;
  }
  aspect-ratio: 1;
  position: relative;
  > .avatar-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: transform .6s ease-out;
    > div {
      width: 100%;
      height: 100%;
      transition: transform .08s ease-out;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 3px #0002;
      background-color: #fff;
      > .avatar {
        width: 100%;
        height: 100%;
        user-select: none;
        transform-origin: 50% 100%;
        cursor: pointer;
        transition: {
          property: filter, transform;
          duration: .2s, .08s;
          timing-function: ease, ease-out;
        }
      }
    }
  }
  > .anm-fluid {
    background: linear-gradient(35deg, rgba(255,234,196,1) 0%, rgba(252,255,0,1) 50%, rgba(255,182,0,1) 100%);
    animation: fluid 15s ease 0s infinite;
    width: 100%;
    height: 100%;
    opacity: .6;
  }
  .anm-line {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    > div {
      width: 30%;
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      > div {
        height: min(.5rem, 1.5vmin);
        width: 100%;
        transform-origin: 100% 50%;
        position: relative;
        overflow: hidden;
        border-radius: min(.5rem, 1.5vmin);
        > .line {
          height: 100%;
          width: 100%;
          border-radius: min(.5rem, 1.5vmin);
          background-image: linear-gradient(to left, $sky, $blue);
          position: absolute;
          left: -100%;
          transition: left .5s;
        }
      }
    }
    &-left {
      left: -50%;
    }
    &-right {
      right: -50%;
      transform: rotate(180deg);
    }
    &-1 {
      transform: rotate(30deg);
    }
    &-3 {
      transform: rotate(-30deg);
    }
    &:has(+ :active) {
      .line {
        left: 100%;
        transition-duration: 0s;
      }
    }
  }
  .isDesktop & {
    > .avatar-container:active {
      transform: rotateY(360deg);
      transition-duration: 0s;
      > div {
        transform: scale(.96);
        > .avatar {
          filter: blur(4px);
          transform: scale(.9);
        }
      }
    }
  }
}
@keyframes fluid {  
  0%, 100% {
    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
    transform: rotate(0deg);
  } 14% {
    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
  } 28% {
    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
  } 42% {
    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
    transform: rotate(-180deg);
  } 56% {
    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
  } 70% {
    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
  } 84% {
    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
    transform: rotate(360deg);
  }
}
</style>