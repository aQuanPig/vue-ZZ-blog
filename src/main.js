import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import {formatDate,formatDateAll} from './filters/filter'
Vue.filter('formatDate',formatDate)
Vue.filter('formatDateAll',formatDateAll)
//声明事件总线
Vue.prototype.$bus = new Vue()
import './utils/directive'
Vue.use(ViewUI);
Vue.$Message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
