<template>
  <div class="detail-base" >
    <div class="display-flex jc-center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-biaoqian1"></use>
      </svg>
      <h1 class="mb-3">{{model.title}}</h1>
    </div>
    <div>
      <span class="iconfont icon-gerenxinxi font-xs" v-if="model.authorinfo">{{model.authorinfo.nickname}}</span>
      <svg class="icon ml-2" aria-hidden="true">
        <use xlink:href="#icon-shijian"></use>
      </svg>
      <span>{{model.date | formatDate}}</span>
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
        return  resultColor
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
</style>
