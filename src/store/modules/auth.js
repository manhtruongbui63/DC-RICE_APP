import {
  hanleLogin,
  Register,
  handleGetUser,
  handleRefreshToken
} from '@/apis/api'
import _ from 'lodash'

const state = {
  user: null,
  isLogin: false,
  accessToken: localStorage.getItem('access-token') || '',
  refreshToken: localStorage.getItem('refresh-token') || ''
}
const getters = {
  getUser: (state) => state.user
}
const mutations = {
  IS_LOGIN(state) {
    state.isLogin = true
  },
  LOGOUT(state) {
    state.user = null
    state.isLogin = false
    state.accessToken = ''
    state.refreshToken = ''
    localStorage.removeItem('access-token')
    localStorage.removeItem('refresh-token')
  },
  SET_USER(state, payload) {
    let user = { ...payload }
    user.roles = _.map(user.Roles, 'name')
    user.fullname =
      payload?.first_name?.match(/(\b\S)?/g).join('') +
      payload?.last_name?.match(/(\b\S)?/g).join('')
    delete user.Roles
    state.user = user
  }
}
const actions = {
  async handleLogin({ commit, dispatch }, payload) {
    const result = await hanleLogin(payload)
    localStorage.setItem(
      'access-token',
      result.headers['authorization']?.split(' ')[1]
    )
    localStorage.setItem('refresh-token', result.headers['x-refresh-token'])
    commit('IS_LOGIN')
    await dispatch('getUser')
    return result
  },
  async handleRegister({ commit }, payload) {
    const result = await Register(payload)
    commit('')
    return result
  },
  async getUser({ commit }) {
    const result = await handleGetUser()
    commit('SET_USER', result.data?.data)
  },
  async refreshToken({ state }) {
    const token = state.refreshToken
    const result = await handleRefreshToken(token)
    return result
  },
  async handleLogout({ commit }) {
    commit('LOGOUT')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
