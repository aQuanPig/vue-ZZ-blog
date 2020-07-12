<template>
  <div class="article-right">
   <article-left-top :model="adminUser"/>
    <article-left-center class="mt-3" :categories="categories"/>
    <article-left-bottom class="mt-3" :articles="new_categories"/>
  </div>
</template>

<script>
  import {getAdminUserData} from 'network/user'
  import {getCategoriesData} from 'network/categories'
  import {getNewArticles} from 'network/articles'
  import ArticleLeftTop from "./ArticleLeftTop";
  import ArticleLeftCenter from "./ArticleLeftCenter";
  import ArticleLeftBottom from "./ArticleLeftBottom";
  export default {
    name: "ArticleRight",
    components:{
      ArticleLeftTop,
      ArticleLeftCenter,
      ArticleLeftBottom
    },
    data(){
      return {
        adminUser:{},
        categories:[],
        new_categories:[]
      }
    },
    methods:{
      async getAdminUserData(){
        const res = await getAdminUserData()
        this.adminUser = res.data
      },
      async getCategoriesData(){
        const res = await getCategoriesData()
        this.categories = res.data
      },
      async getNewArticlesData(){
        const res = await getNewArticles()
        this.new_categories = res.data
      }
    },
    created() {
      this.getAdminUserData()
      this.getCategoriesData()
      this.getNewArticlesData()
    }
  }
</script>

<style lang="scss" scoped>
  .article-right{
    width: 26%;
    height: 100vh;
    background-color: #fff;
  }
</style>
