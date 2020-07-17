<template>
  <div class="display-flex nav-bar bg-movies_header_bg font-movies_header_color jc-end pr-6">
    <div class="item" @click="$router.push('/')">
      <i class="iconfont icon-index-copy"></i>
      <span>首页</span>
    </div>
    <div class="item" @click="$router.push('/messageboard')">
      <i class="iconfont icon-liuyanban1"></i>
      <span>留言板</span>
    </div>
    <div class="item">
      <i class="iconfont icon-github-back"></i>
      <span>GitHub</span>
    </div>
    <div v-if="islogin" class="item ">
      <div class="userinfo">
        <img :src="$store.state.currentUser.avatar" class="avatar">
        <span>{{$store.state.currentUser.nickname}}</span>
        <div class="dropdown">
          <p class="dropdown-item">个人中心</p>
          <p @click="exitLogin">退出</p>
        </div>
      </div>
    </div>
    <div v-else class="item" @click="$router.push('/login')">
      <i class="iconfont icon-dengluzhuce"></i>
      <span>登录/注册</span>
    </div>
  </div>
</template>

<script>
  import {GET_USERINFO} from 'store/mutation-types'
  export default {
    name: "NavBar",
    data(){
      return{
        isLogin:false
      }
    },
    methods:{
      exitLogin(){
        this.$store.commit(GET_USERINFO,null)
        this.$router.push('/')
      }
    },
    computed:{
      islogin(){
        //获取vuex中isLogin的状态(JSON.parse将字符串转为对象)
        if(sessionStorage.getItem('usertoken')&& sessionStorage.getItem('userinfo')){
          this.$store.commit(GET_USERINFO,JSON.parse(sessionStorage.getItem('userinfo')))
        }else {
          this.$store.commit(GET_USERINFO,null)
        }
        return this.$store.state.isLogin
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar{
    padding-right: 16rem;
  }
 .item{
   margin: 0 15px;
   line-height: 45px;
   cursor: pointer;
   .iconfont{
      font-size: 14px;
   }
   span {
     font-size: 16px;
     padding-left: 3px;
   }
   .userinfo{
     position: relative;
     width: 100%;
     .avatar{
       width: 30px;
       height: 30px;
       border-radius: 50%;
     }
     .dropdown{
       position: absolute;
       width: 100%;
       top: 44px;
       background-color: #6abe83;
       color: #fff;
       text-align: center;
       opacity: 0;
       transition: all 1s;
     }
     &:hover {
       .dropdown{
         opacity: 1;
         z-index: 9;
         transition-delay: 0.3s;
       }
     }
   }
 }
</style>
