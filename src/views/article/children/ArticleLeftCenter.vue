<template>
  <div>

    <div class="center mt-3">
      <div class="about pl-3 display-flex ai-center">
        <span class="iconfont icon-biaoqian pr-1"></span>
        <p class="font-weight font-title">文章标签</p>
      </div>
      <div class="mt-3 mb-3">
        <Tag class="tab-item"  v-for="item in categories" :key="item._id" @click.native="tagClick(item)" :color="getRandomColor(colorList)">{{item.name}}</Tag>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCategoryArticles} from 'network/articles'
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
        colorList:['magenta','red','volcano','lime','cyan','purple','geekblue','orange'],
        search:''
      }
    },
    methods:{
      getRandomColor(list){
        let resultColor =  list[Math.floor((Math.random()*list.length))]
        return  resultColor
      },
      tagClick(item){
        const {_id} = item
        getCategoryArticles(_id).then(res=>{console.log(res)
          res.data.total && this.$bus.$emit('getCategoryArticles',res.data)
        })
      },

    },
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
   .tab-item{
     cursor: pointer;
   }
   .ivu-tag{
     margin:6px 22px 2px 4px;
     padding-left: 10px;
   }
 }

  .search{
    display: inline-block;
    height: 30px;
    width: 40px;
    background-color: #6abe83;
    color: #fffdef;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
</style>
