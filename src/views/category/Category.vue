<template>
  <div class="category">
    <back-ground class="background"/>
    <div class="content">
      <h1 class="title">文章分类</h1>
      <div class="tag display-flex jc-center">
        <div class="tag-item"  v-for="item in categories" :key="item._id">
          <span :style="{background:getRandomColor(colorList)}" class="category-name">{{item.name}}</span>
          <span class="number">{{item.children.length}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BackGround from 'components/common/BackGround/BackGround'
  import {getCategoriesData} from "network/categories"
  export default {
    name: "Category",
    components:{BackGround},
    data(){
      return {
        categories:[],
        colorList:['#9c88ff','#1abc9c','#4cd137','#00a8ff','#eccc68','#ff6b81','#70a1ff','#D980FA']
      }
    },
    methods:{
      getRandomColor(list){
        let resultColor =  list[Math.floor((Math.random()*list.length))]
        return resultColor
      }
    },
    mounted() {
      getCategoriesData().then(res=>{
        this.categories = res.data
      })
      this.getRandomColor(this.colorList)
    }
  }
</script>

<style lang="scss" scoped>
  .category{
    position: relative;
    height: 100vh;
  }
  .background{
    height: 40vh;
  }
  .content{
    position: absolute;
    top: 40%;
    left: 50%;
    width: 80vw;
    height: 200px;
    transform: translate(-50%,-50%);
    text-align: center;
    background-color: #fffdef;
  }
  .title{
    margin-top: 50px;
    font-weight: 400;
    font-size: 32px;
    display:inline-block;
    color: #000000;
    line-height: 1;
    &::after{
      content:"";
      display: inline-block;
      width: 46%;
      height: 2px;
      background-color: #e74c3c;
      position: relative;
      top: 3px;
    }
  }
  .tag{
    margin-top: 30px;
    .tag-item{
      position: relative;
      .category-name{
        cursor: pointer;
        padding: 10px 20px;
        font-size: 16px;
        color: #fffdef;
        font-weight: 600;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 5px 5px 4px #888888;
      }
      .number{
        position: absolute;
        top: 2px;
        font-size: 10px;
        right: 23px;
        color: #906e74;
      }
    }
  }
</style>
