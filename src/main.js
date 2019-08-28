// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import './styles/normalize.css'
import '@/styles/index.css' // global css


import App from './App'
import router from './router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


import '@/icons' // icon
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
