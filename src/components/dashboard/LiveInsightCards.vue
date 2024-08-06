<template>
  <div class="live-card">
    <div class="live-board">
      <CanvasJSChart id="chartContainer" :options="liveChart" />
    </div>
    <div class="content">
      <h4>{{ liveTitle }}</h4>
      <p>
        <span>{{ livePercentage }}</span>
        {{ liveStatus }}
      </p>
      <div class="time">
        <font-awesome-icon icon="fa-regular fa-clock" />
        <span>{{ liveDate }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps([
  "liveChart",
  "liveTitle",
  "livePercentage",
  "liveStatus",
  "liveDate",
]);
</script>

<style scoped lang="scss">
.live-card {
  box-shadow: 0 5px 10px #ddd;
  border-radius: 6px;
  position: relative;
  background-color: var(--setting-background);
  width: calc((100% / 3) - 15px);
  min-width: 300px;
  padding: 20px;
  margin-top: 60px;
  flex: 1;
  .live-board {
    // position: absolute;
    // top: 0;
    #chartContainer {
      width: calc(100% - 40px) !important;
      height: 250px !important;
      position: absolute;
      top: -30px;
      left: 20px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 10px #c2c2c2;
    }
  }
  .content {
    margin-top: 230px;
    h4 {
      font-size: 16px;
      color: var(--text-main-color);
      font-weight: bold;
    }
    p {
      color: var(--gray-color);
      font-size: 16px;
      span {
        font-size: 13px;
        font-weight: bold;
        color: var(--text-main-color);
      }
    }
    .time {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--gray-color);
      font-size: 14px;
    }
  }
}
</style>
