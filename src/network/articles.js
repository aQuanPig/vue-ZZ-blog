import {request} from "./index";
// 获取全部文章
export function getArticles(page,size) {
  return request({
    url:'/articles',
    params: { page, size }
  })
}
//获取文章的长度
export function getArticlesLength() {
  return request({
    url:'/articles/total'
  })
}
// 获取最近的五篇文章
export function getNewArticles() {
  return request({
    url:'/new_articles'
  })
}
//获取文章详情信息
export function getArticlesDetail(id) {
  return request({
    url:`/articles/detail/${id}`
  })
}
// 获取某些分类的文章
export function getCategoryArticles(id) {
  return request({
    url:`/category/${id}`
  })
}

//按照关键字查询文章
export function getKeySearch(text) {
  return request({
    url:`/articles/keyword/${text}`
  })
}
