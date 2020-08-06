<template>
  <div class="articleItem">
    <div class="image">
      <img :src="image" alt="" @click="$router.push(`/articles/${id}`)">
      <div class="info">
        <p class="title" @click="$router.push(`/articles/${id}`)">{{title}}</p>
        <p class="createDate">{{date | formatDateAll}}</p>
        <div class="account">{{account}}</div>
        <!-- <a :href="`/articles/${id}`" class="readMore">阅读更多</a> -->
        <p class="readMore" @click="$router.push(`/articles/${id}`)">阅读更多</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainItem',
  props:{
    title:{type:String,default:""},
    account:{type:String,default:""},
    image:{type:String,default:""},
    date:{type:String,default:""},
    id:{type:String}
  }
}
</script>

<style lang="scss" scoped>
.articleItem{
  margin-left: 20px;
  margin-bottom: 20px;
  width: 380px;
  // height:370px;
  background-color: #faf9f9;
  .image{
    width:100%;

    img {
      cursor: pointer;
      width: 100%;
      height: 300px;
    }
    .info{
      padding-left: 10px;
      text-align: left;
      .title{
        color: #000;
        font-size: 16px;
        padding:30px 0 16px 0;
        display: inline-block;
        cursor: pointer;
        &:hover{
          color: #f39c12;
        }
      }
      .createDate{
        color: #bbb;
      }
      .account{
        color: #999;
        margin-top: 10px;
        font-size: 14px;
        display: -webkit-box;
        display: flex;
        align-items: center;
        height: 80px;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
      }
      .readMore{
        display: inline-block;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        color:#3498db;
      }
    }
  }
}
</style>

