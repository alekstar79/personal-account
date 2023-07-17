import Vue from 'vue'
import App from './App.vue'
import store from './store'

import clickOutside from './plugins/click-outside'
import resize from '@/plugins/resize'

import 'boxicons/css/boxicons.min.css'

Vue.config.productionTip = false

Vue.use(clickOutside)
Vue.use(resize)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
