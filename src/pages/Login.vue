<template>
  <div></div>
</template>

<script lang="ts">
export default {
  name: "Login"
}
</script>

<script setup lang="ts">
import {onMounted} from 'vue'
import {captchaImage} from '@/api/api'
import {reactive} from 'vue-demi'
import {LoginFormType} from '@/type/Login'

const formData = reactive<LoginFormType>({
  username: "",
  password: "",
  uuid: "",
  code: ""
})




onMounted(() => {
  captchaImage().then(res => {
    if (res.code === 200) {
      formData.uuid = res.data.uuid
    }
  })
})
</script>

<style scoped lang="scss">

</style>
