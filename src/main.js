import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import axios from 'axios';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.prototype.$http = axios;

const routes = [{
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
router.push('/goods');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

