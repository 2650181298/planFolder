import Vue from 'vue'
import Router from 'vue-router'
import Status_bar from './views/Status_bar.vue'
import Bxx_state from './views/Bxx_state.vue'
import Alarm_Record from './views/Alarm_Record.vue'
import Associated_User from './views/Associated_User.vue'
import About_door from './views/About_door.vue'
// 马胜禽的
import scanning from './views/scanning/scanning.vue'
import Synthesis from './views/Add to/Synthesis.vue'
import scan from './views/scan/scan.vue'
import datails from './components/datails.vue'
// 芷峰的
import login from './views/login.vue'
// 海港的
import PhonePage_head from './components/PhonePage_head.vue'
import head from './components/head.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Status_bar',
      name: 'Status_bar',
      component: Status_bar
    },
    {
      path: '/Bxx_state',
      name: 'Bxx_state',
      component: Bxx_state
    },
    {
      path: '/About_door',
      name: 'About_door ',
      component: About_door
    },
    {
      path: '/Alarm_Record',
      name: 'Alarm_Record ',
      component: Alarm_Record
    },
    // Associated_User
    {
      path: '/Associated_User',
      name: 'Associated_User ',
      component: Associated_User
    },
    // 马胜禽的
    {
      path: '/scanning',
      name: 'scanning',
      component:scanning
    },
    {
      path: '/Synthesis',
      name: 'Synthesis',
      component: Synthesis
    },
    {
      path: '/scan',
      name: 'scan',
      component:scan
    },
    {
      path: '/datails',
      name: 'datails',
      component:datails
    },
    // 芷峰的
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/password',
      name: 'password',
      component: () => import('./views/password.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    },
    // 海港的
    {
      path: '/',
      name: 'head',
      component: head
    },
    {
      path: '/PhonePage_head',
      name: 'PhonePage_head',
      component: PhonePage_head
    }
  ]
})
