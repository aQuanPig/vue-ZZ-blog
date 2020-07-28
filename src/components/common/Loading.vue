<template>
  <div class="loading">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <p>Loading...</p>
  </div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style lang="scss" scoped>
  .loading{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: #262626;
  }
  p{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #ffffff;
  }
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 0;
    padding: 0;
    display: flex;
  }
  ul li {
    list-style: none;
    width: 40px;
    height: 40px;
    background-color: #fff;
    animation: animate 1.6s ease-in-out infinite;
  }
  @keyframes animate{
    0%, 40%, 100% {
      margin: 10px;
      transform: translateY(30px);
    }
    20%{
      transform: translateY(-30px);
    }
  }
  ul li:nth-child(1){
    animation-delay: -1.4s;
    background-color: #86269b;
    box-shadow: 0 0 50px #86269b;
  }
  ul li:nth-child(2){
    animation-delay: -1.2s;
    background-color: #fd7923;
    box-shadow: 0 0 50px #fd7923;
  }
  ul li:nth-child(3){
    animation-delay: -1s;
    background-color: #00a03e;
    box-shadow: 0 0 50px #00a03e;
  }
  ul li:nth-child(4){
    animation-delay: -0.8s;
    background-color: #F75940;
    box-shadow: 0 0 50px #F75940;
  }
  ul li:nth-child(5){
    animation-delay: -0.6s;
    background-color: #c50d66;
    box-shadow: 0 0 50px #c50d66;
  }
  ul li:nth-child(6){
    animation-delay: -0.4s;
    background-color: #1794ac;
    box-shadow: 0 0 50px #1794ac;
  }
</style>
