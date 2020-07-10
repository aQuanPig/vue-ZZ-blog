<template>
  <div class="display-flex nav-bar bg-movies_header_bg font-movies_header_color jc-end pr-6">
    <div class="item">
      <i class="iconfont icon-index-copy"></i>
      <span>首页</span>
    </div>
    <div class="item">
      <i class="iconfont icon-wenzhangliebiao"></i>
      <span>文章详情</span>
    </div>
    <div class="item">
      <i class="iconfont icon-liuyanban1"></i>
      <span>留言板</span>
    </div>
    <div class="item">
      <i class="iconfont icon-github-back"></i>
      <span>GitHub</span>
    </div>
    <div class="item">
      <i class="iconfont icon-dengluzhuce"></i>
      <span>登录/注册</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data(){
      return{

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
 }
</style>
