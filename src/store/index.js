import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const state = {
  count: 2
}

const store = new Vuex.Store({
  // modules: {
  //   app,
  // },
  // getters
  state
})
export default store
