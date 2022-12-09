import { defineStore } from 'pinia'

const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(today.getDate() + 1)

const useMainStore = defineStore('main', {
  state: () => ({
    today: today,
    tomorrow: tomorrow,
    isLoading: false
  })
})

export default useMainStore
