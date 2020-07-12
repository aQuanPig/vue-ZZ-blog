<template>
  <div class="center">
    <div class="about pl-3 display-flex ai-center">
      <span class="iconfont icon-biaoqian pr-1"></span>
      <p class="font-weight font-title">文章标签</p>
    </div>
    <div class="mt-3 mb-3">
      <Tag class="tab-item" :color="getRandomColor()" v-for="item in categories" :key="item._id">{{item.name}}</Tag>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleLeftCenter",
    props:{
      categories:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        colorList:['magenta','red','volcano','lime','cyan','purple','geekblue','orange']
      }
    },
    methods:{
      getRandomColor(){
        let resultColor =  this.colorList[Math.floor((Math.random()*this.colorList.length))]
        return  resultColor
      }
    }
  }
</script>

<style lang="scss" scoped>
 .center {
   width: 100%;
   border: 1px solid rgba(100,100,100,0.3);
   border-radius: 10px;
   .about{
     line-height: 28px;
     border-bottom: 2px solid #e3d4a4;
     p {
       font-weight: 600;
     }
   }
   .ivu-tag{
     margin:2px 10px 2px 4px;
     padding-left: 10px;
   }
 }
</style>
