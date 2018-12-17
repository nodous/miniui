// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'
import vuex from 'vuex'

Axios.defaults.baseURL = 'http://www.sinya.online/api/'
Vue.prototype.$axios = Axios

Vue.use(vuex)
Vue.use(MintUI)
Vue.config.productionTip = false

var store = new vuex.Store({
  state: {
    states: 'turn-on'
  },
  mutations: {
    setTransition (state, states) {
      state.states = states
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
