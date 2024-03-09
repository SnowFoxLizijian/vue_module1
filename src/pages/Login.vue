<template>
  <div class="login">
    <div class="login_box">
<!--      <h1>登录</h1>-->
      <div class="form">
        <h2 style="text-align: center">登录</h2>
        <el-form
            :model="formData"
            ref="form"
            :rules="rules"
            label-width="80px"
        >
          <el-form-item
              label="用户名"
              prop="username"
          >
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item
              label="密码"
              prop="password"
          >
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <div class="btn_box">
              <el-button type="primary" @click="handleSubmit">登录</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Login"
}
</script>

<script setup lang="ts">
import {onMounted} from "vue"
import {reactive, ref} from 'vue-demi'
import {LoginFormType} from '@/type/Login'
import {FormInstance, FormRules} from 'element-plus'
import {useRouter} from 'vue-router'

const router = useRouter()

const form = ref<FormInstance>()

const formData = reactive<LoginFormType>({
  username: "",
  password: ""
})

const rules:FormRules<LoginFormType> = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    }
  ]
}

const handleSubmit = () => {
  form.value?.validate(v => {
    if (v) {
      console.log( formData )
      router.push("/")
    }
  })
}

onMounted( () => {
} )
</script>

<style scoped lang="scss">
.login{
  width: 100vw;
  height: 100vh;
  background: url("@/assets/image/loginBg.png") no-repeat center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &_box{
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
      position: absolute;
      text-align: center;
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);
    }
    .form{
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.5);
      width: 100%;
      height: 300px;
      border-radius: $borderRadius;
      box-sizing: border-box;
      padding: 20px;
      .btn_box{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
      }
    }
  }
}
</style>
