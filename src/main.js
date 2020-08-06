import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import { IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true

import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)

Vue.config.productionTip = false

Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
