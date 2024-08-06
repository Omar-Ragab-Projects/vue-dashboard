<template>
  <div class="row">
    <div class="col-xl-8 projects">
      <div class="menu" @click.stop="showPop">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        <transition name="fade">
          <div class="popup" v-if="showPopup">
            <a href="#">Action</a>
            <a href="#">AnotherAction</a>
            <a href="#">SomethinElse</a>
          </div>
        </transition>
      </div>
      <h4>Projects</h4>
      <div class="process">
        <font-awesome-icon icon="fa-solid fa-check" />
        <span> 30 done <span>this month</span></span>
      </div>
      <TableComponent />
    </div>
    <div class="col-xl-4 orders">
      <h4>Order overview</h4>
      <div class="statistics">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
        <span><span> 24%</span> this month</span>
      </div>
      <div class="all-orders">
        <div class="order" v-for="order in orders">
          <font-awesome-icon
            :icon="order.orderIcon"
            :style="{ color: order.iconColor }"
          />
          <div class="order-info">
            <h5>{{ order.orderTitle }}</h5>
            <span class="date">{{ order.orderDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TableComponent from "./TableComponent.vue";
const showPopup = ref(false);
function showPop() {
  document.addEventListener("click", (e) => {
    if (e.target) {
      showPopup.value = false;
    }
  });
  showPopup.value = !showPopup.value;
}
const orders = ref({
  orderOne: {
    orderIcon: "fa-solid fa-bell",
    iconColor: "#58b05c",
    orderTitle: "$2400 Design changes",
    orderDate: "22 DEC 7:20 PM",
  },
  orderTwo: {
    orderIcon: "fa-solid fa-code",
    iconColor: "#e3306e",
    orderTitle: "New order #1832412",
    orderDate: "21 DEC 11 PM",
  },
  orderThree: {
    orderIcon: "fa-solid fa-cart-shopping",
    iconColor: "#328ced",
    orderTitle: "Server payments for April",
    orderDate: "21 DEC 9:34 PM",
  },
  orderFour: {
    orderIcon: "fa-regular fa-credit-card",
    iconColor: "#fa8900",
    orderTitle: "New card added for order #4395133",
    orderDate: "20 DEC 2:20 AM",
  },
  orderFive: {
    orderIcon: "fa-solid fa-unlock-keyhole",
    iconColor: "#e3306e",
    orderTitle: "Unlock packages for development",
    orderDate: "18 DEC 4:54 AM",
  },
});
</script>

<style lang="scss" scoped>
.row {
  gap: 20px;
  flex-wrap: wrap;
}
.projects {
  // min-width: 800px;
  // width: 840px;
  flex: 6;
  box-shadow: 0 5px 10px #ddd;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  position: relative;
  .menu {
    position: absolute;
    right: 40px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    color: var(--gray-color);
    padding: 10px;
    .popup {
      background-color: white;
      box-shadow: 0 0 10px #ddd;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      right: 0;
      z-index: 100;
      padding: 10px;
      transition: 0.3s;
      a {
        text-decoration: none;
        color: var(--gray-color);
        font-weight: normal;
        padding: 6px 10px;
        font-size: 16px;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
  h4 {
    font-size: 16px;
    color: var(--text-main-color);
    font-weight: bold;
  }
  .process {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      color: var(--blue-color);
    }
    span {
      color: var(--gray-color);
      font-weight: bold;
      span {
        font-weight: normal;
        color: var(--gray-color);
      }
    }
  }
}
.orders {
  // width: 410px;
  flex: 3;
  box-shadow: 0 5px 10px #ddd;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  min-width: 270px;
  h4 {
    font-size: 16px;
    color: var(--text-main-color);
    font-weight: bold;
    margin-bottom: 15px;
  }
  .statistics {
    svg {
      color: var(--green-color);
    }
    > span {
      color: var(--gray-color);
      span {
        color: var(--gray-color);
        font-weight: bold;
      }
    }
  }
  .all-orders {
    margin-top: 30px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: var(--gray-color);
      opacity: 0.4;
      left: 12px;
      top: 10px;
    }
    .order {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
      svg {
        padding: 15px 5px;
        background-color: #fff;
        z-index: 1;
      }
      .order-info {
        h5 {
          font-size: 15px;
          color: var(--text-main-color);
          font-weight: bold;
          margin: 0 0 2px;
        }
        .date {
          font-size: 12px;
          color: var(--gray-color);
        }
      }
    }
  }
}
</style>
