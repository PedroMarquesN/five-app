import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth.ts';

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
      {
        path: '/register',
        component: () => import('../pages/Register.vue'),
        name: 'register'
      }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: () => import('../pages/Dashboard/HomePage.vue'),
      },
      {
        path: 'profile',
        component: () => import('../pages/Dashboard/Profile.vue'),
        name: 'profile',
      },
      {
        path: 'settings',
        component: () => import('../pages/Dashboard/Config.vue'),
        name: 'settings',
      },
      {
        path: 'upload-photos',
        component: () => import('../pages/Dashboard/Uploads.vue'),
        name: 'upload-photos',
      },
      {
        path: 'approve-uploads',
        component: () => import('../pages/Dashboard/ApproveUploads.vue'),
        name: 'approve-uploads',
       
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated , isAdmin } = useAuth();

  if (to.name === 'login' && isAuthenticated.value) {
      next('/dashboard');
  }

  if (to.meta.requiresAuth && !isAuthenticated.value) {
      next('/login');
  } else {
      next();
  }

});

export default router
