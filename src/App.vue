<script setup>
import { useRoute } from 'vue-router';
import tabBar from './components/tab-bar/tab-bar.vue';

// 取得当前活动路由，动态展示底栏与否
const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabbar"></tab-bar>
  </div>
</template>

<style scoped>
</style>
