import './main.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
