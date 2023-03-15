import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      // 自动引入
      imports: ['vue', 'vue-router'],
      //存放的位置
      dts: "src/auto-import.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve('./src')
    }
  }
})
