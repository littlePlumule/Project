import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

axios.defaults.withCredentials = true;

router.beforeEach((to, from, next) => {
  console.log("to", to, "from", from, "next", next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
      // const vm = this;
      axios.post(api).then((response) => {
        console.log(response.data)
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

