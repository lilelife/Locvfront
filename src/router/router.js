import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Loc from '@/components/Loc'
import history from '@/components/history'
import info from '@/components/info'
import appinfo from '@/components/appinfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Hello
    },
    {
      path: '/loc',
      name: 'loc',
      component: Loc
    },
    {
      path: '/histroy',
      name: 'history',
      component: history
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/appinfo',
      name: 'appinfo',
      component: appinfo
    }
  ]
})
