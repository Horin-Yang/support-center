import Vue from 'vue'
import VueRouter from 'vue-router'
import state from './state'

import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Login from './components/Login.vue'
import TicketsLayout from './components/TicketsLayout.vue'
import Tickets from './components/Tickets.vue'
import NewTicket from './components/NewTicket.vue'
import Ticket from './components/Ticket.vue'
import NotFound from './components/NotFound.vue'

// 将插件安装到 Vue 中
Vue.use(VueRouter)

const routes = [
  // 路由放这里
  {path: '/', name: 'home', component: Home},
  {path: '/faq', name: 'faq', component: FAQ},
  {path: '/login', name: 'login', component: Login, meta: {guest: true}},
  {path: '/tickets', name: 'tickets', component: TicketsLayout, meta: { private: true }, children: [
    { path: '', name: 'tickets', component: Tickets },
    { path:'new', name: 'new-ticket', component: NewTicket },
    { path: ':id', name: 'ticket', component: Ticket, props: true },
  ]},
  {path: '*', component: NotFound},
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {x: 0, y: 0}
    // return {selector: 'h1'}
  },
})

router.beforeEach((to, from, next) => {
  // todo
  console.log('to', to.name)
  // if (to.meta.private && !state.user) {
  if (to.matched.some(r => r.meta.private) && !state.user) {
    // todo 重定向到登陆
    next({
      name: 'login',
      params: {
        wantedRoute: to.fullPath,
      },
    })
    return
  }
  // if (to.meta.guest && state.user) {
  if (to.matched.some(r => r.meta.guest) && state.user) {
    next({
      name: 'home',
    })
    return
  }
  next()
})

export default router
