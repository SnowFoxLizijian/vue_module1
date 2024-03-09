<template>
  <div class="Layout">
    <el-container>
      <AsiderBar />
      <el-container>
        <el-header>
          <HeaderBar></HeaderBar>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout"
}
</script>

<script setup lang="ts">
import AsiderBar from '@/layout/AsiderBar.vue'
import HeaderBar from '@/layout/HeaderBar.vue'
import {onMounted} from "vue"
onMounted( () => {
} )
</script>

<style scoped lang="scss">
.Layout{
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  :deep(.el-header){
    //border-bottom: 1px solid;
    box-shadow: 0 1px 5px #ccc;
  }
}
</style>
