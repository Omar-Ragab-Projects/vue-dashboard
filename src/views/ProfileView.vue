<template>
  <div class="background-img">
    <img src="./../imgs/nature-bg-Photo.jpg" alt="" />
  </div>
  <div class="profile-box card-background-style">
    <div class="profile-head">
      <div class="user-information">
        <img src="./../imgs/user-photo.jpg" alt="user-photo" />
        <div class="name-position">
          <div class="name">Omar Ragab</div>
          <div class="position">Frontend Developer</div>
        </div>
      </div>
      <div class="profile-tabs">
        <ProfileNav />
      </div>
    </div>
    <ProfileBody />
    <ProfileProjects />
  </div>
</template>

<script setup>
import ProfileNav from "@/components/profile/ProfileNav.vue";
import ProfileBody from "@/components/profile/ProfileBody.vue";
import ProfileProjects from "@/components/profile/ProfileProjects.vue";
</script>

<style lang="scss" scoped>
.background-img {
  position: absolute;
  z-index: -1;
  top: 20px;
  right: 20px;
  width: calc(100% - 360px);
  overflow: hidden;
  @media (max-width: 1432px) {
    width: calc(100% - 40px);
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 90 4 / 50%);
    border-radius: 20px;
  }
  img {
    width: 100%;
    height: 350px;
    border-radius: 20px;
  }
}
.profile-box {
  min-height: 100vh;
  box-shadow: none;
  position: relative;
  margin-bottom: 200px;
  left: 10px;
  top: 170px;
  width: calc(100%);
  @media (max-width: 1432px) {
    width: calc(100%);
    left: 0px;
  }
  @media (max-width: 767px) {
    top: 120px;
  }
  .profile-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 20px;
    }
    .user-information {
      display: flex;
      align-items: center;
      img {
        width: 80px;
        border-radius: 12px;
        margin-right: 20px;
      }
      .name-position {
        .name {
          font-weight: bold;
          columns: #344767;
          font-size: 20px;
        }
        .position {
          color: var(--gray-color);
        }
      }
    }
  }
}
</style>
