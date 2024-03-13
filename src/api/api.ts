import http from '@/utils/http'
import {CaptchaImageType} from '@/type/Login'


export const captchaImage = () => http.get<CaptchaImageType>("captchaImage")

