import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
import { Button } from 'mint-ui'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters'

Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
  loading: loading
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
