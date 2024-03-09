<template>
  <div class="brend">
    <div class="icon">
      <el-icon @click="handleClick" v-show="!collapse" size="32"><Fold /></el-icon>
      <el-icon @click="handleClick" v-show="collapse" size="32"><Expand /></el-icon>
    </div>
    <div style="margin-left: 20px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderBreadcrumb"
}
</script>

<script setup lang="ts">
import {Fold, Expand} from '@element-plus/icons-vue'
import useMainStore from '@/store/useMainStore'
import {storeToRefs} from "pinia"
import {useRoute} from 'vue-router'
import {watch} from 'vue'
import {ref} from 'vue-demi'
import {breadcrumbType} from '@/type/Layout'

const route = useRoute()

const store = useMainStore()

const {collapse} = storeToRefs(store)

const breadcrumb = ref<breadcrumbType[]>([])

const handleClick = () => {
  store.setCollapse()
}

watch(() => route, (value) => {
  const matched = value.matched
  const routeList:breadcrumbType[] = []
  for (let i = 1; i < matched.length; i++) {
    const meta:unknown = matched[i].meta
    if (meta.title !== "首页") {
      routeList.push({
        name: meta.title,
        path: matched[i].path
      })
    }
  }
  breadcrumb.value = routeList
},{immediate: true,deep: true})
</script>

<style scoped lang="scss">
.icon{
  cursor: pointer;
}
.brend{
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
