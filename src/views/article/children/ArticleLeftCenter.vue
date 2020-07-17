<template>
  <div>
    <div class="display-flex">
      <input v-model="search" type="text" class="inputItem iconfont icon-sousuo" placeholder="搜索你喜欢的文章...">
      <span class="iconfont icon-sousuo search" @click="searchClick"></span>
    </div>
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
  import {getCategoryArticles,getKeySearch} from 'network/articles'
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
      searchClick(){
        getKeySearch(this.search).then(res=>{
          this.$Message.success({
            content:'查询文章成功'
          })
          this.$bus.$emit('getKeyWordArticles',res.data)
          this.search = ''
        })
      }
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
  .inputItem{
    width: 100%;
    height: 30px;
    padding-left: 5px;
    border: 1px solid rgba(100,100,100,0.3);
    color: #666666;
    font-size: 14px;
    &:focus{
      border: 1px solid #6abe83;
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
