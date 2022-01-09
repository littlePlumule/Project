import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
/* import Dashboard from '../components/Dashboard.vue';
import Login from '../components/pages/Login.vue'; */
/* import Products from '../components/pages/Products.vue';
import Orders from '../components/pages/Order.vue';
import Coupons from '../components/pages/Coupon.vue';
import CustomerOrder from '../components/pages/CustomerOrders.vue';
import CustomerCheckout from '../components/pages/CustomerCheckout.vue'; */


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: {
      name: 'Login',
    },
  },
  {
    path: '/',
    redirect: {
      name:'Login',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Order.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Coupon.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    redirect: {
      name: 'Dashboard',
    },
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        path: 'customer_order',
        name: 'CustomerOrder',
        component: () => import('../views/CustomerOrders.vue'),
      },
      {
        path: 'customer_checkout/:orderId',
        name: 'CustomerCheckout',
        component: () => import('../views/CustomerCheckout.vue'),
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
