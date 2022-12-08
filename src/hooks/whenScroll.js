import { ref } from "vue"
import { onActivated, onDeactivated, onMounted, onUnmounted } from "vue"

export default function whenScrollToBottom() {
  let isReachBottom = ref(false)

  const scorllHandler = () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    if (clientHeight + scrollTop >= scrollHeight - 1) {
      isReachBottom.value = true
    }
  }
  onMounted(() => {
    window.addEventListener('scroll', scorllHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scorllHandler)
  })

  return { isReachBottom }
}
