<template>
  <div class="mt-3" ref="comment">
    <div class="comment">
      <div class="p-5 display-flex ai-center">
      <img :src="getAvatar" class="avatar mr-2" v-if="$store.state.isLogin">
      <Input class="inputArea" show-word-limit :maxlength="1000" v-model="content" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="在这里发表你对此文的观点" />
    </div>
    <Button :disabled="textLength" type="info"  class="commit" @click="postComment">
      <span class="iconfont icon-fabu pr-1"></span>发表评论
    </Button>
    </div>
    <comment-list/>
  </div>
</template>

<script>
  import CommentList from "./CommentList";
  import {postComment} from 'network/comment'
  export default {
    name: "Comment",
    components: {CommentList},
    props:{
      articleId:{
        type:String,
        default:''
      }
    },
    data(){
      return {
        content:'',
      }
    },
    methods:{
      async postComment(){
        const userId = this.$store.state.currentUser._id
        if(userId){
          const res = await postComment(userId,this.articleId,this.content)
          console.log(res)
          if (res.status === 200){
            this.$Message.success({
              background:true,
              content:'评论成功'
            })
            this.content=''
            this.$emit('commentSuccess')
          }
        }else {
          this.$Message.warning({
            background:true,
            content:'请先登录'
          })
        }
      }
    },
    computed:{
      textLength(){
        return this.content.length ? false : true
      },
      getAvatar(){
        const avatar = this.$store.state.currentUser.avatar
        return avatar
      }
    },
  }
</script>

<style lang="scss" scoped>
 .comment {
   position: relative;
   height: 200px;
   background-color:#508c7bba;
   .avatar{
     width: 50px;
     height: 50px;
     border-radius: 50%;
   }
   .inputArea{
     position: relative;
     top: 16px;
   }
   .commit{
     position: absolute;
     right: 32px;
     top: 138px;
   }
 }

</style>
