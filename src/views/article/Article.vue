<template>
  <div class="body display-flex" ref="articles">
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

</style>
