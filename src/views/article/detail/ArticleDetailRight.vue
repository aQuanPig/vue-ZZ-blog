<template>
  <div v-html="detail" class="detail-body" v-highlight :style="{h2:border}"></div>
</template>

<script>
  import {GET_ELEMENTTOP} from 'store/mutation-types'
  export default {
    name: "ArticleDetailRight",
    props:{
      detail:{type:String,default:''}
    },
    data(){
      return{
        topListAndText:[],
        border:'border-bottom:2px solid pink'
      }
    },
    // updated用法：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
    updated(){
      const h3 =  document.getElementsByTagName('h3')
      for(let i of h3){
        this.topListAndText.push({text:i.innerText,top:i.offsetTop})
      }
      this.$store.commit(GET_ELEMENTTOP,this.topListAndText)
    }
  }
</script>

<style lang="scss">
  .detail-body{
    flex: 1;
    padding: 20px;
    border-top: 1.45px dashed #D87575;
    border-left: 1.45px dashed #90ee90;
    border-right: 1.45px dashed #FFCB18;
    border-bottom: 1.45px dashed #FF5A09;
    h3 {
      border-bottom: 2px solid #bd8791;
      color: #a696c8;
      padding-bottom: 2px;
      margin: 10px 0;
      font-size: 18px;
    }
  }
</style>
