import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/frontend/Dashboard.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/frontend/Home.vue'),
      },
      {
        path: 'about',
        name: '關於',
        component: () => import('../views/frontend/About.vue'),
      },
      {
        path: 'products',
        name: '商店',
        component: () => import('../views/frontend/Products.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
