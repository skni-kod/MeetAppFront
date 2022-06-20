import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: 'admin',
    password: 'admin',
    drawer: false,
    loggedIn: false,
  },
  getters: {},
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer
    },
    logout(state) {
      state.loggedIn = false
    },
    login(state) {
      state.loggedIn = true
    },
  },
  actions: {},
  modules: {},
})
