/// <reference types="vite/client" />


/**
 * 为全局 Window 接口扩展一个名为 CONFIG 的属性。
 * CONFIG 属性用于存储应用的基础配置。
 */
declare global {
  interface Window {
    CONFIG: {
      baseURL: string // 应用的基础URL
      baseDeep: string
    }
  }
}
