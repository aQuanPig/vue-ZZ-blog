<template>
  <div class="left mr-3" ref="detailLeft">
    <p class="font-s">目录</p>
    <div v-for="(item,index) in $store.state.elTopAndText" :key="item.index" class="p-2 leftItem">
      <p :class="{active:currentIndex===index}" class="font-s text" @click="scrollToPosition(item.top,index)">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleDetailLeft",
    methods:{
      scrollToPosition(top,index){
        this.currentIndex = index
        window.scrollTo({top:top,behavior: "smooth"})
      }
    },
    data(){
      return{
        currentIndex:0
      }
    }

  }
</script>

<style lang="scss" scoped>
 .left{
   width: 20%;
   overflow: hidden;
   border-radius: 5px;
   .text {
    cursor: pointer;
   }
   .active{
     color: #2E94B9;
     font-weight: 600;
   }
 }
</style>
