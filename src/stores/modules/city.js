import { defineStore } from 'pinia'
import { getCitiesList } from '@/services';

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCitiesList()
      this.allCities = res.data
    }
  }
})

export default useCityStore
