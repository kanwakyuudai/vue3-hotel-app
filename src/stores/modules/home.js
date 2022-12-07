import { defineStore } from 'pinia'
import { getHotSuggests, getCategories, getHouselists } from '@/services';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    page: 1,
    houselists: []
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHouselistsData() {
      const res = await getHouselists(this.page++)
      // 不能使用赋值语句，会替换而不是新增数据
      this.houselists.push(...res.data)
    },
  }
})

export default useHomeStore
