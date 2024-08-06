<template>
  <div class="card">
    <div class="icon" :style="cardColor">
      <font-awesome-icon :icon="cardIcon" />
    </div>
    <div class="title">{{ cardTitle }}</div>
    <div class="insights">{{ cardInsights }}</div>
    <div class="percentage">
      <span>{{ cardPercentage }}</span> {{ cardDate }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps([
  "cardColor",
  "cardIcon",
  "cardTitle",
  "cardTitle",
  "cardInsights",
  "cardPercentage",
  "cardDate",
]);
</script>

<style scoped lang="scss">
.card {
  // width: 50%;
  text-align: right;
  border: none;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  // width: calc(25% - 15px);
  min-width: 180px;
  flex: 1;
  .icon {
    position: absolute;
    background-color: var(--dark-color);
    padding: 15px 20px;
    border-radius: 12px;
    box-shadow: 0 5px 10px #c2c2c2;
    top: -10px;
    left: 10px;
    svg {
      color: white;
    }
  }
  .title {
    color: var(--gray-color);
    font-size: 14px;
    padding-right: 10px;
    padding-top: 10px;
  }
  .insights {
    font-weight: bold;
    font-size: 24px;
    color: var(--text-main-color);
    padding-right: 10px;
  }
  .percentage {
    padding: 15px 10px 15px 0;
    margin-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    span {
      color: var(--green-color);
      font-weight: bold;
    }
  }
}
.card.minus .percentage span {
  color: var(--red-color);
}
</style>
