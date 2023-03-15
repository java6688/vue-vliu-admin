<template>
  <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="基础组件" name="1">
          <el-button type="primary" plain v-for="(formItem, i) in formItems" :key="i" @click="pushFormItem(i)">
            {{ formItem.label }}
          </el-button>
        </el-collapse-item>
        <el-collapse-item title="自定义控件" name="2">
          
        </el-collapse-item>
        <el-collapse-item title="布局控件" name="3">
          
        </el-collapse-item>
      </el-collapse>
</template>

<script setup lang="ts">
import { formItemType } from '../types'


const pushFormItems = ref<formItemType>([])

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}


const formItems = ref<formItemType>([
  {
    label: '输入框',
    el: 'input',
    type: 'text',
    name: ''
  },
  {
    label: '复选框',
    el: 'checkbox',
    name: ''

  }
])

const pushFormItem = (i: number) => {
  console.log(formItems.value[i])
  pushFormItems.value.push(formItems.value[i])
}

defineExpose({
  pushFormItems
})
</script>

<style scoped>

</style>