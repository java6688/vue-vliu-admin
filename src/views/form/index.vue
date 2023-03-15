<template>
  <div class="form-design">
    <div class="left">
      <SelectorPanel ref="selectorPanel"></SelectorPanel>
    </div>
    <div class="content">
      <ShowPanel :formItems="pushFormItems!"></ShowPanel>
    </div>
    <div class="right">
      <AttrsPanel></AttrsPanel>
    </div>
  </div>
</template>

<script setup lang="ts">
import AttrsPanel from './components/AttrsPanel.vue';
import SelectorPanel from './components/SelectorPanel.vue';
import ShowPanel from './components/ShowPanel.vue'
import { formItemType } from './types'

const selectorPanel = ref()
const pushFormItems = ref<formItemType>()

onMounted(() => {
  console.log(selectorPanel.value.pushFormItems)
  pushFormItems.value = selectorPanel?.value?.pushFormItems
  setTimeout(() => {
    console.log(selectorPanel.value.pushFormItems)
  }, 5000)
})

</script>

<style scoped>
.form-design {
  display: flex;
  height: 100%;
  border-top: 1px solid #eee;
}
.left {
  width: 250px;
}
.right {
  width: 300px;
}
.content{
  flex: 1;
  margin: 0 20px;
}
</style>