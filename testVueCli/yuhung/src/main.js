import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'swiper/swiper-bundle.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {
  Autoplay, Navigation, Thumbs, Mousewheel, Pagination, Scrollbar,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Thumbs, Scrollbar, Autoplay]);
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
  components: {
    Swiper,
    SwiperSlide,
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
