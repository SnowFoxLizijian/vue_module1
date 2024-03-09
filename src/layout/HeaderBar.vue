<template>
  <div class="headerBar">
    <HeaderBreadcrumb></HeaderBreadcrumb>
    <HeaderNavBar></HeaderNavBar>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderBar"
}
</script>

<script setup lang="ts">
import HeaderBreadcrumb from '@/layout/HeaderBreadcrumb.vue'
import HeaderNavBar from '@/layout/HeaderNavBar.vue'

</script>

<style scoped lang="scss">
.headerBar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
}
</style>
