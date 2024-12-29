
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/IndexPage.vue') },
      {
        path: '/login',
        component: () => import('../pages/Login.vue'),
        name: 'login'
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router