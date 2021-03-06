import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      name: '404',
    },
  },
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
        path: 'activity',
        name: '活動',
        component: () => import('../views/frontend/Activity.vue'),
      },
      {
        path: 'about',
        name: '關於',
        component: () => import('../views/frontend/About.vue'),
        children: [
          {
            path: 'legends',
            name: '英雄',
            component: () => import('../views/frontend/legends.vue'),
          },
          {
            path: 'maps',
            name: '地圖',
            component: () => import('../views/frontend/maps.vue'),
          },
        ]
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
    component: () => import('../views/login.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
