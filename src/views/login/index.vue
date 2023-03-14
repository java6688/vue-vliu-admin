<template>
  <div class="login">
    <div class="form">
      <h2>登录</h2>
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
        <el-form-item>
          <el-input v-model="formLabelAlign.name" placeholder="用户名" />
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="formLabelAlign.region" placeholder="密码"/>
        </el-form-item>
      </el-form>
      <el-button type="primary">登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>

<style scoped lang="scss">
.login {
  display: flex;
  height: 100%;
  background-color: #293146;
  /* background-color: #FFF; */
}

.form {
  margin: auto;
  background-color: #fff;
  width: 500px;
  height: 300px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  .el-button{
    width: 80%;
  }
}
</style>