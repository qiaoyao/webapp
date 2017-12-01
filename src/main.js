import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {DOMLoaded, computedREM} from './assets/js/base'

import './assets/styles/index.scss'

fastclick.attach(document.body);

Vue.use(VueLazyLoad, {
  error: require('./assets/images/default.png'),
  loading: require('./assets/images/default.png')
});

Vue.use(VueAwesomeSwiper);

DOMLoaded();
window.addEventListener('resize', computedREM);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
