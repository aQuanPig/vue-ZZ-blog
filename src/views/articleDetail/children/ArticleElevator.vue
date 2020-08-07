<template>
  <div class="another ml-2">
    <div class="another-item" @click="praiseClick">
      <span v-cloak class="iconfont icon-dianzan" :class="{active:isClick}"/>
      <p :class="{active:isClick}">{{isClick?'已点赞':"点赞"}}</p>
    </div>
    <div class="another-item">
      <span class="iconfont icon-icon_comment comment"/>
      <p>评论</p>
    </div>
  </div>
</template>

<script>
  import { postPraise } from 'network/articles'
  export default {
    name: "ArticleElevator",
    data(){
      return {
        isClick:false
      }
    },
    methods:{
      async praiseClick(){
        if (this.$store.state.isLogin){
          if(this.isClick){
            await postPraise(this.id,this.$store.state.currentUser._id,-1)
            this.isClick = false
          } else {
            await postPraise(this.id,this.$store.state.currentUser._id,1)
            this.isClick = true
          }
        } else{
          this.$Message.warning('请先登录')
        }

      },
    }
  }
</script>

<style lang="scss" scoped>
  .another{
    position: fixed;
    top: 260px;
    right: 8%;
    margin-top: 10px;
    padding-right: 10px;
    width: 50px;
    height: 50px;
    .another-item{
      margin-top: 5px;
      span {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color:#ccc7b840;
        color: #848484b8;
        line-height: 50px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        &.active{
          background-color: #6abe83;
          color: #fff;
        }
      }
      p {
        margin-top: 2px;
        text-align: center;
        font-size: 12px;
        position: relative;
        left: 5px;
        &.active{
          color: #6abe83;
        }
      }
      .icon-huifu{
      }
    }
  }
  [v-cloak] {
    display: none;
  }
</style>
