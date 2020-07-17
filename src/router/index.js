import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Article = ()=>import("views/article/Article")
const ArticleDeatil = ()=>import("../views/article/detail/ArticleDeatil")
const Login = ()=> import('components/common/Login')
const Register = ()=> import('components/common/Register')
const MessageBoard = ()=>import("../views/messageBoard/MessageBoard")

  const routes = [
    {path:'/',redirect:'/articles'},
    {path:'/login',component:Login,meta:{keepAlive:true}},
    {path:'/register',component:Register,meta:{keepAlive:true}},
    {path:'/articles',component:Article},
    {path:'/articles/:id',component:ArticleDeatil,props:true},
    {path:'/messageboard',component:MessageBoard}
  ]
// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router
