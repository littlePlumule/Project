import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    // name: 'Layout',
    component: () => import('../components/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      // {
      //   path: 'productslist',
      //   name: 'ProductsList',
      //   component: ProductsList,
      // },
      // {
      //   path: 'productslist/:productId',
      //   name: 'Product',
      //   component: Product,
      // },
      // {
      //   path: 'coupongame',
      //   name: 'CouponGame',
      //   component: CouponGame,
      // },
      // {
      //   path: 'createorder',
      //   name: 'CreateOrder',
      //   component: CreateOrder,
      // },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
