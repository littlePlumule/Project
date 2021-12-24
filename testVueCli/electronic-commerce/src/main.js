import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

axios.defaults.withCredentials = true;

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
      // const vm = this;
      axios.post(api).then((response) => {
        if (response.data.success) {
          next();
        } else {
          next({
            path: '/login',
          });
        }
      });
  }else {
  next();
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

