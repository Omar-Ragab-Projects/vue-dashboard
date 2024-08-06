<template>
  <transition name="fade">
    <div class="ui-setting" v-if="menuVisible">
      <font-awesome-icon
        @click="menuVisible = false"
        icon="fa-solid fa-xmark"
      />
      <div class="title">
        <h3>Material UI Configurator</h3>
        <p>See our dashboard options.</p>
      </div>
      <div class="side-colors">
        <h4>Sidebar Colors</h4>
        <div class="colors">
          <span @click="changeColor" data-color="#e3306e"></span>
          <span @click="changeColor" data-color="#262629"></span>
          <span @click="changeColor" data-color="#328ced"></span>
          <span @click="changeColor" data-color="#58b05c"></span>
          <span @click="changeColor" data-color="#fc9e19"></span>
          <span @click="changeColor" data-color="#eb4744"></span>
        </div>
      </div>
      <div class="side-type">
        <h4>Sidenav Type</h4>
        <p>Choose between 2 different sidenav types.</p>
        <div class="choose">
          <button @click="darkType" :class="{ active: active === 1 }">
            DARK
          </button>
          <button @click="transparentType" :class="{ active: active === 2 }">
            TRANSPARENT
          </button>
          <button @click="whiteType" :class="{ active: active === 3 }">
            WHITE
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { menuVisible } from "@/sharedState";
const active = ref(1);

function changeColor(e) {
  document.documentElement.style.setProperty(
    "--main-color",
    `${e.target.dataset.color}`
  );
}
function darkType() {
  active.value = 1;
  document.documentElement.style.setProperty("--nav-background", "#333338");
  document.documentElement.style.setProperty("--nav-text", "#FFF");
}
function transparentType() {
  active.value = 2;
  document.documentElement.style.setProperty("--nav-background", "transparent");
  document.documentElement.style.setProperty("--nav-text", "#334666");
}
function whiteType() {
  active.value = 3;
  document.documentElement.style.setProperty("--nav-background", "#FFF");
  document.documentElement.style.setProperty("--nav-text", "#334666");
}
</script>

<style scoped lang="scss">
.ui-setting {
  background-color: var(--setting-background);
  height: 100%;
  width: 350px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 25px 30px;
  transition: 0.3s;
  z-index: 1000;

  svg {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    z-index: 1;
  }
  .title {
    position: relative;
    margin-bottom: 50px;
    &::after {
      content: "";
      position: absolute;
      bottom: -25px;
      left: -30px;
      width: calc(100% + 60px);
      height: 1px;
      background-color: rgba(0, 0, 0, 0.05);
    }
    h3 {
      font-size: 20px;
      margin-top: 0;
      color: var(--text-main-color);
    }
    p {
      color: var(--gray-color);
    }
  }
  .side-colors {
    margin-bottom: 30px;
    h4 {
      color: var(--text-main-color);
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .colors {
      display: flex;
      gap: 10px;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #ddd;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.3);
          transform: scale(1.1);
        }
        &:first-child {
          background-color: #e3306e;
        }
        &:nth-child(2) {
          background-color: #262629;
        }
        &:nth-child(3) {
          background-color: #328ced;
        }
        &:nth-child(4) {
          background-color: #58b05c;
        }
        &:nth-child(5) {
          background-color: #fc9e19;
        }
        &:last-child {
          background-color: #eb4744;
        }
      }
    }
  }
  .side-type {
    h4 {
      font-size: 18px;
      color: var(--text-main-color);
      font-weight: bold;
    }
    p {
      color: var(--gray-color);
      font-size: 15px;
    }
    .choose {
      display: flex;
      gap: 10px;
      justify-content: center;
      button {
        background-color: transparent;
        border: 1px solid var(--text-main-color);
        padding: 12px 18px;
        font-size: 12px;
        font-weight: bold;
        color: var(--text-main-color);
        border-radius: 10px;
        transition: 0.3s;
        box-shadow: 0 5px 10px #0000002a;
        &.active {
          background-color: var(--black-color);
          color: var(--setting-background);
        }
      }
    }
  }
}
</style>
