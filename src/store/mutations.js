import {GET_ELEMENTTOP,GET_USERINFO,SHOW_LOADING,HIDDEN_LOADING, SHOW_LOGIN, SHOW_REGISTER} from './mutation-types'
export default {
  [GET_ELEMENTTOP](state,payload){
    state.elTopAndText = payload
  },
  [GET_USERINFO](state,payload){
    if (payload){
      state.currentUser = payload
      state.isLogin = true
    } else if (payload === null){
      console.log('ok')
      //登出按钮，清空sessionStorage的东西
      sessionStorage.setItem('usertoken',null)
      sessionStorage.setItem('userinfo',"")
      state.currentUser = {}
      state.isLogin = false
    }
  },
  [SHOW_LOADING](state){
    state.isLoading = true
  },
  [HIDDEN_LOADING](state){
    state.isLoading = false
  },
  [SHOW_LOGIN](state){
    state.isShow = true
  },
  [SHOW_REGISTER](state){
    state.isShow = false
  }
}
