import { defineStore } from 'pinia'
import { getCitiesList } from '@/services';

const useCityStore = defineStore('city', {
  state: () => ({
    // 所有城市的数据
    allCities: {},
    // 用户选择的城市，并赋初始城市
    currentCity: {cityName: '中国'}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCitiesList()
      this.allCities = res.data
    }
  }
})

export default useCityStore
