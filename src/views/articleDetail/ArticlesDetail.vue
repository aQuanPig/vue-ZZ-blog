<template>
  <div class="detail body" v-if="model">
    <!--文章标题-->
    <article-title :model="model"/>
    <!--文章主体-->
    <div class="display-flex mt-3 detail-body" ref="detail">
      <article-detail-left />
      <article-detail-right :detail="model.detail"/>
    </div>
    <!--电梯栏-->
    <article-elevator/>
    <!--小图片-->
    <img src="~assets/img/timg.gif" alt="" class="bg-gif">
    <!-- 文章评论列表-->
    <comment :articleId="model._id" @commentSuccess="sendOK" :comments="model.comments" @sendOK="sendOK"/>
  </div>
</template>

<script>
  import {getArticlesDetail} from 'network/articles'
  import ArticleTitle from "./children/ArticleTitle";
  import ArticleDetailLeft from "./children/ArticleDetailLeft";
  import ArticleDetailRight from "./children/ArticleDetailRight";
  import ArticleElevator from "./children/ArticleElevator";
  // import Comment from "../comment/Comment";
  import Comment from "../comment/Comment";
  export default {
    name: "ArticleDetail",
    props:['id'],
    components:{ArticleTitle,ArticleDetailLeft,ArticleDetailRight,ArticleElevator,Comment},
    data(){
      return {
        model:{}
      }
    },
    methods:{
      getArticlesDetailData() {
        getArticlesDetail(this.id).then(res => {
          this.model = res.data
        })
      },
      sendOK(){
        this.getArticlesDetailData()
      }
    },
    created() {
      this.getArticlesDetailData()
    }
  }
</script>

<style lang="scss" scoped>
  .detail{
    position: relative;
  }
  .bg-gif{
    position: absolute;
    top: 140px;
    left: -35px;
    width: 160px;
  }
</style>
