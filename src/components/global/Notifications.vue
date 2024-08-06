<template>
  <div class="notification-box">
    <div class="notify">
      <img src="./../../imgs/person01.jpg" alt="" />
      <div class="notify-content">
        <div class="title"><span>New message</span> from Laur</div>
        <div class="date">
          <font-awesome-icon icon="fa-solid fa-clock" /><span
            >13 minutes ago</span
          >
        </div>
      </div>
    </div>
    <div class="notify">
      <img src="./../../imgs/person03.jpg" alt="" />
      <div class="notify-content">
        <div class="title"><span>New message</span> from Omar</div>
        <div class="date">
          <font-awesome-icon icon="fa-solid fa-clock" /><span>1 day</span>
        </div>
      </div>
    </div>
    <div class="notify">
      <img
        src="https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-jira.cb154bf2.svg"
        alt=""
      />
      <div class="notify-content">
        <div class="title">Payment successfully complete</div>
        <div class="date">
          <font-awesome-icon icon="fa-solid fa-clock" /><span>2 days</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification-box {
  z-index: 1000;
  background-color: var(--setting-background);
  position: absolute;
  width: 300px;
  // height: 200px;
  right: -25px;
  top: 40px;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  .notify {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    img {
      width: 25px;
      border-radius: 50%;
    }
    .notify-content {
      .title {
        color: var(--text-main-color);
        font-size: 15px;
        span {
          font-weight: bold;
        }
      }
      .date {
        display: flex;
        align-items: center;
        gap: 8px;
        opacity: 0.6;
        font-size: 14px;
        svg {
          margin: 0;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
