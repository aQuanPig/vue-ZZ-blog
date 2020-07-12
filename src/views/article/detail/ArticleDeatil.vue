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
    <comment/>
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
        model:{},

      }
    },
    mounted() {
      getArticlesDetail(this.id).then(res=>{
        console.log(res)
         this.model = res.data
      })
    },
  }
</script>

<style lang="scss" scoped>
 .detail{
   padding-bottom: 5px;

   .detail-body{
     overflow: hidden;
   }
   .bg-gif{
     position: absolute;
     top: 40%;
     left: 10%;
     width: 160px;
   }
 }
</style>
