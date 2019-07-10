import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'

// 将插件安装到 Vue 中
Vue.use(VueRouter)

const routes = [
    // 路由放这里
    {path: '/', name: 'home', component: Home},
    {path: '/faq', name: 'faq', component: FAQ},
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router
