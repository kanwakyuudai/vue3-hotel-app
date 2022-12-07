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

export function getHouselists(page = 1) {
  return hyRequest.get({
    url: "/home/houselist",
    params: {
      page: page
    }
  })
}
