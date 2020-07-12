<template>
  <div class="mt-3 comment">
    <Input v-model="content" class="p-6" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="在这里发表你对此文的观点" />
    <Button :disabled="textLength" type="success"  class="commit">
      <span class="iconfont icon-fabu pr-1"></span>发表评论
    </Button>
<!--    <button type="submit" :disabled="textLength" class="commit iconfont icon-fabu">发表评论</button>-->
  </div>
</template>

<script>
  export default {
    name: "Comment",
    data(){
      return {
        content:''
      }
    },
    computed:{
      textLength(){
        return this.content.length ? false : true
      }
    }
  }
</script>

<style lang="scss" scoped>
 .comment {
   position: relative;
   height: 200px;
   background-color:rgba(216, 213, 213, 0.3);
   .commit{
     position: absolute;
     right: 32px;
     top: 138px;
   }
 }
</style>
