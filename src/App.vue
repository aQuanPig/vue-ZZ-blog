<template>
  <div id="app">
    <nav-bar v-if="!$route.meta.keepAlive"/>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from "components/common/NavBar";
  export default {
    name: "App",
    components:{
      NavBar
    },
    data(){
      return {
        SkipSwitchName:''
      }
    },
    watch:{
      $route(to){
        if(to.meta.keepAlive){
          this.SkipSwitchName= "slide-fade";
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "assets/css/base.css";
  @import "assets/css/style";
  html,body,{
    height: 100%;
    width: 100%;
    background:url('./assets/img/so-white.png');
  }
  /*进入过渡的开始状态，元素被插入时生效，只应用一帧后立即删除(运动初始状态)*/
  /*进入过渡的结束状态，元素被删除时生效，只应用一帧后立即删除(运动初始状态)*/
  .slide-fade-enter,.slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
  /*进入过渡的结束状态，这个类可以被用来定义过渡的过程时间，延迟和曲线函数*/
  /*离开过渡的结束状态，这个类可以被用来定义过渡的过程时间，延迟和曲线函数*/
  .slide-fade-enter-active,.slide-fade-leave-active {
    opacity: 1;
    transition: all 0.4s;
  }

</style>
