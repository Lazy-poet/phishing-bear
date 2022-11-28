import store from 'store'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'react-toastify';

export default class CommonService {
  axiosInstance: AxiosInstance;
  token: string

  constructor() {
    this.axiosInstance = this.createInstance();
    this.token = this.getToken();
  }

  createInstance = () => {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (this.getToken()) {
          config.headers = { ...config.headers, 'Authorization': `Bearer ${this.token}` }
        }
        return config
      },
      error => Promise.reject(error));

    instance.interceptors.response.use(
      (results: AxiosResponse & { error: boolean }) => {
        return { ...results.data, error: false }
      },
      error => {
        if (error.response) {
          if (error.response.status === 401) {

            toast.error('Please login again', { toastId: 'login-again' })
          } else {
            toast.error(error.response?.data?.message || 'an error occured, please try again', { toastId: 'error-' })
          }
        } else {
          toast.error(error.message, { toastId: 'no-response' })
        }
        return Promise.reject({
          status: error.response?.status || 500,
          message: error.response?.data.message,
          error: true,
          data: {}
        })
      },
    )

    return instance
  }
  getToken = () => {
    const token = store.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!);
    this.token = token;
    return token;
  }

  async get(endpoint: string, params = '') {
    try {
      const res: AxiosResponse & { error: boolean } = await this.axiosInstance.get(endpoint + params);
      return res
    }
    catch (e) {
      return e
    }
  }

  async post(endpoint: string, data: Record<string, any>) {
    try {
      const res = await this.axiosInstance.post(endpoint, data);
      return res
    }
    catch (e) {
      return e
    }
  }

  async put(endpoint: string, data: Record<string, any>) {
    try {
      const res = await this.axiosInstance.put(endpoint, data);
      return res
    }
    catch (e) {
      return e
    }
  }

  async delete(endpoint: string) {
    try {
      const res = await this.axiosInstance.delete(endpoint);
      return res
    }
    catch (e) {

      return e
    }
  }
}