<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="表单" name="first">表单</el-tab-pane>
    <el-tab-pane label="控件" name="second">控件</el-tab-pane>
    <el-tab-pane label="布局" name="third">布局</el-tab-pane>
    <el-tab-pane label="组件" name="fourth">组件</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>