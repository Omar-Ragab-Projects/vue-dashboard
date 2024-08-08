<template>
  <div class="sign-up-page">
    <img src="./../imgs/nature-bg03.jpg" alt="" />
    <div class="sign-up-head">
      <div class="logo">
        <RouterLink to="/">Admin Dashboard</RouterLink>
      </div>
      <div class="sign-up-nav">
        <RouterLink to="/">
          <font-awesome-icon icon="fa-solid fa-chart-pie" />
          Dashboard
        </RouterLink>
        <RouterLink to="/profile">
          <font-awesome-icon icon="fa-solid fa-user" />
          Profile
        </RouterLink>
        <RouterLink to="/signin">
          <font-awesome-icon icon="fa-solid fa-key" />
          Sign In
        </RouterLink>
      </div>
    </div>
    <div class="sign-up-card">
      <div class="card-head">
        <h4>Sign Up</h4>
        <p>Enter your information to register</p>
      </div>
      <form action="" class="card-body">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="mail" placeholder="Email" />
        <input type="password" name="pass" placeholder="Password" />
        <div class="remember-me">
          <CheckedSwitch text="I agree the Terms and Conditions" />
        </div>
        <input type="submit" name="signin" value="SIGN UP" @click.prevent />
      </form>
      <div class="card-footer">
        Already have an account?
        <RouterLink to="signin">Sign In</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckedSwitch from "@/components/helpers/CheckedSwitch.vue";
import UnCheckedSwitch from "@/components/helpers/UnCheckedSwitch.vue";
</script>

<style lang="scss" scoped>
.sign-up-page {
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
  .sign-up-head {
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
  .sign-up-nav {
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
  .sign-up-card {
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
      margin-top: 95px;
    }
    .card-head {
      color: var(--text-main-color);
      h4 {
        font-size: 26px;
      }
      p {
        color: var(--gray-color);
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
    form.card-body {
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
        margin: 30px 0 20px;
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
