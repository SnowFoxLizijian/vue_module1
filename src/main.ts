import {createApp} from 'vue'
import App from '@/App.vue'
import "@/assets/css/global.css"
import ElementPlus from 'element-plus'
import router from '@/router'
import {createPinia} from 'pinia'
import "element-plus/dist/index.css"
import Icon from '@/components/Icon'


function main () {
  const pinia = createPinia()
  const app = createApp(App)
  app.component("icon", Icon)
  app.use(ElementPlus as any)
  app.use(router)
  app.use(pinia)
  app.mount("#app")
}
main()
