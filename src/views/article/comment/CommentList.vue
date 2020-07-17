<template>
    <div class="mt-6 comment-list">
      <p class="allcomment mb-3">全部评论</p>
      <div v-for="(item,index) in comments" :key="item._id">
        <div class="display-flex">
          <img :src="item.user.avatar || item.avatar" class="avatar" alt="">
          <div class="flex pl-2">
            <p class="nickname">{{item.user.nickname || item.nickname}}</p>
            <span class="date">{{index+1}}楼</span>
            <span class="date pl-3">{{item.date | formatDateAll}}</span>
            <div class="content font-m">
              <span>{{item.content}}</span>
              <div class="display-flex mt-2">
                <p class="iconfont icon-dianzan another">赞</p>
                <p class="iconfont icon-huifu pl-3 another">回复</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name:'CommentList',
    data(){
      return{
        comments:[]
      }
    },
    created() {
      this.$bus.$on('articleInfo',comments=>{
        this.comments = comments
      })
    }
  }
</script>

<style lang="scss" scoped>
.comment-list{
   .allcomment{
     font-size:20px;
     &:before {
      content:' ';
      display: inline-block;
      margin-right:5px;
      position: relative;
      top: 2px;
      width: 5px;
      height: 20px;
      background: #6abe83;
     }
  }
  .nickname{
    color: #404040;
    font-size: 15px;
  }
  .date{
    font-size: 12px;
    color: #969696;
  }
  .avatar{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .content{
    margin:10px 0;
    padding-bottom: 10px;
    color: #404040;
    font-size: 18px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  }
  .another{
    color: #b0b0b0;
  }
 }
</style>
