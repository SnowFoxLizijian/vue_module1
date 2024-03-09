<template>
  <el-aside :width="collapse? '64px' : '300px'">
    <div class="aside">
      <div class="logo" @click="handleRouter">
        <img src="@/assets/image/logo.png" alt="">
        <span v-show="!collapse">雪狐模板</span>
      </div>
      <div class="menu">
        <el-menu
            :collapse-transition="false"
            :collapse="collapse"
            router
            :default-active="route.path"
            :default-openeds="activeMenuIndex"
            :unique-opened="true"
            background-color="#2e3b5e"
            text-color="#fff"
        >
          <template v-for="item in menuRouter">
            <el-sub-menu
                v-if="item.children && item.children.length"
                :index="item.path"
            >
              <template #title>
                <el-icon><icon :icon="item.meta.icon"/></el-icon>
                <span>{{item.meta.title}}</span>
              </template>
              <el-menu-item
                  v-for="menu in item.children"
                  :key="menu.path"
                  :index="menu.path"
              >
                <el-icon><icon :icon="menu.meta.icon"/></el-icon>
                <span>{{menu.meta.title}}</span>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item
                v-else
                :index="item.path"
            >
              <el-icon><icon :icon="item.meta.icon"/></el-icon>
              <span>{{item.meta.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
  </el-aside>
</template>

<script lang="ts">
export default {
  name: "asideBar"
}
</script>

<script setup lang="ts">
import {onMounted} from "vue"
import {menuRouter} from '@/router/routes'
import {useRoute, useRouter} from 'vue-router'
import {ref} from 'vue-demi'
import useMainStore from '@/store/useMainStore'
import {storeToRefs} from "pinia"

const store = useMainStore()

const {collapse} = storeToRefs(store)

const router = useRouter()

const route = useRoute()

const activeMenuIndex = ref([route.matched[1]])

const handleRouter = () => {
  router.push("/")
}

onMounted( () => {
} )
</script>

<style scoped lang="scss">
.aside{
  height: 100%;
  background-color: #2e3b5e;
  overflow: hidden;
  box-sizing: border-box;
  .logo{
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    img{
      width: 40px;
    }
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
    &:hover{
      background-color: #202941;
    }
  }
  .menu{
    height: calc(100% - 60px);
    box-sizing: border-box;
  }
}
</style>
