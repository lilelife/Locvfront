// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/router.js'  // router的路由
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(iView)
Vue.use(VueResource)
// Vue.http.options.xhr = { withCredentials: true }

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   linkActiveClass: 'link-active',
//   routes
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
