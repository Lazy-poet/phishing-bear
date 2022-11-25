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
      (results: AxiosResponse) => {
        return results.data
      },
      error => {
        if (error.response) {
          if (error.response.status === 401) {
            // store.clearAll()
            // window.location.href = '/login'
          } else {
            toast.error(error.response?.data?.message || 'an error occured, please try again')
          }
        } else {
          toast.error(error.message)
        }
        return Promise.reject(error)
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
      const res = await this.axiosInstance.get(endpoint + params);
      return res
    }
    catch (e) {
    }
  }

  async post(endpoint: string, data: Record<string, any>) {
    try {
      const res = await this.axiosInstance.post(endpoint, data);
      return res
    }
    catch (e) {
    }
  }

  async put(endpoint: string, data: Record<string, any>) {
    try {
      const res = await this.axiosInstance.put(endpoint, data);
      return res
    }
    catch (e) {
    }
  }

  async delete(endpoint: string) {
    try {
      const res = await this.axiosInstance.delete(endpoint);
      return res
    }
    catch (e) {

    }
  }
}