/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 14:16:20
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-28 15:55:22
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Input } from 'aidongyang-ui'
import 'aidongyang-ui/lib/ai-ui.css'
import App from './App.vue'
import store from './store'
import router from './router'

import 'normalize.css/normalize.css'
import 'src/styles/index.scss'
// import '../permission'

import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'medium'
})
console.log(Button)
Vue.use(Button)
Vue.use(Input)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
