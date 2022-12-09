<template>
  <div class="loading" v-show="mainStore.isLoading" @click="hideLoading">
    <div class="background">
      <img src="@/assets/imgs/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore()

const hideLoading = () => {
  mainStore.isLoading = false
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .1);

  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    background: url(@/assets/imgs/home/loading-bg.png) 0 0 / 100% 100%;

    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
