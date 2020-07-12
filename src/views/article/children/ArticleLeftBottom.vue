<template>
  <div class="bottom">
    <div class="article display-flex pl-2 ai-center">
      <span class="iconfont icon-zuijin pr-1"></span>
      <p class="font-weight font-title" >最近文章</p>
    </div>
    <div v-for="item in articles" :key="item._id" class="display-flex jc-between content" >
      <span class="title" @click="titleClick(item._id)">{{item.title}}</span>
      <span class="date iconfont icon-shijian">{{item.date | formatDate}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleLeftBottom",
    props:{
      articles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      titleClick(id){
        this.$router.push(`/articles/${id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
 .bottom{
   border: 1px solid rgba(100,100,100,0.3);
   border-radius: 10px;
   overflow: hidden;
   .article{
     line-height: 28px;
     border-bottom: 2px solid #e3d4a4;
   }
   .content{
     padding: 5px 5px;
     .title{
       width: 65%;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap;
       cursor: pointer;
     }
     .date{
       color: #E95D22;
       font-weight: 700;
       font-size: 12px;
     }
   }
 }
</style>
