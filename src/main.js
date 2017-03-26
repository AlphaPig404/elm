import Vue from 'vue'
import ElementUI from 'element-ui'
import './css/reset.css'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

import ecs from './components/ecs/ecs.vue'
import rds from './components/rds/rds.vue'
import redis from './components/redis/redis.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [{
  path: '/ecs',
  component: ecs
}, {
  path: '/rds',
  component: rds
}, {
  path: '/redis',
  component: redis
}];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
router.push('/ecs');

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
