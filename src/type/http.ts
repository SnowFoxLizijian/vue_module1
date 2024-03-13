export type HttpType<T = any> = {
  code: number
  msg: string
  data: T
}
