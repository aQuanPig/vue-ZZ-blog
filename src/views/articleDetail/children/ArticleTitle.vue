<template>
  <div class="detail-base" v-if="model">
    <div class="display-flex jc-center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-biaoqian1"></use>
      </svg>
      <h1 class="mb-3">{{model.title}}</h1>
    </div>
    <div>
      <span class="iconfont icon-yonghu font-xs" v-if="model.authorinfo"> {{model.authorinfo.nickname}}</span>
      <span class="pl-4 iconfont icon-shijian font-xs" ></span>
      <span>{{model.date | formatDate}}</span>
      <span class="pl-4 iconfont icon-dianzan_huaban font-xs" ></span>
      <span>{{model.praise?model.praise.length:0}}</span>
    </div>
    <div class="mt-3">
      <Tag :color="getRandomColor()" v-for="item in model.categories" :key="item._id">{{item.name}}</Tag>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleTitle",
    props:{
      model:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        colorList:['magenta','red','volcano','lime','cyan','purple']
      }
    },
    methods:{
      getRandomColor(){
        let resultColor =  this.colorList[Math.floor((Math.random()*this.colorList.length))]
        return resultColor
      }
    },
  }
</script>

<style lang="scss" scoped>
  .detail-base{
    text-align: center;
    padding-bottom: 5px;
    margin: 60px 0;
    font-weight: 600;
  }
  .icon-yonghu{

    color: #1abc9c;
  }
  .icon-shijian{
    color: #D980FA;
  }
  .icon-dianzan_huaban{
    color: #f39c12;
  }
</style>
