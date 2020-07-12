import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Article = ()=>import("views/article/Article")
const ArticleDeatil = ()=>import("../views/article/detail/ArticleDeatil")
const Login = ()=> import('components/common/Login')
const Register = ()=> import('components/common/Register')

  const routes = [
    {path:'/',redirect:'/articles'},
    {path:'/login',component:Login,meta:{keepAlive:false}},
    {path:'/register',component:Register,meta:{keepAlive:false}},
    {path:'/articles',component:Article,meta:{keepAlive:true}},
    {path:'/articles/:id',component:ArticleDeatil,props:true,meta:{keepAlive:true}}
  ]

const router = new VueRouter({
  routes
})

export default router
