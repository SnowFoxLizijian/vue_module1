import {Router} from 'vue-router'

// 白名单
const whiteList:Set<string> = new Set([
  "/login"
])
function permission (router:Router) {
  router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem("token")!
    if (token) {
      if (to.path === "login") {
        next("/")
      }else {
        next()
      }
    } else {
      if (whiteList.has(to.path)) {
        next()
      }else {
        next("/login")
      }
    }
  })
}


export default permission
