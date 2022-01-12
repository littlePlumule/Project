import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';
// import VueI18n from 'vue-i18n';

import App from './App.vue';
import router from './router';
import store from './store';
import './bus';
import currencyFilter from './filters/currency';
import date from './filters/date';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// VeeValidate & VueI18n
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
extend('phone', value => {
  const re = /^09\d{8}$/
  if(re.test(`${value}`)) {
    return true;
  } else {
    return `{_field_}須為有效的電話號碼`;
  }
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
/* Vue.use(VueI18n);
const i18n = new VueI18n();
i18n.locale = 'zhTW';
Vue.use(VeeValidate, {
  i18nRootKey: 'validations',
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW: zhTWValidate,
  }
}); */

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', date)

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
  // i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

