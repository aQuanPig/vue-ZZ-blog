import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from "./actions";
Vue.use(Vuex)
const state = {
  //标题高度
  elTopAndText:[],
  //判断登录状态
  isLogin:false,
  //获取用户信息
  currentUser:null,
  isLoading:false,
  // 登录注册界面显示与隐藏
  isShow:true
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
