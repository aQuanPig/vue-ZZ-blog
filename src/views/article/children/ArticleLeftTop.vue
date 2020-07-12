<template>
  <div class="rightTop ">
    <div class="about pl-3 display-flex">
      <span class="iconfont icon-guanyu pr-1"></span>
      <p class="font-weight font-title">关于本站</p>
    </div>
   <div class="display-flex ai-center top pt-4 pl-3">
     <img :src="model.avatar" alt="" >
     <div class="userinfo ml-1">
       <p class="font-s name">{{model.nickname}}的博客</p>
       <p class="info">简介：暂无介绍</p>
     </div>
   </div>
    <div class="display-flex mt-4 another">
      <div class="anotherInfo" style="border: none">文章{{total}}</div>
      <div class="anotherInfo">留言{{message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleLeftTop",
    props:{
      model:{
        type:Object,
        default() {
          return {};
        }
      }
    },
    data(){
      return {
        total:0,
        message:0
      }
    },
    mounted() {
      this.$bus.$on('totalNumber',total=>{
        this.total = total
      })
    }
  }
</script>

<style lang="scss" scoped>
  .rightTop{
    position: relative;
    width: 100%;
    height: 180px;
    border: 1px solid rgba(100,100,100,0.3);
    border-radius: 10px;
    overflow: hidden;
    .about{
      line-height: 28px;
      border-bottom: 2px solid #e3d4a4;
      .ivu-icon-happy-outline{
        width: 10px;
        color:pink;
      }
      p {
        font-weight: 700;
      }
    }
    .top{
      img {
        width: 80px;
        height: 80px;
        border: 1px solid rgba(100,100,100,0.2);
      }
      .userinfo{
        padding-left: 5px;
        .name{
          font-weight: 700;
        }
        .info {
          font-size: 12px;
        }
      }
    }
    .another{
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      border-top: 1px solid rgba(100,100,100,0.2);
      .anotherInfo{
        flex: 1;
        text-align: center;
        background-color: rgba(196,212,175,0.2);
        line-height: 30px;
        border-left: 1px solid rgba(100,100,100,0.2);
      }
    }
  }
</style>
