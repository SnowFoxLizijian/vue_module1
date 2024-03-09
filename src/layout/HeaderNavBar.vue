<template>
  <div class="HeaderNavBar">
    <el-dropdown
        trigger="click"
        @command="handleCommand"
    >
      <span class="avatar">
        <img src="@/assets/image/avatar.jpg" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="pwd">修改密码</el-dropdown-item>
          <el-dropdown-item command="layout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <PwdDialog ref="pwd"></PwdDialog>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderNavBar"
}
</script>

<script setup lang="ts">
import {ElMessageBox, ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'
import PwdDialog from '@/layout/PwdDialog.vue'
import {ref} from 'vue-demi'

const pwd = ref<{
  init:() => void
}>()

const router = useRouter()

const handleCommand = (command: "pwd"|"layout") => {
  switch (command) {
    case 'layout':
      layout()
      break
    case 'pwd':
      pwd.value?.init()
      break
  }
}

function layout () {
  ElMessageBox.confirm("确定注销并退出登录吗?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(res => {
    sessionStorage.clear()
    localStorage.clear()
    ElMessage({
      type: "success",
      message: "退出登录成功"
    })
    router.push("/")
  })
}

</script>

<style scoped lang="scss">
.avatar{
  display: flex;
  //background-color: #2e3b5e;
  border: 1px solid;
  border-radius: 16px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  img{
    width: 40px;
  }
}
</style>
