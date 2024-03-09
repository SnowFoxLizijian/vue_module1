import {createRouter, createWebHistory} from 'vue-router'
import {routes} from '@/router/routes'
import permission from '@/router/permission'


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
permission(router)

export default router


