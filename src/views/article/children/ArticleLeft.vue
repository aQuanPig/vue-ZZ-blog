<template>
  <div class="article-left">
    <div><p class="article-header pl-5">文章列表</p></div>
    <article-left-item :model="item" v-for="item in model" :key="item._id"/>
    <Page :total="total" show-total :page-size="5" class-name="page"/>
  </div>
</template>

<script>
  import ArticleLeftItem from "./ArticleLeftItem";
  import {getArticles} from "../../../network/articles";
  export default {
    name: "ArticleLeft",
    components:{
      ArticleLeftItem
    },
    data(){
      return {
        model:[],
        total:0
      }
    },
    methods:{
      getArticlesData(){
        getArticles(1,5).then(res=>{
          const {model,total} = res.data
          this.model = model
          this.total = total
        })
      }
    },
    created() {
      this.getArticlesData()
    }
  }
</script>

<style lang="scss" scoped>
   .article-left{
     position: relative;
     width: 70%;
     height: 100%;
     margin-right: 20px;
     border-radius: 10px;
     border: 1px solid #80869529;
     background-color: #fff;
     .article-header{
       color: #515a6e;
       font-size: 20px;
       border-bottom: 2px solid pink;
     }
     .page{
       position: relative;
       left: 60%;
     }
   }
</style>
