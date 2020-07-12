<template>
  <div class="article-left">
    <div class="display-flex jc-between ai-center mr-1 ml-1 header">
      <div class="display-flex ai-center">
        <span class="iconfont icon-icon-test pl-3"></span>
        <p class="article-header pl-1">文章列表</p>
      </div>
    </div>
    <article-right-item :model="item" v-for="item in model" :key="item._id"/>
    <Page :total="total" :page-size="5" class-name="page" @on-change="pageChange"/>
  </div>
</template>

<script>
  import ArticleRightItem from "./ArticleRightItem";
  import {getArticles} from "../../../network/articles";
  export default {
    name: "ArticleLeft",
    components:{
      ArticleRightItem
    },
    data(){
      return {
        model:[],
        total:0,
        currentPage:1,
        pageSize:5
      }
    },
    methods:{
      getArticlesData(page,size=5){
        getArticles(page,size).then(res=>{
          const {model,total} = res.data
          this.model = model
          this.total = total
          this.$bus.$emit('totalNumber',this.total)
        })
      },
      pageChange(page){
        this.currentPage = page
        this.getArticlesData(this.currentPage)

      }
    },
    created() {
      this.getArticlesData(this.currentPage,this.pageSize)
    }
  }
</script>

<style lang="scss" scoped>
   .article-left{
     position: relative;
     width: 70%;
     height: 100%;
     margin-left: 20px;
     border-radius: 10px;
     border: 1px solid #80869529;
     background-color: #fff;
     .header{
       border-bottom: 2px solid #e3d4a4;
       line-height: 30px;
       .article-header{
         color: #374956cc;
         font-size: 16px;
         font-weight: 600;
       }
     }
     .page{
       position: relative;
       left: 60%;
       margin: 20px;
     }

   }
</style>
