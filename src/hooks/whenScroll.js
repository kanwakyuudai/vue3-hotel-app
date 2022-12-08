import { ref } from "vue"
import { onActivated, onDeactivated, onMounted, onUnmounted } from "vue"
import { throttle } from 'underscore'

export default function useScroll() {
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scorllHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 1) {
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    window.addEventListener('scroll', scorllHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scorllHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
