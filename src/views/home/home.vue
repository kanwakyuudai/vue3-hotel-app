<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <home-content></home-content>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar></search-bar>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import HomeNavBar from './subs/home-nav-bar.vue';
import HomeSearchBox from './subs/home-search-box.vue';
import HomeCategories from './subs/home-categories.vue';
import HomeContent from './subs/home-content.vue';
import SearchBar from '@/components/search-bar/search-bar.vue';
import useHomeStore from '@/stores/modules/home';
import useScroll from '@/hooks/whenScroll'

const homeStore = useHomeStore()
const { isReachBottom, clientHeight, scrollTop, scrollHeight } = useScroll()

watch(isReachBottom, (newValue) => {
  if (newValue) {
    // 此处调用返回 Promise 因此可以调用 then 确保拿到新数据后在将是否达到底部设置为伪
    homeStore.fetchHouselistsData().then(() => {
      isReachBottom.value = false
    })
  }
})
// 下滑一会儿后响应式显示搜索条

// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })

// 使用计算属性重写上面的逻辑
// 定义一个新响应式变量，若依赖之前的响应式变量，应使用计算属性

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 350
})
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
