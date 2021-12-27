import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/pages/Login.vue';
import Products from '../components/pages/Products.vue';
import Orders from '../components/pages/Order.vue';
import Coupons from '../components/pages/Coupon.vue';
import CustomerOrder from '../components/pages/CustomerOrders.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   meta: { requiresAuth: true },
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: Coupons,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'customer_order',
        name: 'CustomerOrder',
        component: CustomerOrder,
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
