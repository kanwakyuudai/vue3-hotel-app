import hyRequest from '../request'

export function getCitiesList() {
  return hyRequest.get({
    url: "/city/all"
  })
}
