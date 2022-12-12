<template>
  <div class="notice-area">
    <DetailSection title="预订须知">
      <div class="notice">
        <template v-for="(item, index) in mustKnow" :key="index">
          <div class="item">
            <span class="title">{{item.title}}</span>
            <span class="intro">{{item.introduction}}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  mustKnow: {
    type: Array,
    default: () => ([])
  }
  })
</script>

<style lang="scss" scoped>
.notice {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;

    .title {
      width: 64px;
      color: #666;
    }

    .intro {
      flex: 1;
      color: #333;
    }
  }
}
</style>
