<template>
  <div class="mt-3 board">
    <Card style="width:100%" class="mt-6">
      <p slot="title">
        <Icon  type="ios-chatboxes-outline" />
        {{nickname}}：请发表你的看法
      </p>
      <Alert class="alert" show-icon type="success" v-if="$store.state.isLogin">若有不足的地方，请提出你的观点</Alert>
      <Alert class="alert" show-icon type="warning" v-else>留言请登录，不登录的话昵称和头像为默认</Alert>

      <div class="comment">
        <div class="p-5 display-flex ai-center">
          <img :src="avatarUrl" class="avatar mr-2" style="width: 50px;height: 50px;">
          <Input class="inputArea" show-word-limit :maxlength="1000" v-model="content" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="在这里发表你对此文的观点" />
        </div>
        <div class="display-flex jc-end">
          <Button type="warning" :disabled="contentLength" @click="content=''">清空</Button>
          <Button type="success" :disabled="contentLength" class="ml-2" @click="sendMessage">发表</Button>
        </div>
      </div>
    </Card>
    <message-list :messages="message"/>
  </div>
</template>

<script>
  import MessageList from "./MessageList";
  import {getMessage, postMessage} from 'network/comment'
  export default {
    name: "MessageBoard",
    components:{MessageList},
    data(){
      return {
        content:'',
        nickname: this.$store.state.currentUser.nickname || '游客',
        avatar:"http://localhost:3000/uploads/e1c22edc49cefcf74486ff354fd1b88f",
        message:[]
      }
    },
    computed:{
      contentLength(){
        return this.content.length ? false : true
      },
      avatarUrl(){
        return this.$store.state.currentUser.avatar || this.avatar
      },
    },
    methods:{
      async getMessageData(){
        const res = await getMessage()
        this.message = res.data.message
      },
      async sendMessage(){
        const avatar =   this.$store.state.currentUser.avatar
        if(avatar){
          this.avatar = avatar
        }
        await postMessage(this.nickname,this.avatar,this.content)
        this.content = ""
        this.$Message.success({
          content:'添加留言成功'
        })
        this.getMessageData()
      }
    },

    created() {
      this.getMessageData()
    }
  }
</script>

<style lang="scss" scoped>
  .board{
    width: 1024px;
    margin: 70px auto 0;
  }
  .alert{
    margin-left: 20px;
    width: 40%;
  }
</style>
