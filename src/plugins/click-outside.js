import clickOutside from '@/directives/click-outside'

const clickOutsideDirectives = {
  install(Vue) {
    Vue.directive('click-outside', clickOutside)
  }
}

export default clickOutsideDirectives
