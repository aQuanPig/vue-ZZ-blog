import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/font_2s6dk5vyl6w/iconfont.css'
//声明事件总线
Vue.prototype.$bus = new Vue()
Vue.use(ViewUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
