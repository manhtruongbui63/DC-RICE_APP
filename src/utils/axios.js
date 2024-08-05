/* eslint-disable indent */
import axios from 'axios'
import store from '@/store/index'
import { env } from '@/utils/evironments'
import init from './init'
import router from '@/router'
import { refreshTokenAPI } from '@/apis/api'

const instance = axios.create({
  baseURL: env.VUE_APP_BASE_URL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    store.dispatch('setLoading', true)
    const token = localStorage.getItem('access-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    store.dispatch('setLoading', false)
    return Promise.reject(error)
  }
)
let refreshTokenPromiss = null
instance.interceptors.response.use(
  (response) => {
    store.dispatch('setLoading', false)
    return response
  },
  (error) => {
    store.dispatch('setLoading', false)
    if (error.response?.status === 401) {
      store.dispatch('auth/handleLogout').then(() => {
        router.push({
          name: 'sign-in'
        })
      })
    }
    const originalRequest = error.config
    if (error.response?.status === 410 && originalRequest) {
      if (!refreshTokenPromiss) {
        const refreshToken = localStorage.getItem('refresh-token')
        refreshTokenPromiss = refreshTokenAPI(refreshToken)
          .then((res) => {
            const { token } = res.data
            localStorage.setItem('access-token', token)
            instance.defaults.headers.Authorization = `Bearer ${token}`
          })
          .catch((_err) => {
            store.dispatch('auth/handleLogout').then(() => {
              router.push({
                name: 'sign-in'
              })
            })
            return Promise.reject(_err)
          })
          .finally(() => {
            refreshTokenPromiss = null
          })
      }
      return refreshTokenPromiss.then(() => {
        return instance(originalRequest)
      })
    }
    if (error.response?.status !== 410) {
      init.toastr('error', error.response?.data?.message || error?.message)
    }
    return Promise.reject(error)
  }
)
export default instance
