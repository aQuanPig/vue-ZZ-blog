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

   <div class="radio">
     <h1 class="category-radar">文章分类雷达</h1>
     <div id="leiDaTu" class="echart" style="width: 600px; height: 312px;left: 278px;top: 20px;" />
   </div>
  </div>
</template>

<script>
  import ECharts from 'echarts'
  import  'echarts/theme/macarons.js'
  import "echarts/lib/chart/radar";
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
      },
      drawRadio(){
        let name = this.categories.map(item =>({text:item.name,'max':5}))
        let value = this.categories.map(item => item.children.length)
        console.log(name,value)
        let charts = ECharts.init(document.getElementById('leiDaTu'),'macarons')

        let option = {
          tooltip: {
            trigger: 'axis'
          },
          radar: [
            {
              indicator: name,
              radius: 120,
              name: {
                textStyle: {
                  color: '#333',
                  fontSize:15
                }
              },
            }
          ],
          series: [
            {
              type: 'radar',
              tooltip: {
                trigger: 'item'
              },
              areaStyle: {
                // color:"pink"
              },
              data: [
                {
                  value: value,
                  name: '文章分类数量'
                }
              ]
            }
          ]
        };

        charts.setOption(option);
      }
    },
    mounted() {
      getCategoriesData().then(res=>{
        this.categories = res.data
        this.drawRadio()
      })
      this.getRandomColor(this.colorList)
    }
  }
</script>

<style lang="scss" scoped>
  .category{
    position: relative;
    height: 1000px;
    background: url("../../assets/img/11.jpg") no-repeat;
    background-size: cover;
  }
  .background{
    height: 40vh;
    /*position: absolute;*/

  }
  .content{
    border-radius: 10px;
    position: absolute;
    top: 24%;
    left: 50%;
    width: 1200px;
    transform: translate(-50%,-50%);
    height: 240px;
    text-align: center;
    background-color: #fffdef;
    .title{
      margin-top: 50px;
      font-weight: 400;
      font-size: 32px;
      display:inline-block;
      color: #000000;
      line-height: 1;
      background-color: #fffdef;
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
  }

  .radio{
    border-radius: 10px;
    position: absolute;
    top: 62%;
    left: 50%;
    width: 1200px;
    height: 470px;
    transform: translate(-50%,-50%);
    text-align: center;
    background-color: #fffdef;
    .category-radar{
      margin-top: 50px;
      font-weight: 400;
      font-size: 32px;
      display:inline-block;
      color: #000000;
      line-height: 1;
    }
  }

</style>
