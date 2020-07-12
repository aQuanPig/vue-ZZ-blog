<template>
  <div class="container">
    <img src="~assets/img/bgg.jpg" alt="" class="bg">
    <div class="panel">
      <div>
        <label for="username">用户名：</label>
        <input type="text" id="username">
      </div>
      <div>
        <label for="password">密码：</label>
        <input type="text" id="password">
      </div>

      头像： <input type="file" name="" accept="image/gif,image/jpeg,image/jpg,image/png" @change="fileChange">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",

  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    .bg {
      width: 100%;
      height: 100%;
    }
    .panel{
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 300px;
      height: 200px;
      background-color: #b59bac30;
      text-align: center;
    }
  }
</style>
