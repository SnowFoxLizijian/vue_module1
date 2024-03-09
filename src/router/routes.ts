import {RouteRecordRaw} from 'vue-router'


export const menuRouter:RouteRecordRaw[] = [
/*  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/Home.vue"),
    meta: {
      title: "首页",
      icon: "HomeFilled"
    }
  },
  {
    path: "/system",
    name: "system",
    component: () => import("@/layout/ParentRouter.vue"),
    meta: {
      title: "系统设置",
      icon: "HomeFilled"
    },
    children: [
      {
        path: "/system/user",
        name: "user",
        component: () => import("@/pages/system/User.vue"),
        meta: {
          title: "用户管理",
          icon: "HomeFilled"
        }
      },
      {
        path: "/system/role",
        name: "role",
        component: () => import("@/pages/system/Role.vue"),
        meta: {
          title: "角色管理",
          icon: "HomeFilled"
        }
      }
    ]
  }*/
]

export const routes:RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue"),
    meta: {
      title: "登录",
    }
  },
  {
    path: "/",
    name: "index",
    component: () => import("@/layout/Layout.vue"),
    redirect: "/home",
    children: menuRouter
  }
]
