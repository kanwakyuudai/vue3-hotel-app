// 动态拼接 URL 来获取正确图片路径
export const getAssetsURL = (path) => {
  return new URL(`../assets/imgs/${path}`, import.meta.url).href
  // 第一个参数是相对路径，
  // 第二个参数是当前文件路径的 URL
}
