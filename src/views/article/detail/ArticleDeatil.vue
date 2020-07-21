<template>
  <div class="detail body" v-if="model">
    <!--文章标题-->
    <article-title :model="model"/>
    <!--文章主体-->
    <div class="display-flex mt-3 detail-body" ref="detail">
      <article-detail-left />
      <article-detail-right :detail="model.detail"/>
    </div>
    <div class="another ml-2">
      <div class="another-item" @click="praiseClick">
        <span class="iconfont icon-dianzan" :class="{active:isClick}"/>
        <p :class="{active:isClick}">{{isClick?'已点赞':"点赞"}}</p>
      </div>
     <div class="another-item">
       <span class="iconfont icon-huifu comment"/>
       <p>评论</p>
     </div>
    </div>
    <img src="~assets/img/timg.gif" alt="" class="bg-gif">
    <!--评论内容-->
    <comment :article-id="model._id" @commentSuccess="commentSuccess"/>

  </div>
</template>

<script>
  import {getArticlesDetail, postPraise} from 'network/articles'
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
        isClick:false
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
      },
      async praiseClick(){
        if (this.$store.state.isLogin){
          if(this.isClick){
            console.log('取消点赞')
            await postPraise(this.id,this.$store.state.currentUser._id,-1)
            this.isClick = false
          } else {
            console.log('点赞')
            await postPraise(this.id,this.$store.state.currentUser._id,1)
            this.isClick = true
          }
        } else{
          this.$Message.warning('请先登录')
        }

      },
      showPraise(newModel){
        const res = newModel.praise.includes(this.$store.state.currentUser._id)
        if(this.$store.state.isLogin && res) {
          this.isClick = true
        }
      }
    },
    created() {
      this.getArticlesDetailData()
    },
    watch:{
      model(newValue){
        this.showPraise(newValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
 .detail{
   position: relative;
   padding-bottom: 5px;
   .detail-body{
     overflow: hidden;
     position: relative;
   }
   .another{
     position: fixed;
     top: 260px;
     right: 172px;
     margin-top: 10px;
     padding-right: 10px;
     width: 50px;
     height: 50px;
     .another-item{
       margin-top: 5px;
       span {
         display: inline-block;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         background-color:#ccc7b840;
         color: #848484b8;
         line-height: 50px;
         font-size: 20px;
         cursor: pointer;
         text-align: center;
         &.active{
           background-color: #6abe83;
           color: #fff;
         }
       }
       p {
         margin-top: 2px;
         text-align: center;
         font-size: 12px;
         position: relative;
         left: 5px;
         &.active{
           color: #6abe83;
         }
       }
       .icon-huifu{
       }
     }
   }
   .bg-gif{
     position: absolute;
     top: 140px;
     left: -35px;
     width: 160px;
   }
 }
</style>
