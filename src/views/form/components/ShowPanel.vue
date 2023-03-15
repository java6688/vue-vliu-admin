<template>
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item :label="item.label" prop="age" v-for="(item, i) in formItems" :key="i">
      <component :is="mapComponent[item.el]"></component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { formItemType } from '../types'
import type { FormInstance, FormRules } from 'element-plus'
import mapComponent from '../mapComponent';

defineProps<{
  formItems: formItemType
}>()

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({

})
const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped></style>