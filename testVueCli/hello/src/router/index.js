import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/HelloWorld.vue';
import Page from '../components/pages/page.vue';
import child from '../components/pages/child.vue';
import child2 from '../components/pages/child2.vue';
import child3 from '../components/pages/child3.vue';
import Menu from '../components/pages/menu.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      name: '首頁',
      path: '/index',
      component: Home,
    },
    {
      // name: '分頁',
      path: '/page',
      // component: Page,
      components: {
        default: Page,
        menu: Menu,
      },
      children: [
        {
          name: '卡片 1',
          path: '',
          component: child,
        },
        {
          name: '卡片 2',
          path: 'child2',
          component: child2,
        },
        {
          name: '卡片 3',
          path: 'child3',
          component: child3,
        },
      ],
    },
  ],
});
