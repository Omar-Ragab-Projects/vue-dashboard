<template>
  <div class="sign-in-page">
    <img src="./../imgs/nature-bg-Photo02.jpg" alt="" />
    <div class="sign-in-head">
      <div class="logo">
        <RouterLink to="/">Admin Dashboard</RouterLink>
      </div>
      <div class="sign-in-nav">
        <RouterLink to="/">
          <font-awesome-icon icon="fa-solid fa-chart-pie" />
          Dashboard
        </RouterLink>
        <RouterLink to="/profile">
          <font-awesome-icon icon="fa-solid fa-user" />
          Profile
        </RouterLink>
        <RouterLink to="/signup">
          <font-awesome-icon icon="fa-solid fa-circle-user" />
          Sign Up
        </RouterLink>
      </div>
    </div>
    <div class="sign-in-card">
      <div class="card-head">
        <h4>Sign In</h4>
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-facebook" />
          <font-awesome-icon icon="fa-brands fa-github" />
          <font-awesome-icon icon="fa-brands fa-google" />
        </div>
      </div>
      <form action="" class="card-body">
        <input type="email" name="mail" placeholder="Email" />
        <input type="password" name="pass" placeholder="Password" />
        <div class="remember-me">
          <UnCheckedSwitch text="Remember me" />
        </div>
        <input type="submit" name="signin" value="SIGN IN" @click.prevent />
      </form>
      <div class="card-footer">
        Don't have an account?
        <RouterLink to="signup">Sign Up</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import UnCheckedSwitch from "@/components/helpers/UnCheckedSwitch.vue";
</script>

<style lang="scss" scoped>
.sign-in-page {
  position: relative;
  padding: 30px 100px;
  width: 100%;
  height: 100vh;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(0 0 0 / 40%);
    z-index: 1;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
  .sign-in-head {
    position: relative;
    color: rgba(255, 255, 255, 0.8);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 20px;
      position: absolute;
      left: 30px;
      width: calc(100% - 60px);
    }
    .logo {
      a {
        text-decoration: none;
        color: white;
        font-size: 18px;
      }
    }
  }
  .sign-in-nav {
    display: flex;
    align-items: center;
    gap: 20px;
    svg {
      margin-right: 3px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .sign-in-card {
    position: relative;
    z-index: 2;
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    width: 400px;
    margin: auto;
    margin-top: 80px;
    height: 500px;
    @media (max-width: 767px) {
      width: 100%;
      height: fit-content;
      margin-top: 10px;
      position: absolute;
      left: 30px;
      width: calc(100% - 60px);
      margin-top: 120px;
    }
    .card-head {
      position: absolute;
      background-color: var(--green-color);
      color: white;
      width: calc(100% - 40px);
      left: 20px;
      top: -30px;
      height: 150px;
      border-radius: 10px;
      box-shadow: 0 15px 15px -10px #ddd;
      padding: 30px;
      text-align: center;
      @media (max-width: 767px) {
        top: 0;
        left: 0;
        width: 100%;
        height: fit-content;
        border-radius: 10px 10px 0 0;
      }
      h4 {
        font-size: 26px;
      }
      .social {
        display: flex;
        align-items: center;
        gap: 20px;
        color: white;
        margin: auto;
        width: fit-content;
        margin-top: 30px;
        font-size: 18px;
        svg {
          cursor: pointer;
        }
      }
    }
    form.card-body {
      margin-top: 120px;
      input {
        width: 100%;
        padding: 8px 10px;
        margin-top: 20px;
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        &:focus {
          outline: none;
        }
      }
      .remember-me {
        margin-top: 20px;
        color: var(--gray-color);
        .form-switch {
          margin: 0;
        }
      }
      input[type="submit"] {
        background-color: var(--green-color);
        color: white;
        font-size: 13px;
        font-weight: bold;
        border: none;
        padding: 10px;
        margin: 35px 0;
      }
    }
    .card-footer {
      text-align: center;
      color: var(--gray-color);
      a {
        color: var(--green-color);
        font-weight: bold;
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
}
</style>
