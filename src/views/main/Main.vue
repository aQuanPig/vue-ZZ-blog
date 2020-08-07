<template>
  <div class="main-wrap">
    <div class="main">
      <h1 class="hotArticle">文章列表</h1>
      <div class="tag">
        <p class="tag-item">希望你永远记得:不要脾气大过于本事</p>
        <p class="tag-item">同样的,我希望你永远快乐</p>
      </div>
      <div class="articleShow">
        <MainItem class="articleItem" v-for="item in model" :key="item._id" :title="item.title" :account="item.account" :image="item.image" :date="item.date" :id="item._id"/>
      </div>
      <Page :total="total" class="total" show-total/>
    </div>

  </div>
</template>

<script>
import { getArticles } from 'network/articles'
import MainItem from './MainItem'
export default {
  name: 'Main',
  components:{MainItem},
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 6,
      model:[]
    }
  },
  methods: {
    getArticlesList(page,size=6) {
      getArticles(page, size).then((res) => {
        const { model, total } = res.data
        this.model = [...this.model,...model]
        this.total = total
      })
    },
    handleScroll(){
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      //滚动条到底部的条件
      if(scrollTop+windowHeight == scrollHeight) {
        //到了这个就可以进行业务逻辑加载后台数据了
        if(this.model.length === this.total){
          this.$Message.warning({content:"到底啦，没有文章~"})
          return
        } else {
          this.currentPage = this.currentPage +1;
          this.getArticlesList(this.currentPage)
        }
      }
      // 监听window滚动失效;并且document.body.scrollTop一直是0的情况!
      //
      //   查找了许多资料;并没有找到合理的解决方案;
      //
      // 最中发现,在index.html设置了html,body的宽高设置成了100%;
      //
      // 这样会造成window.onscroll监听不到正确的滚出高度(恒为0);
      //
      // 不和你们多bb:解决方案:
      //
      //   将html,body的height设置为auto;即可解决!!
    }
  },
  created() {

    this.getArticlesList(this.currentPage,this.pageSize)
  },
  mounted() {
    // window.addEventListener("scroll",this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  .main-wrap{
    padding-top: 20px;
    padding-bottom:10px;
    background: url("../../assets/img/11.jpg") no-repeat;
    background-size: cover;
  }
.main{
  text-align: center;
  margin: 0 auto;
  width: 1300px;
  background-color: #fff;
}
.articleShow {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  .articleItem{
    &:hover{
      transform: scale(1.1);
      transition: all 0.4s ;
    }
  }
}
.hotArticle{
  font-weight: 400;
  font-size: 32px;
  display:inline-block;
  color: #000000;
  line-height: 1;
  padding-top: 60px;
  &::after{
    content:"";
    display: inline-block;
    width: 46%;
    height: 2px;
    background-color: #e74c3c;
    position: relative;
    top: 3px;
  }
}
  .tag{
    margin-top: 20px;
    color: #888888;
    font-size: 15px;
    margin-bottom: 30px;
    .tab-item{
      padding-top: 5px;
    }
  }
  .total {
    padding-top: 40px;
    padding-bottom: 40px;
  }

</style>
