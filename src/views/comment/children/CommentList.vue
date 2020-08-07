<template>
    <div class=" comment-list">
      <div v-if="comments.length">
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
                  <p class="iconfont icon-icon_comment pl-3 another" @click="replayComment(item._id)">回复</p>
                </div>
                <div v-show="isShow === item._id">
                  <Input class="inputArea" show-word-limit :maxlength="500" v-model="content" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="写下你的评论" />
                  <div class="mt-3 button">
                    <Button :disabled="textLength" type="primary" class="mr-3" @click="sendAnswer(item._id)">发布</Button>
                    <Button :disabled="textLength" @click="content=''">取消</Button>
                  </div>
                </div>
              </div>
              <div v-for="item1 in item.answer" :key="item1._id" class="display-flex">
                <img :src="item1.user?item1.user.avatar:''" class="avatar" alt="">
                <div class="flex">
                  <div>
                    <p class="nickname">{{item1.user?item1.user.nickname:''}}</p>
                    <span class="date">{{item1.date | formatDateAll}}</span>
                  </div>
                  <div class="content font-m">
                    <span>{{item1.content}}</span>
                    <div class="display-flex mt-2">
                      <p class="iconfont icon-dianzan another">赞</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div v-else class="noComment">
        暂时没有评论哦~
      </div>
    </div>
</template>

<script>
  import {postAnswer} from "network/answer"
  export default {
    name:'CommentList',
    props:{
      comments:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isShow:"",
        content:''
      }
    },
    computed:{
      textLength(){
        return this.content.length ? false : true
      }
    },
    methods:{
      replayComment(id){

        this.isShow = id
      },
      async sendAnswer(commentID){
        const userID = this.$store.state.currentUser._id
        if(userID){
          const res = await await postAnswer(userID,commentID,this.content)
          console.log(res)
          if (res.status === 200){
            this.$Message.success({
              background:true,
              content:'评论成功'
            })
            this.content=''
            this.$emit('sendOK')
          }
        }else {
          this.content=''
          this.$Message.warning({
            background:true,
            content:'请先登录'
          })
        }
      }
    },
    deactivated() {
      this.content = ""
    }
  }
</script>

<style lang="scss" scoped>
.comment-list{
  margin-top: 6%;
  .noComment{
    text-align: center;
    border-top: 1px solid #6abe83;
    border-bottom: 1px dashed #2E94B9;
    padding: 20px 0;
    font-size: 15px;
    color: #999;
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
    font-size: 15px;
    cursor: pointer;
  }
  .inputArea{
    width: 500px;
    margin-top: 10px;
  }
  .button{
    position: relative;
    left: 38%;
  }
 }
</style>
