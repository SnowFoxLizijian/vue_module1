<template>
  <el-dialog
      title="修改密码"
      v-model="modal"
      @close="modal = false"
      @ok="handleOk"
      width="400px"
  >
    <el-form
        label-width="80px"
        :model="formData"
        ref="formRef"
        :rules="rules"
    >
      <el-form-item label="用户账号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="原始密码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="modal = false">取 消</el-button>
      <el-button type="primary" @click="handleOk">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default {
  name: "PwdDialog"
}
</script>

<script setup lang="ts">
import {onMounted} from "vue"
import {reactive, ref} from 'vue-demi'
import {PwdForm} from '@/type/Layout'
import {FormInstance, FormRules} from 'element-plus'
const modal = ref(false)

const formRef = ref<FormInstance>()

const formData = reactive<PwdForm>({
  username: '',
  password: '',
  newPassword: ''
})

const rules:FormRules<PwdForm> = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "change"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入原始密码",
      trigger: "change"
    }
  ],
  newPassword: [
    {
      required: true,
      message: "请输入新密码",
      trigger: "change"
    }
  ]
}

const handleOk = () => {
  formRef.value?.validate(v => {
    if (v) {

    }
  })
}

function init () {
  modal.value = true
}

defineExpose({
  init
})

onMounted( () => {
} )
</script>

<style scoped lang="scss">

</style>
