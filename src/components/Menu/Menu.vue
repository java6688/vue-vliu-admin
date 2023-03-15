<template>
  <el-menu active-text-color="#ffd04b" background-color="#001529" class="el-menu-vertical-demo"
    :default-active="defaultActive" text-color="#fff" @open="handleOpen" @close="handleClose" router>
    <el-sub-menu :index="route.path" v-for="route in routes" :key="route.name">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ route.meta.title }}</span>
      </template>
      <el-menu-item :index="route.path + '/' + cRoute.path" v-for="cRoute in route.children" :key="cRoute.name">
        {{ cRoute.meta.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'
import routes from '../../router/menu'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.path)

const defaultActive = ref(route.path)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu {
  height: 100%;

  .el-menu-item {
    background-color: #0d253b;
  }

  .is-active {
    background-color: #0960BD;
  }
}
</style>