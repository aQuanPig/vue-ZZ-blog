<template>
  <div class="item" v-if="model">
    <div class="item-image">
      <img :src="model.image" alt="" style="border-radius: 10%">
    </div>
    <div class="item-left" @click="pushDetail(model)">
      <p class="font-m">{{model.title}}</p>
      <p class="item-detail font-xxs oneEclipsis pt-3 pb-3">{{model.account}}</p>
      <div class="display-flex ai-center" v-if="model.authorinfo">
        <img :src="model.authorinfo.avatar" alt="" style="width: 30px;height: 30px;border-radius: 50%">
        <p class="font-primary-1 pl-2 pr-4" style="font-weight: 600;">{{model.authorinfo.nickname}}</p>
        <p>{{model.date | formatDate}}</p>
        <div class="display-flex mt-2 ml-2 another">
          <p class="iconfont icon-dianzan another-item">{{model.praise.length}}</p>
          <p class="iconfont icon-huifu pl-3 another-item">{{  model.comments.length}}</p>
        </div>
      </div>
      <div class="mt-3">
        <Tag :color="index % 2 ===0 ?'magenta':'purple'" v-for="(item1,index) in model.categories" :key="item1._id"> {{ item1.name }}</Tag>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleLeftItem",
    props:{
      model:{type:Object,default(){return {}}},
      total:{type:Number,default:0}
    },
    methods:{
      pushDetail(model){
        this.$router.push(`/articles/${model._id}`)
      }
    }

  }
</script>

<style lang="scss" scoped>
  .item {
    height: 250px;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid rgba(100,100,100,0.4);
    display: flex;

    .item-image{
      width: 180px;
      height: 230px;
      img {
        width: 180px;
        height: 230px;
      }
    }
    .item-left {
      width: calc(100% - 180px);
      padding: 20px 30px;
      cursor: pointer;
      &:hover{
        transition:all 0.5s;
        transform:scale(1.05);
      }
      .item-detail {
        width: 100%;
      }
      .another{
        position: relative;
        bottom: 5px;
        .another-item{
          font-size: 12px;
          color: #51a751;
        }
      }
    }
  }
  /*多行省略*/
  .oneEclipsis{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
