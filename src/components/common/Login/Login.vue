<template>
  <div class="container">
    <img src="~assets/img/bgg.jpg" alt="" class="bg">
    <div class="panel display-flex">
      <div class="panel-left panel-left-none flex">
        <div class="input">
          <h2 style="color: #6f5555;margin-bottom: 10px">Sign in</h2>
          <div class="input-item">
            <i class="iconfont icon-yonghuming"></i>
            <input type="text" v-model="model.username"  placeholder="请输入用户名...">
          </div>
          <div class="input-item">
            <i class="iconfont icon-huabanfuben"></i>
            <input type="password" v-model="model.password" placeholder="请输入密码...">
          </div>
        </div>
        <button class="btn" @click="loginUser">登录</button>
      </div>
      <div class="panel-right panel-right-none flex">
        <h1 style="margin-top: 50%;">Hello Friend!</h1>
        <p>欢迎来到我的博客！</p>
        <button class="register" @click="changeClick">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {GET_USERINFO, SHOW_REGISTER} from 'store/mutation-types'
  import {validateUser} from 'network/user'

  export default {
    name: "Login",
    data(){
      return {
        model:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      async loginUser(){
        const res = await validateUser(this.model)
        if (res.status === 200){
          this.$Message['success']({
            background: true,
            content: '登录成功,即将跳转'
          });
        }
        //将用户名和token放入sessionStorage
        const {_id,nickname,avatar} = res.data
        const obj = {_id,nickname,avatar}
        console.log(obj)
        sessionStorage.setItem('usertoken',res.data.token)
        //将obj转为JSON字符串
        sessionStorage.setItem('userinfo',JSON.stringify(obj))
        //将用户名存入vuex中
        this.$store.commit(GET_USERINFO,obj)
        this.$router.push('/')
      },
      changeClick(){
        this.$store.commit(SHOW_REGISTER)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/login";
  .panel-left-none{
    margin-top: 60px;
  }
</style>
