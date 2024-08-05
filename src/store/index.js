import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    isSheet: true
  },
  getters: { isLoading: (state) => state.isLoading },
  mutations: {
    SET_LOADING: (state, status) => (state.isLoading = status),
    changeSheet: (state, payload) => {
      state.isSheet = payload
    }
  },
  actions: {
    setLoading({ commit }, status) {
      commit('SET_LOADING', status)
    }
  },
  modules: { auth }
})
