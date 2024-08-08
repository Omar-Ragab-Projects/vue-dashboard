<template>
  <div class="profile-body-container">
    <div class="platform-settings">
      <h4 class="card-header-style">Platform Settings</h4>
      <div class="account">ACCOUNT</div>
      <div class="account-set">
        <CheckedSwitch text="Email me when someone follows me" />
        <UnCheckedSwitch text="Email me when someone answers on my post" />
        <CheckedSwitch text="Email me when someone mentions me" />
      </div>
      <div class="application">APPLICATION</div>
      <div class="application-set">
        <UnCheckedSwitch text="New launches and projects" />
        <CheckedSwitch text="Monthly product update" />
        <UnCheckedSwitch text="Subscribe to newsletter" />
      </div>
    </div>
    <div class="profile-information">
      <div class="profile-information-head">
        <h4 class="card-header-style">Profile Information</h4>
        <font-awesome-icon icon="fa-solid fa-user-pen" />
      </div>
      <p>
        Hi, I'm Omar Ragab. Believe in yourself and all that you are. Know that
        there is something inside you that is greater than any obstacle
      </p>
      <div class="name"><span>Full Name:</span> Omar M. Ragab</div>
      <div class="mobile"><span>Mobile:</span> +20 100 100 1000</div>
      <div class="mail"><span>Email:</span> tryragab@gmail.com</div>
      <div class="location"><span>Location:</span> EGY</div>
    </div>
    <div class="conversations">
      <h4 class="card-header-style">Conversations</h4>
      <div class="conversation" v-for="conversation in conversations">
        <img :src="conversation.photo" />
        <div class="conversation-info">
          <div class="name">{{ conversation.name }}</div>
          <div class="message">{{ conversation.message }}</div>
        </div>
        <span class="reply">REPLY</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CheckedSwitch from "./helpers/CheckedSwitch.vue";
import UnCheckedSwitch from "./helpers/UnCheckedSwitch.vue";
const conversations = ref([
  {
    photo: "./src/imgs/person01.jpg",
    name: "Aser Mustafa",
    message: "Hi! I need more information..",
  },
  {
    photo: "./src/imgs/person02.jpg",
    name: "Walid Ahmed",
    message: "Awesome work, can you..",
  },
  {
    photo: "./src/imgs/person03.jpg",
    name: "Mohamed Samy",
    message: "About files I can..",
  },
  {
    photo: "./src/imgs/person04.jpg",
    name: "Islam Ragab",
    message: "Have a great afternoon..",
  },
  {
    photo: "./src/imgs/person05.jpg",
    name: "Nader Ahmed",
    message: "Hi! I need more information..",
  },
]);
</script>

<style lang="scss" scoped>
.profile-body-container {
  display: flex;
  gap: 50px;
  margin-top: 50px;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    margin-top: 35px;
  }
  > div {
    flex: 1;
    min-width: 300px;
    // overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 30px;
    padding-left: 20px;
  }
  .platform-settings {
    border-right: 1px solid #eee;
    @media (max-width: 806px) {
      border-right: none;
    }
    h4 {
      font-size: 18px;
    }
    .account,
    .application {
      font-size: 14px;
      font-weight: bold;
      color: var(--text-main-color);
      opacity: 0.8;
      margin-bottom: 12px;
    }
    .account {
      margin-top: 20px;
    }
    .application {
      margin-top: 40px;
    }
    .form-check {
      margin-bottom: 12px;
      color: var(--paragraph-color);
    }
  }
  .profile-information {
    border-right: 1px solid #eee;
    @media (max-width: 1157px) {
      border-right: none;
    }
    .profile-information-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: 18px;
      }
      svg {
        cursor: pointer;
      }
    }
    > p {
      margin-top: 20px;
      color: var(--paragraph-color);
      line-height: 1.8;
    }
    > div.name {
      margin-top: 60px;
      @media (max-width: 767px) {
        margin-top: 40px;
      }
    }
    > div:not(:first-of-type) {
      color: var(--paragraph-color);
      margin-bottom: 20px;
      span {
        font-size: 16px;
        font-weight: bold;
        color: var(--text-main-color);
        margin-right: 5px;
      }
    }
  }
  .conversations {
    h4 {
      font-size: 18px;
      margin-bottom: 30px;
    }
    .conversation {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        width: 47px;
        border-radius: 8px;
        margin-right: 20px;
      }
      .conversation-info {
        width: 50%;
        .name {
          font-size: 16px;
          font-weight: bold;
          color: var(--text-main-color);
        }
        .message {
          color: var(--paragraph-color);
          font-size: 14px;
        }
      }
      .reply {
        margin-left: auto;
        color: #e81e61;
        font-weight: bold;
        cursor: pointer;
        font-size: 14px;
        opacity: 0.9;
      }
    }
  }
}
</style>
