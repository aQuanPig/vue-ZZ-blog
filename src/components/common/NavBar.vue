<template>
  <div class="display-flex nav-bar bg-movies_header_bg font-movies_header_color jc-end pr-6">
    <div class="item-wrap">
      <div class="item" @click="$router.push('/')">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div class="item" @click="$router.push('/tag')">
        <i class="iconfont icon-liuyan"></i>
        <span>标签</span>
      </div>
      <div class="item" @click="$router.push('/messageboard')">
        <i class="iconfont icon-liuyan"></i>
        <span>分类</span>
      </div>
      <div class="item" @click="$router.push('/messageboard')">
        <i class="iconfont icon-liuyan"></i>
        <span>留言板</span>
      </div>
      <div class="item">
        <i class="iconfont icon-github"></i>
        <span>GitHub</span>
      </div>
      <div v-if="islogin" class="item">
        <div class="userinfo">
          <img :src="$store.state.currentUser.avatar" class="avatar" />
          <span>{{$store.state.currentUser.nickname}}</span>
          <div class="dropdown">
            <p class="dropdown-item">个人中心</p>
            <p @click="exitLogin">退出</p>
          </div>
        </div>
      </div>
      <div v-else class="item" @click="$router.push('/login')">
        <i class="iconfont icon-denglu"></i>
        <span>登录/注册</span>
      </div>
      <div class="item item-search display-flex">
        <input
          v-model="search"
          type="text"
          class="inputItem iconfont icon-sousuo"
          placeholder="搜索你喜欢的文章..."
        />
        <span class="iconfont icon-sousuo search" @click="searchClick"></span>
      </div>
    </div>
      <img src="~assets/img/run.gif" alt class="run" />
  </div>
</template>

<script>
import { GET_USERINFO } from 'store/mutation-types'
import { getKeySearch } from 'network/articles'
export default {
  name: 'NavBar',
  data() {
    return {
      isLogin: false,
      search: '',
    }
  },
  methods: {
    exitLogin() {
      this.$store.commit(GET_USERINFO, null)
      this.$router.push('/')
    },
    searchClick() {
      console.log('ok')
      getKeySearch(this.search).then((res) => {
        this.$Message.success({
          content: '查询文章成功',
        })
        this.$bus.$emit('getKeyWordArticles', res.data)
        this.search = ''
      })
    },
  },
  computed: {
    islogin() {
      //获取vuex中isLogin的状态(JSON.parse将字符串转为对象)
      if (
        sessionStorage.getItem('usertoken') &&
        sessionStorage.getItem('userinfo')
      ) {
        this.$store.commit(
          GET_USERINFO,
          JSON.parse(sessionStorage.getItem('userinfo'))
        )
      } else {
        this.$store.commit(GET_USERINFO, null)
      }
      return this.$store.state.isLogin
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
}
.item-wrap {
  display: flex;
  .item {
    text-align: center;
    margin: 0 5px;
    line-height: 70px;
    cursor: pointer;
    color: #f7f7ee;
    padding: 0 10px;
    &:hover {
      background-color: #f3af4861;
    }
    .iconfont {
      font-size: 18px;
    }
    span {
      font-size: 18px;
      padding-left: 3px;
    }
    .userinfo {
      position: relative;
      width: 100%;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .dropdown {
        position: absolute;
        width: 100%;
        top: 44px;
        background-color: #6abe83;
        color: #fff;
        text-align: center;
        opacity: 0;
        transition: all 1s;
      }
      &:hover {
        .dropdown {
          opacity: 1;
          z-index: 9;
          transition-delay: 0.3s;
        }
      }
    }
  }
  .item-search {
    position: relative;
    .inputItem {
      border: 1px solid #e7696ac2;
      color: #333;
      background-color: #fff;
      height: 39px;
      font-size: 13px;
      width: 180px;
      border-radius: 15px;
      margin-top: 14px;
      padding: 0 35px 0 12px;
    }
    .search {
      position: relative;
      top: -4px;
      left: -31px;
      color: #333333;
      font-size: 16px;
    }
  }
}

  .run {
    position: absolute;
    top: 32px;
    left: 22vw;
    width: 40px;
    height: 40px;
  }
</style>
