import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Article = ()=>import("views/article/Article")

  const routes = [
    {path:'/',redirect:'/articles'},
    {path:'/articles',component:Article}
  ]

const router = new VueRouter({
  routes
})

export default router
