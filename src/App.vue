<template>
  <div id="app" :style="contentStyleObj">
    <nav-bar/>
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
      return{
        contentStyleObj: {
          height: ''
        }
        }
    },
  }
</script>
<style lang="scss">
  @import "assets/css/base.css";
  @import "assets/css/style";
  html,body {
    height: 100%;
  }
  #app {
    background:url('./assets/img/watercolor.png');
  }
</style>
