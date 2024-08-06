<template>
  <div class="billing-card">
    <div class="cards">
      <div class="main-card">
        <div class="card-view">
          <img src="./../../imgs/card-background.jpg" alt="card" />
          <font-awesome-icon icon="fa-solid fa-wifi wifi" />
          <h3>4562 1122 4594 7852</h3>
          <div class="down-card">
            <div class="card-holder">
              <span>Card Holder</span>
              <p>Omar Ragab</p>
            </div>
            <div class="card-exp">
              <span>Expires</span>
              <p>11/22</p>
            </div>
            <div class="master-card-logo">
              <img
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="salary">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-building-columns" />
          </div>
          <h4>Salary</h4>
          <p>Belong Interactive</p>
          <span>+$2000</span>
        </div>
        <div class="paypal">
          <div class="icon">
            <font-awesome-icon icon="fa-solid fa-wallet" />
          </div>
          <h4>Paypal</h4>
          <p>Freelance Payment</p>
          <span>$455.00</span>
        </div>
      </div>
      <div class="payment-method">
        <h4>Payment Method</h4>
        <button>
          <span><font-awesome-icon icon="fa-solid fa-plus" /></span> ADD NEW
          CARD
        </button>
        <div class="cards">
          <div class="card-one">
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard-2/img/mastercard.e1efc600.png"
              alt="mastercard"
            />
            <span class="hide-card">**** **** **** 7852</span>
            <font-awesome-icon icon="fa-solid fa-pencil" />
          </div>
          <div class="card-two">
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard-2/img/visa.98edc46d.png"
              alt="visa card"
            />
            <span class="hide-card">**** **** **** 5248</span>
            <font-awesome-icon icon="fa-solid fa-pencil" />
          </div>
        </div>
      </div>
    </div>
    <div class="invoices">
      <div class="invoices-header">
        <h4>Invoices</h4>
        <button>VIEW ALL</button>
      </div>
      <div class="invoice" v-for="invoice in invoices">
        <div class="date-id">
          <h5 class="date">{{ invoice.invoiceData }}</h5>
          <span class="id">{{ invoice.invoiceID }}</span>
        </div>
        <div class="info">
          <span class="cost">{{ invoice.invoiceCost }}</span>
          <font-awesome-icon icon="fa-solid fa-file-pdf" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const invoices = ref({
  invoiceOne: {
    invoiceData: "March, 01, 2024",
    invoiceID: "#MS-415646",
    invoiceCost: "$180",
  },
  invoiceTwo: {
    invoiceData: "February, 10, 2024",
    invoiceID: "#RV-126749",
    invoiceCost: "$250",
  },
  invoiceThree: {
    invoiceData: "April, 05, 2023",
    invoiceID: "#FB-212562",
    invoiceCost: "$560",
  },
  invoiceFour: {
    invoiceData: "June, 25, 2022",
    invoiceID: "#QW-103578",
    invoiceCost: "$120",
  },
  invoiceFive: {
    invoiceData: "March, 01, 2024",
    invoiceID: "#AR-803481",
    invoiceCost: "$300",
  },
});
</script>

<style lang="scss" scoped>
.billing-card {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  .cards {
    flex: 3;
    .main-card {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      .card-view {
        flex: 2;
        position: relative;
        color: white;
        padding: 20px;
        border-radius: 10px;
        overflow: hidden;
        min-width: 315px;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgb(0 0 0 / 20%);
          z-index: -1;
        }
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
        }
        h3 {
          margin-top: 30px;
          font-size: 22px;
        }
        .down-card {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 50px;
          .card-holder {
            span {
              color: rgba(255, 255, 255, 0.8);
            }
            p {
              font-weight: bold;
              margin: 0;
            }
          }
          .card-exp {
            span {
              color: rgba(255, 255, 255, 0.8);
            }
            p {
              margin: 0;
              font-weight: bold;
            }
          }
          .master-card-logo {
            position: relative;
            width: 40px;
            margin-left: auto;
            height: 40px;
            img {
              max-width: 100%;
              width: 40px;
            }
          }
        }
      }
      .salary,
      .paypal {
        flex: 1;
        min-width: 200px;
        padding: 12px;
        background-color: white;
        border-radius: 10px;
        text-align: center;
        position: relative;
        box-shadow: 0 2px 10px #d7d7d7;
        .icon {
          width: fit-content;
          margin: 0 auto 20px;
          background-color: var(--green-color);
          padding: 15px 20px;
          border-radius: 12px;

          svg {
            color: white;
          }
        }
        h4 {
          font-size: 16px;
          font-weight: bold;
          color: var(--text-main-color);
        }
        p {
          font-size: 14px;
          color: var(--gray-color);
        }
        span {
          display: block;
          margin-top: 30px;
          font-weight: bold;
          color: var(--text-main-color);
          font-size: 20px;
        }
      }
    }
    .payment-method {
      position: relative;
      padding: 20px 15px;
      background-color: white;
      margin-top: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px #d7d7d7;

      h4 {
        font-size: 18px;
        font-weight: bold;
        color: var(--text-main-color);
        @media (max-width: 767px) {
          font-size: 15px;
        }
      }
      > button {
        position: absolute;
        right: 15px;
        top: 15px;
        background-color: var(--dark-color);
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        font-size: 12px;
        font-weight: bold;
        span {
          margin-right: 5px;
        }
      }
      .cards {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        .card-one,
        .card-two {
          flex: 1;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 20px;
          img {
            width: 30px;
          }
          span {
            font-weight: bold;
            color: var(--text-main-color);
          }
          svg {
            margin-left: auto;
            cursor: pointer;
          }
        }
      }
    }
  }
  .invoices {
    flex: 1;
    min-width: 290px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px #d7d7d7;
    .invoices-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      h4 {
        font-weight: bold;
        color: var(--text-main-color);
        font-size: 18px;
      }
      button {
        background-color: white;
        border: 1px solid var(--red-color);
        color: var(--red-color);
        border-radius: 10px;
        cursor: pointer;
        padding: 6px 15px;
        font-weight: bold;
        font-size: 12px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .invoice {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      .date-id {
        h5.date {
          font-weight: bold;
          color: var(--text-main-color);
          font-size: 15px;
          margin: 0;
        }
        span.id {
          color: var(--gray-color);
          font-size: 14px;
        }
      }
      .info {
        display: flex;
        align-items: center;
        gap: 20px;
        span {
          color: var(--gray-color);
          font-size: 14px;
        }
        svg {
          color: var(--text-main-color);
          font-size: 24px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
