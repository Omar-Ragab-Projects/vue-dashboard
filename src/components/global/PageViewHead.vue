<template>
  <div class="head" :class="$route.name == 'Profile' ? 'profile-page' : ''">
    <div class="page-title">
      <div class="path">
        <RouterLink to="/">Pages</RouterLink> / {{ $route.name }}
      </div>
      <div class="title">{{ $route.name }}</div>
    </div>
    <div class="setting">
      <input type="text" placeholder="Search here" />
      <div class="icons">
        <RouterLink to="/signin"
          ><font-awesome-icon icon="fa-solid fa-circle-user"
        /></RouterLink>
        <div class="nav-setting" @click="navVisible = !navVisible">
          <font-awesome-icon icon="fa-solid fa-bars-staggered" />
        </div>
        <div class="ui-setting">
          <font-awesome-icon
            @click="menuVisible = true"
            icon="fa-solid fa-gear"
          />
          <SettingUI />
        </div>
        <div class="notifications">
          <font-awesome-icon
            @click.stop="notifications"
            icon="fa-solid fa-bell"
          />
          <transition name="fade">
            <Notifications v-show="showNot" @click.stop />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import SettingUI from "./SettingUI.vue";
import { menuVisible } from "@/sharedState";
import Notifications from "./Notifications.vue";
import { navVisible } from "@/sharedState";

import { ref } from "vue";
const showNot = ref(false);
function notifications() {
  document.addEventListener("click", (e) => {
    if (e.target) {
      showNot.value = false;
    }
  });
  showNot.value = !showNot.value;
}
</script>

<style scoped lang="scss">
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: relative;
  // overflow: hidden;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
  .page-title {
    .path {
      color: var(--text-main-color);
      opacity: 0.7;
    }
    a {
      text-decoration: none;
      color: var(--text-main-color);
      &:hover {
        color: #e53935;
      }
    }
    .title {
      font-weight: bold;
      color: var(--text-main-color);
      opacity: 1;
    }
  }
  .setting {
    // width: 100%;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    gap: 20px;
    @media (max-width: 767px) {
      justify-content: space-between;
      width: 100%;
    }
    input {
      background-color: transparent;
      border: 1px solid #ddd;
      padding: 8px 12px;
      position: relative;
      border-radius: 6px;
      @media (max-width: 767px) {
        width: 120px;
      }
      &:focus {
        outline-color: var(--main-color);
      }
      &::placeholder {
        transition: 0.5s;
      }
      &:focus::placeholder {
        transform: translateY(-30px);
      }
    }
    .icons {
      display: flex;
      gap: 20px;

      .nav-setting {
        display: none;
        @media (max-width: 1432px) {
          display: block;
        }
      }
      svg {
        color: var(--gray-color);
        cursor: pointer;
      }
      .notifications {
        position: relative;
      }
    }
  }
}
.head.profile-page {
  margin-top: 10px;
  margin-left: 10px;
  .page-title {
    a {
      color: #ffffff;
    }
    .path {
      color: #ffffff;
      opacity: 0.7;
    }
    .title {
      color: #e9e9e9;
    }
  }
  .setting .icons svg {
    color: #e9e9e9;
  }
}
</style>
