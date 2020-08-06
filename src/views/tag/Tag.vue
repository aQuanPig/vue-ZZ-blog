<template>
  <div class="tag">
    <back-ground class="background"/>
    <div class="content">
      <h1 class="hotArticle">标签</h1>
      <div class="mt-3 mb-3">
<!--        <Tag class="tab-item"  v-for="item in tagList" :key="item._id" @click.native="tagClick(item)" :color="getRandomColor(colorList)">{{item.name}}</Tag>-->
<!--        <div v-for="item in tagList" :key="item._id">{{item.name}}</div>-->
        <Tag>标签一</Tag>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCategoriesData} from 'network/categories'
  import BackGround from 'components/common/BackGround/BackGround'
  export default {
    name: "Tag",
    components:{BackGround},
    data(){
      return{
        colorList:['magenta','red','volcano','lime','cyan','purple','geekblue','orange'],
        tagList:[]
      }
    },
    methods:{
      async getTags(){
        const result =await getCategoriesData()
        this.tagList = result.data
      },
      tagClick(){

      },
      getRandomColor(list){
        let resultColor =  list[Math.floor((Math.random()*list.length))]
        return resultColor
      },
    },
    mounted() {
      this.getTags()
    }
  }
</script>

<style lang="scss" scoped>
  .tag {
    position: relative;
    height: 100vh;
  }
  .background{
    height: 40vh;
  }
  .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content:center;
    align-items: center;
    width: 1000px;
    height: 300px;
    background-color: pink;
  }
</style>
