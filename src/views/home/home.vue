<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from './subs/home-nav-bar.vue';
</script>

<style lang="scss" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
