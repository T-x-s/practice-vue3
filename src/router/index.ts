import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    name: 'index',
    component:()=>import('../views/index.vue'),
  },
  {
    path: '/HintButton',
    name: 'HintButton',
    component:()=>import('../views/useAttrs/HintButton.vue'),
  },
  {
    path: '/RefFather',
    name: 'RefFather',
    component:()=>import('../views/ref与$parent/RefFather.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
