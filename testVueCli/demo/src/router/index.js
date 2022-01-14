import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      name: 'Home',
    },
  },
  {
    path: '/',
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
