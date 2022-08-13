import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import router from '../src/router/index.js';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import utility from '@/css/utility.css'
import index from '@/css/index.css'
import './axios'

import '@fortawesome/fontawesome-free/css/all.min.css';


Vue.config.productionTip = false

Vue.use(Router);
Vue.use(utility);
Vue.use(index);

Vue.use(VueToast, {
  position: 'top-right',
});

new Vue({
  router,
  VueToast,
  render: h => h(App),
}).$mount('#app')
