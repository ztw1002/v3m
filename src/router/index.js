import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Category from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  // 斜杠这里表示layout
      component: Layout,
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        }
      ]
    },
    {
      //  登录页
      path: '/login',
      component: Login
    }
  ],
  scrollBehavior() {
    return {top: 0}
  }
})

export default router
