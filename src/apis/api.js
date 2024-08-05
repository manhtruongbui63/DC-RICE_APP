/* eslint-disable quotes */
import Api from '@/utils/axios'

export const createNew = (formData) => Api.post(`api/v1/products`, formData)
export const hanleLogin = (formData) => Api.post(`api/v1/users/login`, formData)
export const Register = (formData) => Api.post(`api/v1/users/register`, formData)
export const handleRefreshToken = (token) =>
  Api.put(`api/v1/users/refresh-token`, token)
export const handleGetUser = () => Api.get(`api/v1/users/profile`)
//
export const refreshTokenAPI = async (token) => {
  return await Api.put(`api/v1/users/refresh-token`, { refreshToken: token })
}
