<template>
  <div class="container" :class="{main:$route.path==='/'?true:false}">
    <div class="button" v-show="$route.path==='/'">
      <button class="button-item iconfont icon-jiantou_xia" @click.prevent="readMe"> 开始阅读</button>
      <button class="button-item iconfont icon-github" @click="routerGit">FORK ME</button>
    </div>
    <div class="cursor"></div>
    <div class="cursor2"></div>
  </div>
</template>

<script>
export default {
  name: 'BackGround',
  methods: {
    readMe() {
      let height = document.documentElement.clientHeight
      // console.log(document.documentElement.clientHeight ,document.body.scrollHeight)
      window.scrollTo({ top: height, behavior: 'smooth' })
    },
    routerGit() {
      window.open('https://github.com/aQuanPig')
    },
  },
  mounted() {
    this.$nextTick(() => {
      let cursor = document.querySelector('.cursor')
      let cursor2 = document.querySelector('.cursor2')
      document.addEventListener('mousemove', (e) => {
        cursor.style.cssText = cursor2.style.cssText =
          'left:' + e.clientX + 'px;top:' + e.clientY + 'px'
      })
    })
  },
}
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
  }
.container {
  width: 100%;
  background-image: url('../../../assets/img/timg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
}
/* 加滤镜 */
.container::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    90deg,
    #e74c3c,
    #786fa6,
    #ea8685,
    #9b59b6,
    #bdc3c7,
    #c0392b,
    #f1c40f,
    #e74c3c
  );
  opacity: 0.35;
  background-size: 600%;
  animation: a 40s linear infinite;
}
/* 设置动画 */
@keyframes a {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 600%;
  }
}
.button {
  z-index: 9;
  .button-item {
    padding: 10px 40px;
    font-size: 16px;
    color: #333333;
    margin-right: 20px;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #333333;
    &:hover {
      background-color: #e74c3c;
      color: #fff;
      border: none;
    }
  }
}

.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 1px solid #e67e22;
  border-radius: 50%;
  transition: 0.1s;
  z-index: 9;
}
.cursor2 {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e67e22;
  transition: 0.15s;
  z-index: 9;
}
</style>
