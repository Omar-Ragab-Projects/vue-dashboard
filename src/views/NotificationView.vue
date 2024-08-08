<template>
  <div class="notifications">
    <div class="alerts card-background-style">
      <h4 class="card-header-style">Alerts</h4>
      <div
        class="alert alert-primary fade show"
        role="alert"
        v-for="alert in alerts"
        :style="{ backgroundColor: alert.alertColor }"
      >
        <div class="content">
          A simple {{ alert.alertName }} alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if
          you like.
        </div>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <div class="toasts card-background-style">
      <h4 class="card-header-style">Notifications</h4>
      <div class="notification-btns">
        <button @click="activeOne" style="background-color: #55ad59">
          SUCCESS
        </button>
        <button @click="activeTwo" style="background-color: #2d87ed">
          INFO
        </button>
        <button @click="activeThree" style="background-color: #fc960f">
          WARNING
        </button>
        <button @click="activeFour" style="background-color: #eb4744">
          DANGER
        </button>
      </div>
      <div class="notification-popups" v-if="true" v-for="popup in popups">
        <Transition name="fade">
          <div
            class="popup"
            v-if="popup.show"
            :style="{ backgroundColor: popup.popupColor }"
          >
            <div class="popup-header">
              <font-awesome-icon :icon="popup.popupIcon" />
              <span class="title">Admin Dashboard</span>
              <div class="date-close">
                <div class="time">11 mins ago</div>
                <font-awesome-icon
                  icon="fa-solid fa-xmark"
                  @click="closePopup"
                />
              </div>
            </div>
            <div class="popup-content">
              Hello, world! This is a notification message.
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const alerts = ref([
  {
    alertName: "primary",
    alertColor: "#e83574",
  },
  {
    alertName: "secondary",
    alertColor: "#636b7a",
  },
  {
    alertName: "success",
    alertColor: "#5eb562",
  },
  {
    alertName: "danger",
    alertColor: "#ed4a47",
  },
  {
    alertName: "warning",
    alertColor: "#ffa01c",
  },
  {
    alertName: "info",
    alertColor: "#3a95f0",
  },
  {
    alertName: "light",
    alertColor: "rgb(195 195 195)",
  },
  {
    alertName: "dark",
    alertColor: "#35353b",
  },
]);

const popups = ref([
  {
    popupIcon: "fa-solid fa-check",
    popupColor: "#55ad59",
    show: false,
  },
  {
    popupIcon: "fa-solid fa-bell",
    popupColor: "#2d87ed",
    show: false,
  },
  {
    popupIcon: "fa-solid fa-exclamation",
    popupColor: "#fc960f",
    show: false,
  },
  {
    popupIcon: "fa-solid fa-circle-exclamation",
    popupColor: "#eb4744",
    show: false,
  },
]);

function activeOne() {
  popups.value.forEach((v) => (v.show = false));
  popups.value[0].show = true;
}
function activeTwo() {
  popups.value.forEach((v) => (v.show = false));
  popups.value[1].show = true;
}
function activeThree() {
  popups.value.forEach((v) => (v.show = false));
  popups.value[2].show = true;
}
function activeFour() {
  popups.value.forEach((v) => (v.show = false));
  popups.value[3].show = true;
}
function closePopup() {
  popups.value.forEach((v) => (v.show = false));
}
</script>

<style lang="scss" scoped>
.notifications {
  width: 60%;
  margin: auto;
  @media (max-width: 767px) {
    width: 100%;
  }
  .alerts {
    margin-bottom: 20px;
    h4 {
      margin-bottom: 30px;
    }
    .alert {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      border: none;
      background-color: #e83574;
      a {
        color: white;
        text-decoration: none;
      }
      button {
        font-size: 9px;
        opacity: 1;
      }
    }
  }
  .toasts {
    h4 {
      margin-bottom: 30px;
    }
    .notification-btns {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      button {
        flex: 1;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 10px 15px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .notification-popups {
      position: fixed;
      right: 5px;
      bottom: 5px;

      .popup {
        // background-color: black;
        padding: 20px;
        color: white;
        border-radius: 10px;
        .popup-header {
          display: flex;
          align-items: center;
          svg {
            margin-right: 10px;
          }
          span.title {
            font-weight: bold;
            font-size: 15px;
          }
          .date-close {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 10px;
            .time {
              color: rgba(255, 255, 255, 0.8);
              font-size: 15px;
            }
            > svg {
              cursor: pointer;
            }
          }
        }
        .popup-content {
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
