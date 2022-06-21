import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      nickname: 'admin',
      password: 'admin',
    },
    drawer: false,
    loggedIn: false,
  },
  getters: {
    getUser(state) {
      return {
        nickname: state.user.nickname,
        password: state.user.password,
      }
    },
    getDrawer(state) {
      return state.drawer
    },
  },
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
