import store from 'store'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export default class CommonService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL
    })

    this.axiosInstance.interceptors.request.use(async (request: AxiosRequestConfig) => {
      const accessToken = await store.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY)

      request.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': accessToken
      }

      return request
    })

    this.axiosInstance.interceptors.response.use(
      (results: AxiosResponse) => {
        return results.data
      },
      (error: { [key: string]: AxiosResponse }) => {
        if (error.response.status === 401) {
          store.clearAll()
          window.location.href = '/login'
        }
        return error?.response?.data
      },
    )
  }

  async get(endpoint: string, params = '') {
    return await this.axiosInstance.get(endpoint + params)
  }

  async post(endpoint: string, params = {}) {
    return await this.axiosInstance.post(endpoint, params && JSON.stringify(params))
  }

  async put(endpoint: string, params = {}) {
    return await this.axiosInstance.put(endpoint, params && JSON.stringify(params))
  }

  async delete(endpoint: string) {
    return await this.axiosInstance.delete(endpoint)
  }
}