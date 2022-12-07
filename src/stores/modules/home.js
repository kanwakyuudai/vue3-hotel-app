import { defineStore } from 'pinia'
import { getHotSuggests } from '@/services';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore
