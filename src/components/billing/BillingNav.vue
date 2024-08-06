<template>
  <div class="billing-nav">
    <span :class="['animated', currentActive]"></span>
    <div class="nav">
      <span @click="activeOne">Messages</span>
      <span @click="activeTwo">Social</span>
      <span @click="activeThree">Notifications</span>
      <span @click="activeFour">Backup</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const currentActive = ref("");
function activeOne() {
  currentActive.value = "messages";
}
function activeTwo() {
  currentActive.value = "social";
}
function activeThree() {
  currentActive.value = "notifications";
}
function activeFour() {
  currentActive.value = "backup";
}
</script>

<style lang="scss" scoped>
.billing-nav {
  position: relative;
  background-color: #f7f9fa;
  width: fit-content;
  padding: 4px;
  border-radius: 10px;
  height: 42.5px;
  span.animated,
  span.messages {
    position: absolute;
    width: 80px;
    height: 36.5px;
    border-radius: 10px;
    top: 3px;
    background-color: white;
    border: 1px solid #dddddd9c;
    transition: 0.5s;
    &.social {
      width: 59px;
      transform: translateX(78px);
    }
    &.notifications {
      width: 103px;
      transform: translateX(134px);
    }
    &.backup {
      width: 63px;
      transform: translateX(236px);
    }
  }
  div.nav {
    span {
      color: var(--text-main-color);
      padding: 6px 8px;
      font-size: 15px;
      cursor: pointer;
      z-index: 1;
    }
  }
}
</style>
