<template>
  <transition name="component-fade" mode="out-in">
    <login v-if="$store.state.isShow"/>
    <register v-else/>
  </transition>
</template>

<script>
  import Login from "./Login/Login";
  import Register from "./register/Register";
  export default {
    name: "MainLogin",
    components:{
      Login,
      Register
    }
  }
</script>

<style lang="scss" scoped>

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
</style>
