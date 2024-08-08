<template>
  <div class="profile-nav">
    <span :class="['animated', currentActive]"></span>
    <div class="nav">
      <span @click="activeOne">
        <font-awesome-icon icon="fa-solid fa-cube" />
        App
      </span>
      <span @click="activeTwo">
        <font-awesome-icon icon="fa-solid fa-inbox" />
        Messages
      </span>
      <span @click="activeThree">
        <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" />
        Settings
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const currentActive = ref("");
function activeOne() {
  currentActive.value = "app";
}
function activeTwo() {
  currentActive.value = "messages";
}
function activeThree() {
  currentActive.value = "settings";
}
</script>

<style lang="scss" scoped>
.profile-nav {
  position: relative;
  // background-color: #f7f9fa;
  width: fit-content;
  padding: 4px;
  border-radius: 10px;
  height: 42.5px;

  span.animated,
  span.app {
    box-shadow: 0 0 10px #dedede;
    position: absolute;
    width: 68px;
    transform: translateX(-3px);

    height: 36.5px;
    border-radius: 10px;
    top: 3px;
    background-color: white;
    border: 1px solid #dddddd9c;
    transition: 0.5s;
    &.messages {
      width: 109px;
      transform: translateX(62px);
    }
    &.settings {
      width: 95px;
      transform: translateX(169px);
    }
  }
  div.nav {
    span {
      color: var(--text-main-color);
      padding: 6px 8px;
      font-size: 16px;
      cursor: pointer;
      z-index: 1;
    }
  }
}
</style>
