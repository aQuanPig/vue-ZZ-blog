<template>
  <div class="container">
    <img src="~assets/img/bgg.jpg" alt="" class="bg">
    <div class="panel display-flex">
      <div class="panel-right flex">
        <h1 style="margin-top: 50%;">Hello Friend!</h1>
        <p class="font-xss">快来成为我们的一份子吧</p>
        <button class="register"  @click="changeClick">登录</button>
      </div>
      <div class="panel-left panel-left-none flex">
        <div class="input">
          <h2 style="color: #6f5555;margin-bottom: 20px">Sign Up</h2>
          <div class="input-item">
            <i class="iconfont icon-yonghuming"></i>
            <input type="text" v-model="model.username"   placeholder="请输入用户名...">
          </div>
          <div class="input-item">
            <i class="iconfont icon-yonghuming"></i>
            <input type="text" v-model="model.nickname"  placeholder="请输入昵称...">
          </div>
          <div class="input-item">
            <i class="iconfont icon-huabanfuben"></i>
            <input type="password" v-model="model.password" placeholder="请输入密码...">
          </div>
          <div class="mt-2 file-item">
            <span class="file-text">选择头像：</span>
            <Upload
              ref="upload"
              :show-upload-list="false"
              :on-success="handleSuccess"
              :format="['jpg','jpeg','png']"
              type="drag"
              action="http://localhost:3000/web/api/uploads"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                <img :src="model.avatar?model.avatar:imgUrl" alt="" style="width: 58px;height: 58px;">
              </div>
            </Upload>
          </div>
        </div>
        <button class="btn" @click="registerUser">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { postUserData } from 'network/user'
  import { SHOW_LOGIN } from 'store/mutation-types'
  export default {
    name: "Register",
    data(){
      return{
        model:{
          avatar:''
        },
        imgUrl:'http://localhost:3000/webuploads/touxiang.jpg',
        isUpload:false,

      }
    },
    methods:{
      async registerUser(){
        if (!this.model.avatar){
          this.model.avatar = this.imgUrl
        }
        const res = await postUserData(this.model)
        if (res.status === 200){
          this.$Message['success']({
            background: true,
            content: '注册成功,即将跳转'
          });
          this.$router.push('/articles')
        }else {
          this.$Message['error']({
            background: true,
            content: '注册失败'
          });
        }
      },
      handleSuccess(response){
        this.model.avatar = response.url
      },
      changeClick(){
        this.$store.commit(SHOW_LOGIN)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/login";
  .file-item{
    position: relative;
    left: -38px;
    .file-text{
      position: relative;
      top: -27px;
      left: 2px;
    }
  }
</style>
