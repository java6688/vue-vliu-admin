// 解决--找不到模块“@/components/Layout/Layout.vue”或其相应的类型声明。ts
// declare module "*.vue" {
//   import Vue from 'vue'
//   export default Vue
// }

declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}