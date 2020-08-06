import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// const Article = ()=>import("views/article/Article")
const ArticleDeatil = ()=>import("../views/article/detail/ArticleDeatil")
const MainLogin = () => import("../components/common/MainLogin")
const Register =()=>import("../components/common/register/Register");
const MessageBoard = ()=>import("../views/messageBoard/MessageBoard")
const Main = ()=>import("../views/main/Main")
const Category = ()=>import( "../views/category/Category");
  const routes = [
    {path:'/',component:Main},
    {path:'/login',component:MainLogin,meta:{keepAlive:true}},
    {path:'/register',component:Register,meta:{keepAlive:true}},
    // {path:'/main',component:Article},
    {path:"/tag",component:Category},
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
