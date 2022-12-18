import Vue from 'vue'
import { generate } from "cjp"

Vue.directive('cjp', {
  inserted(el) {
    el.innerHTML = generate(el.innerHTML)
  }
})