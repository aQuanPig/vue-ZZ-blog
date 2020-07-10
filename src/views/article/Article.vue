<template>
  <div class="article" ref="articles">
    <article-left/>
    <article-right/>
  </div>
</template>

<script>
  import ArticleLeft from "./children/ArticleLeft";
  import ArticleRight from "./children/ArticleRight";
  export default {
    name: "Article",
    components:{
      ArticleLeft,
      ArticleRight
    },
    data(){
      return {
        offsetHeight:0
      }
    },
    mounted() {
      this.offsetHeight = this.$refs.articles.offsetHeight
    },
    watch:{
      offsetHeight(newValue){
        this.offsetHeight= newValue
        this.$bus.$emit('getHeight',this.offsetHeight)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .article{
    width: 1024px;
    height: 100%;
    margin:30px auto;
    display: flex;
  }
</style>
