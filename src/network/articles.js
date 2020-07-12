import {request} from "./index";
export function getArticles(page,size) {
  return request({
    url:'/articles',
    params: { page, size }
  })
}
export function getNewArticles() {
  return request({
    url:'/new_articles'
  })
}
export function getArticlesDetail(id) {
  return request({
    url:`/articles/${id}`
  })
}
