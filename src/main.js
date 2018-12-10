import Es6Promise from 'es6-promise'
import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import VueI18n from 'vue-i18n'
import Mint from 'mint-ui'

import enData from '@/lang/en'
import zhData from '@/lang/zh'
import thaiData from '@/lang/thai'

Vue.config.productionTip = false
Es6Promise.polyfill() // 调用ES6兼容方法 

Vue.use(VueI18n)
Vue.use(Mint)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh', // 默认中文
  messages: {
      'en': {
        ...enData
      },
      'zh': {
        ...zhData
      },
      'thai': {
        ...thaiData
      }
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
