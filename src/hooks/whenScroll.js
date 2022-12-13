import { ref } from "vue"
import { onActivated, onDeactivated, onMounted, onUnmounted } from "vue"
import { throttle } from 'underscore'

export default function useScroll(elRef) {
  // 如果不传入元素，默认是 window
  let el = window
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scorllHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 1) {
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scorllHandler)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', scorllHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
