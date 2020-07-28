<template>
  <div id="app">
    <nav-bar v-if="!$route.meta.keepAlive"/>
    <loading v-show="$store.state.isLoading"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import Loading from "./components/common/Loading";
  import NavBar from "components/common/NavBar";
  export default {
    name: "App",
    components:{
      NavBar,
      Loading
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
    overflow-x:hidden;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

</style>
