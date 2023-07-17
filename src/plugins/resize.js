import resize from '@/directives/resize'

const resizeDirectives = {
  install(Vue) {
    Vue.directive('window-resize', resize)
  }
}

export default resizeDirectives
