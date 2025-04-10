import axios, { AxiosError } from 'axios'
import { config } from '@/config'
import { interceptUnauthorized } from '@/helpers/api/interceptUnauthorized'
import { mockApi } from '@/helpers/api/mockApi'
import { DEFAULT_LOCALE } from '@/plugins/i18n'
import type { AxiosInstance, AxiosResponse } from 'axios'

const api: AxiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept-Language': DEFAULT_LOCALE,
  },
})

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError) => interceptUnauthorized(error),
)

if (config.api.mockBackend) {
  mockApi(api)
}

export const setApiAuthorization = (token?: string | null) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common.Authorization
  }
}


export default api
