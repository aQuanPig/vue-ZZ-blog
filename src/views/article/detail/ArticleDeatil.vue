<template>
  <div class="detail body" v-if="model">
    <!--文章标题-->
    <article-title :model="model"/>
    <!--文章主体-->
    <div class="display-flex mt-3 detail-body" ref="detail">
      <article-detail-left />
      <article-detail-right :detail="model.detail"/>
    </div>
    <img src="~assets/img/timg.gif" alt="" class="bg-gif">
    <!--评论内容-->
    <comment :article-id="model._id" @commentSuccess="commentSuccess"/>
  </div>
</template>

<script>
  import {getArticlesDetail} from 'network/articles'
  import ArticleDetailLeft from "./ArticleDetailLeft";
  import ArticleDetailRight from "./ArticleDetailRight";
  import ArticleTitle from "./ArticleTitle";
  import Comment from "../comment/Comment";
  export default {
    name: "ArticleDeatil",
    props:['id'],
    components:{ArticleDetailLeft,ArticleDetailRight,ArticleTitle,Comment},
    data(){
      return {
        model: {},
      }
    },
    methods:{
      getArticlesDetailData(){
        getArticlesDetail(this.id).then(res=>{
          this.model = res.data
          this.$bus.$emit('articleInfo',this.model.comments)
        })
      },
      commentSuccess(){
        this.getArticlesDetailData()
      }
    },
    created() {
      this.getArticlesDetailData()
    },
  }
</script>

<style lang="scss" scoped>
 .detail{
   position: relative;
   padding-bottom: 5px;
   .detail-body{
     overflow: hidden;
   }
   .bg-gif{
     position: absolute;
     top: 140px;
     left: -35px;
     width: 160px;
   }
 }
</style>
