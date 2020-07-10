import {request} from "./index";
export function getArticles(page,size) {
  return request({
    url:'/articles',
    params: { page, size }
  })
}
