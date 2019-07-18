import Vue from 'vue'
import 'babel-polyfill'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import './global-components'
import VueFetch, {$fetch} from './plugins/fetch'
import state from './state'
import VueState from './plugins/state'

Vue.use(VueState, state)

Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/',
})

async function main () {
  // 获取用户信息
  try {
    state.user = await $fetch('user')
  } catch (e) {
    console.warn(e)
  }
  // 启动应用
  new Vue({
    el: '#app',
    data: state,
    render: h => h(AppLayout),
    router,
  })
}

main()
