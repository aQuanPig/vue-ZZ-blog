<template>
  <div class="item" v-if="model">
    <div class="item-image">
      <img :src="model.image" alt="" >
    </div>
    <div class="item-left">
      <p class="font-m">{{model.title}}</p>
      <p class="item-detail font-xxs oneEclipsis pt-3 pb-3">{{model.account}}</p>
      <div class="display-flex ai-center">
        <img :src="model.avatar" alt="" style="width: 30px;height: 30px;border-radius: 50%">
        <p class="font-primary-1 pl-2 pr-4" style="font-weight: 600;">{{model.author}}</p>
        <p>{{model.date | formatData}}</p>
      </div>
      <div class="mt-3">
        <Tag :color="index % 2 ===0 ?'magenta':'purple'" v-for="(item1,index) in model.categories" :key="item1._id"> {{ item1.name }}</Tag>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  export default {
    name: "ArticleLeftItem",
    props:{
      model:{type:Object,default(){return {}}},
      total:{type:Number,default:0}
    },
    filters:{
      formatData(value){
        return dayjs(value).format('YYYY-MM-DD')
      }
    },
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
      .item-detail {
        width: 100%;
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
