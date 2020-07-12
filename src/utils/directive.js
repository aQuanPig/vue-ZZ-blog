import Vue from 'vue'
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/vs2015.css' //样式文件
//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  // for(let i of el.getElementsByTagName('h2')){
  //   console.dir(i.style)
  // }
  let highlight = el.querySelectorAll('pre');
  setTimeout(() =>{
    highlight.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  }, 0)
})
