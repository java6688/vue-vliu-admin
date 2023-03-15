import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/components/Layout/Layout.vue'
import menu from './menu'


let routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: menu
  },
  {
    path: "/login",
    name: "login",
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import("../views/login/index.vue"),
  },
  
  //{
  //配置404页面
  //path: '/:catchAll(.*)',
  //name: '404',
  //component: () => import(''),
  //}
];
// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 导出
export default router;
