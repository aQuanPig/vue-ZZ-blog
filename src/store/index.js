import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from "./actions";
Vue.use(Vuex)
const state = {
  elTopAndText:[],
  //判断登录状态
  isLogin:false,
  //获取用户信息
  currentUser:null
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
