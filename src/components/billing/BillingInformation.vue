<template>
  <div class="billing-info">
    <div class="billing-information">
      <h4>Billing Information</h4>
      <div class="info-box" v-for="(infoBox, index) in infoBoxes">
        <div v-if="infoBox.showBox">
          <h5>{{ infoBox.infoName }}</h5>
          <div class="info">
            Company Name: <span>{{ infoBox.infoCompany }}</span>
          </div>
          <div class="info">
            Email Address: <span>{{ infoBox.infoMail }}</span>
          </div>
          <div class="info">
            VAT Number: <span>{{ infoBox.infoVAT }}</span>
          </div>
          <div class="settings">
            <div class="delete" @click="hideBox(index)">
              <font-awesome-icon icon="fa-regular fa-trash-can" />
              <span>DELETE</span>
            </div>
            <div class="edit">
              <font-awesome-icon icon="fa-solid fa-pencil" />
              <span>EDIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="billing-transaction">
      <h4>Your Transaction's</h4>
      <div class="date-range">
        <font-awesome-icon icon="fa-solid fa-calendar-days" />
        <span>23 - 30 March 2024</span>
      </div>
      <div class="newest">
        <span class="duration">NEWEST</span>
        <div class="transaction" v-for="transaction in newTransactions">
          <font-awesome-icon
            :icon="transaction.icon"
            :style="{ color: transaction.color }"
          />
          <div class="transaction-info">
            <h5 class="name">{{ transaction.name }}</h5>
            <span class="date">{{ transaction.date }}</span>
          </div>
          <div class="price" :style="{ color: transaction.color }">
            {{ transaction.price }}
          </div>
        </div>
      </div>
      <div class="yesterday">
        <span class="duration">YESTERDAY</span>
        <div class="transaction" v-for="transaction in oldTransactions">
          <font-awesome-icon
            :icon="transaction.icon"
            :style="{ color: transaction.color }"
          />
          <div class="transaction-info">
            <h5 class="name">{{ transaction.name }}</h5>
            <span class="date">{{ transaction.date }}</span>
          </div>
          <div class="price" :style="{ color: transaction.color }">
            {{ transaction.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const infoBoxes = ref({
  boxOne: {
    infoName: "Gamal Ayman",
    infoCompany: "Viking Burrito",
    infoMail: "oliver@burrito.com",
    infoVAT: "FRB1235476",
    showBox: true,
  },
  boxTwo: {
    infoName: "Walid Zeyad",
    infoCompany: "Stone Tech Zone",
    infoMail: "lucas@stone-tech.com",
    infoVAT: "FRB1235476",
    showBox: true,
  },
  boxThree: {
    infoName: "Ragab Amer",
    infoCompany: "Fiber Notion",
    infoMail: "Fiber Notion",
    infoVAT: "FRB1235476",
    showBox: true,
  },
});
function hideBox(index) {
  if (confirm("Are You Sure?")) {
    infoBoxes.value[index].showBox = false;
  }
}
const newTransactions = ref({
  transactionOne: {
    icon: "fa-solid fa-arrow-down",
    name: "Netflex",
    date: "27 March 2024, at 12:30 PM",
    price: "- $ 2,500",
    color: "var(--red-color)",
  },
  transactionTwo: {
    icon: "fa-solid fa-arrow-up",
    name: "Apple",
    date: "27 March 2024, at 04:30 AM",
    price: "+ $ 2,000",
    color: "var(--green-color)",
  },
});
const oldTransactions = ref({
  transactionOne: {
    icon: "fa-solid fa-arrow-up",
    name: "Stripe",
    date: "26 March 2024, at 13:45 PM",
    price: "+ $ 750",
    color: "var(--green-color)",
  },
  transactionTwo: {
    icon: "fa-solid fa-arrow-up",
    name: "HubSpot",
    date: "26 March 2024, at 12:30 PM",
    price: "+ $ 1,000",
    color: "var(--green-color)",
  },
  transactionThree: {
    icon: "fa-solid fa-arrow-up",
    name: "Creative Tim",
    date: "26 March 2024, at 08:30 AM",
    price: "+ $ 2,500",
    color: "var(--green-color)",
  },
  transactionFour: {
    icon: "fa-solid fa-exclamation",
    name: "Webflow",
    date: "26 March 2024, at 05:00 AM",
    price: "Pending",
    color: "var(--text-main-color)",
  },
});
</script>

<style lang="scss" scoped>
.billing-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  .billing-information {
    min-width: 500px;
    flex: 3;
    padding: 30px 15px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px #d7d7d7;
    @media (max-width: 767px) {
      min-width: 315px;
    }
    h4 {
      font-weight: bold;
      color: var(--text-main-color);
      font-size: 18px;
      margin-bottom: 30px;
    }
    .info-box {
      background-color: #f7f9fa;
      padding: 25px;
      border-radius: 6px;
      margin-top: 20px;
      position: relative;
      h5 {
        font-weight: bold;
        color: var(--text-main-color);
        font-size: 16px;
        margin-bottom: 20px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
      div.info {
        color: var(--gray-color);
        font-size: 14px;
        margin-bottom: 2px;
        > span {
          font-weight: bold;
          color: var(--text-main-color);
          font-size: 13px;
          margin-left: 8px;
          @media (max-width: 767px) {
            font-size: 12px;
          }
        }
      }
      .settings {
        display: flex;
        gap: 20px;
        position: absolute;
        right: 30px;
        top: 30px;
        @media (max-width: 767px) {
          right: 20px;
          top: 20px;
        }
        div.delete,
        div.edit {
          cursor: pointer;
          span {
            margin-left: 6px;
          }
        }
        div.edit {
          font-weight: bold;
          color: var(--text-main-color);
          font-size: 12px;
        }
        div.delete {
          font-weight: bold;
          color: var(--red-color);
          font-size: 12px;
          opacity: 0.7;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  .billing-transaction {
    min-width: 300px;
    flex: 2;
    padding: 30px 15px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px #d7d7d7;
    position: relative;
    h4 {
      font-weight: bold;
      color: var(--text-main-color);
      font-size: 18px;
      margin-bottom: 30px;
    }
    > div.date-range {
      position: absolute;
      right: 20px;
      top: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--gray-color);
      @media (max-width: 767px) {
        top: 80px;
      }
    }
    .newest,
    .yesterday {
      > span.duration {
        color: var(--gray-color);
        font-weight: bold;
        font-size: 13px;
        margin-bottom: 30px;
        margin-top: 30px;
        display: block;
      }
      .transaction {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
        svg {
          color: var(--red-color);
          width: 10px;
          height: 10px;
          padding: 10px;
          border-radius: 50%;
          font-size: 10px;
          border: 1px solid;
        }
        .transaction-info {
          h5 {
            margin: 0;
            font-weight: bold;
            color: var(--text-main-color);
            font-size: 16px;
          }
          span.date {
            font-size: 14px;
            color: var(--gray-color);
          }
        }
        div.price {
          margin-left: auto;
          margin-right: 10px;
          color: var(--red-color);
          font-weight: bold;
          font-size: 15px;
          opacity: 0.9;
        }
      }
    }
  }
}
.app[dir="rtl"] {
  .billing-info .billing-transaction > div.date-range,
  .billing-info .billing-information .info-box .settings {
    right: auto;
    left: 15px;
    span {
      margin-right: 6px;
      margin-left: 0;
    }
  }
  .billing-info .billing-transaction .newest .transaction div.price,
  .billing-info .billing-transaction .yesterday .transaction div.price {
    margin-right: auto;
    margin-left: 10px;
  }
}
</style>
