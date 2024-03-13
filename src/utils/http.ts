import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import {HttpType} from '@/type/http'


class Http {
  private install: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.install = axios.create(config)
    this.interceptors()
  }
  private interceptors () {
    // 请求拦截器
    this.install.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const token = sessionStorage.getItem("token") !
      if (token) {
        // Authorization
        config.headers["Authorization"] = `Bearer ${token}`
      }
      return config
    }, error => {
      return error
    })
    // 响应拦截器
    this.install.interceptors.response.use((config:AxiosResponse) => {
      if (config.status === 200) {
        return config.data
      }
      return config
    }, error => {
      return error
    })
  }


  /**
   * @function get get请求
   * @param url
   * @param params
   */
  public get<T> (url, params?: AxiosRequestConfig["params"]):Promise<HttpType<T>> {
    return this.install.request({
      url: url,
      method: "GET",
      params
    })
  }

  /**
   * @function post post请求
   * @param url
   * @param data
   */
  public post<T> (url, data?: AxiosRequestConfig["data"]):Promise<HttpType<T>> {
    return this.install.request({
      url: url,
      method: "POST",
      data
    })
  }

  /**
   * @function put put请求
   * @param url
   * @param data
   */
  public put<T> (url, data?: AxiosRequestConfig["data"]):Promise<HttpType<T>> {
    return this.install.request({
      url: url,
      method: "PUT",
      data
    })
  }

  /**
   * @function del delete请求
   * @param url
   * @param params
   */
  public del<T> (url, params?: AxiosRequestConfig["params"]):Promise<HttpType<T>> {
    return this.install.request({
      url: url,
      method: "DELETE",
      params
    })
  }

}

const http = new Http({
  baseURL: window.CONFIG.baseURL,
  timeout: 3000
})

export default http
