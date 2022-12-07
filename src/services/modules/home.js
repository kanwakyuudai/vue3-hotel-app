import hyRequest from '../request'

export function getHotSuggests() {
  return hyRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategories() {
  return hyRequest.get({
    url: "/home/categories"
  })
}
