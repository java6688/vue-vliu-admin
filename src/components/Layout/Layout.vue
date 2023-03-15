<template>
  <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from '../Menu/Menu.vue'
import Header from '../Header/Header.vue'
</script>

<style scoped>
.el-container {
  height: 100%;
}
</style>