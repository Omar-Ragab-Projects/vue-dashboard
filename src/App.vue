<template>
  <div class="app">
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
          <RouterLink to="/rtl"
            ><font-awesome-icon icon="fa-solid fa-right-left" />Rtl</RouterLink
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
      position: absolute;
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
        &.router-link-exact-active,
        &.router-link-active {
          background-color: var(--main-color) !important;
          color: white;
        }
        svg {
          margin-right: 10px;
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
    display: none;
    span {
      font-weight: bold;
    }
  }
}
</style>
