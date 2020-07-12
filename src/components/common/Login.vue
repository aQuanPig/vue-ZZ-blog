<template>
  <div class="container">
    <img src="~assets/img/bgg.jpg" alt="" class="bg">
    <div :class="{panelLogin:isLogin,panelReverLogin:isHidden}" class="panel display-flex">
      <div class="panel-left panel-left-none flex">
        <div class="input">
          <h2 style="color: #6f5555;margin-bottom: 20px">Sign in</h2>
          <div class="input-item">
            <i class="iconfont icon-yonghuming"></i>
            <input type="text"   placeholder="请输入用户名...">
          </div>
          <div class="input-item">
            <i class="iconfont icon-huabanfuben"></i>
            <input type="password" placeholder="请输入密码...">
          </div>
        </div>
        <button class="btn">登录</button>
      </div>
      <div class="panel-right panel-right-none flex">
        <h1 style="margin-top: 50%;">Hello Friend!</h1>
        <p>欢迎来到我的博客！</p>
        <button class="register" @click="changeLogin">Sign in</button>
      </div>
    </div>
    <div :class="{panelRegister:isRegister,panelReverRegister:isActive}" class="panel display-flex">
      <div class="panel-right panel-right-none flex">
        <h1 style="margin-top: 50%;">Hello Friend!</h1>
        <p class="font-xss">快来成为我们的一份子吧</p>
        <button class="register"  @click="changeRegister">Sign Up</button>
      </div>
      <div class="panel-left panel-left-none flex">
        <div class="input">
          <h2 style="color: #6f5555;margin-bottom: 20px">Sign Up</h2>
          <div class="input-item">
            <i class="iconfont icon-yonghuming"></i>
            <input type="text"   placeholder="请输入用户名...">
          </div>
          <div class="input-item">
            <i class="iconfont icon-yonghuming"></i>
            <input type="text"   placeholder="请输入昵称...">
          </div>
          <div class="input-item">
            <i class="iconfont icon-huabanfuben"></i>
            <input type="password" placeholder="请输入密码...">
          </div>
          <div class="input-item">
            <label for="upload" class="top">上传文件</label>
            <input type="file" multiple id="upload" style="display: none;" @change="uploadImg"/>
            <img :src="imgUrl?imgUrl:'~assets/img/touxiang.jpg'" alt="">
          </div>
        </div>
        <button class="btn">注册</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return {
        imgUrl:'',
        isUpload:false,
        isLogin:false,
        isRegister:false,
        isActive:false,
        count:1,
        isHidden:false,
        counter:1
      }
    },
    methods:{
      uploadImg(e){
        console.log(e)
        this.isUpload = !this.isUpload
        this.imgUrl = e.target.value
        console.log(this.imgUrl)
      },
      changeLogin(){
        this.count += 1
        console.log(this.count % 2)
        if(this.count%2===0){
          this.isHidden = false
          this.isLogin = true
        }else {
          this.isLogin = false
          this.isHidden = true
        }
      },
      changeRegister(){
        this.counter += 1
        console.log(this.counter % 2)
        if(this.counter%2===0){
          this.isActive = false
          this.isRegister = true
        }else {
          this.isRegister = false
          this.isActive = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/login";
   .active{
     z-index: -1;
   }
  .panelLogin{
    z-index: -1;
    .panel-left{
      transform: translateX(100%);
      transition: all 1s;
    }
    .panel-right{
      transform: translateX(-100%);
      transition: all 1s;
    }
  }
  .panelReverLogin{
    z-index: 1;
    .panel-left{
      transition: all 1s;
    }
    .panel-right{
      transition: all 1s;
    }
  }
  .panelRegister{
    z-index: 11;
    .panel-left{
      transform: translateX(-100%);
      transition: all 1s;
    }
    .panel-right{
      transform: translateX(100%);
      transition: all 1s;
    }
  }
  .panelReverRegister{
    z-index: -1;
    .panel-left{
      transition: all 1s;
    }
    .panel-right{
      transition: all 1s;
    }
  }
</style>
