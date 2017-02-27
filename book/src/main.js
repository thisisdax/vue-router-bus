import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Outside from './components/Outside.vue'

export const bus = new Vue()

Vue.use(VueRouter)

const routes = [
  {path: '/home', component: Home},
  {path: '/nothome', component: Outside}
]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
