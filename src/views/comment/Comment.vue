<template>
  <div class="mt-3" ref="comment">
    <comment-top-info :articleId="articleId" @commentSuccess="sendOK"/>
    <comment-list :comments="comments" @sendOK="sendOK"/>
  </div>
</template>

<script>
  import CommentList from "./children/CommentList";
  import CommentTopInfo from "./children/CommentTopInfo";
  export default {
    name: "Comment",
    components: {CommentList,CommentTopInfo},
    props:{
      comments:{
        type:Array,
        default(){
          return []
        }
      },
      articleId:{
        type:String,
        default:''
      }
    },
    methods:{
      sendOK(){
        this.$emit('sendOK')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
