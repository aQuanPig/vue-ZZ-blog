<template>
  <div id="app" ref="app">
    <nav-bar v-if="!$route.meta.keepAlive"/>
    <back-ground/>
    <loading v-show="$store.state.isLoading"/>
    <keep-alive>
     <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import BackGround from './components/common/BackGround/BackGround'
  import Loading from "./components/common/Loading";
  import NavBar from "components/common/NavBar";
  export default {
    name: "App",
    data(){
      return{

      }
    },
    components:{
      NavBar,
      Loading,
      BackGround,
    },
    mounted() {

    }
  }
</script>
<style lang="scss">
  @import "assets/css/base.css";
  @import "assets/css/style";
  @import "assets/css/iconfont/iconfont.css";
  html,body{
    height: auto;
    width: auto;
    // background:url('./assets/img/so-white.png');
    // overflow-x:hidden;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  #app {
    position: relative;
  }
</style>
