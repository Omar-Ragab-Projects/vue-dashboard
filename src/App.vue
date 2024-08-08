<template>
  <div class="app" :dir="direction" :lang="language">
    <transition name="slide-fade">
      <div class="header" v-if="navVisible">
        <div class="logo">Vue Dashboard</div>

        <nav>
          <RouterLink to="/" class="active">
            <font-awesome-icon
              icon="fa-solid fa-bars-progress"
            />Dashboard</RouterLink
          >
          <RouterLink to="/tables"
            ><font-awesome-icon icon="fa-solid fa-calendar" />Tables</RouterLink
          >
          <RouterLink to="/billing"
            ><font-awesome-icon icon="fa-solid fa-receipt" />Billing</RouterLink
          >
          <RouterLink to="/" @click="rtlFun"
            ><font-awesome-icon icon="fa-solid fa-right-left" />{{
              currentLanguage
            }}</RouterLink
          >
          <RouterLink to="/notifications"
            ><font-awesome-icon
              icon="fa-solid fa-bell"
            />Notifications</RouterLink
          >
          <span class="account">ACCOUNT PAGES</span>
          <RouterLink to="/profile"
            ><font-awesome-icon icon="fa-solid fa-user" />Profile</RouterLink
          >
          <RouterLink to="/signin"
            ><font-awesome-icon
              icon="fa-solid fa-right-to-bracket"
            />SignIn</RouterLink
          >
          <RouterLink @click="active" to="/signup"
            ><font-awesome-icon
              icon="fa-solid fa-rectangle-list"
            />SignUp</RouterLink
          >
        </nav>
      </div></transition
    >
    <div class="router-view">
      <PageViewHead />

      <RouterView />

      <div class="footer">
        &copy; 2024, made with ❤ by <span>Omar Ragab</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { navVisible } from "./sharedState";
import { ref } from "vue";

const direction = ref("ltr");
const language = ref("en");
const currentLanguage = ref("Arabic");
function rtlFun() {
  direction.value == "ltr"
    ? (direction.value = "rtl")
    : (direction.value = "ltr");
  language.value == "en" ? (language.value = "ar") : (language.value = "en");
  currentLanguage.value == "Arabic"
    ? (currentLanguage.value = "English")
    : (currentLanguage.value = "Arabic");
}

function active(e) {
  console.log(e.target);
}
</script>

<style scoped lang="scss">
.app {
  display: flex;
  position: relative;
  height: 100vh;
  align-items: center;
  padding: 0 20px;
  .header {
    z-index: 2;
    background-color: var(--nav-background);
    // position: absolute;
    z-index: 1;
    min-width: 300px;
    height: calc(100% - 40px);
    color: var(--nav-text);
    padding: 20px;
    border-radius: 20px;
    @media (max-width: 1432px) {
      position: fixed;
      z-index: 2;
    }
    @media (max-width: 767px) {
      min-width: 40%;
    }
    .logo {
      text-align: center;
      padding: 0 20px 20px;
      border-bottom: 1px solid #ffffff40;
      margin-bottom: 20px;
    }
    nav {
      display: flex;
      flex-direction: column;
      gap: 5px;
      span.account {
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        padding: 15px 20px;
      }
      a {
        text-decoration: none;
        color: inherit;
        padding: 15px 20px;
        border-radius: 10px;
        transition: 0.1s;
        display: flex;
        align-items: center;
        gap: 10px;
        &.router-link-exact-active:not(:nth-child(4)) {
          background-color: var(--main-color) !important;
          color: white;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
  .router-view {
    padding: 20px 30px;
    width: 100%;
    height: 100%;
    @media (max-width: 767px) {
      padding: 20px 10px;
    }
  }
  .footer {
    margin-top: 30px;
    padding-bottom: 20px;
    color: var(--gray-color);
    // Hide Till Finish
    // display: none;
    span {
      font-weight: bold;
    }
  }
}
</style>
