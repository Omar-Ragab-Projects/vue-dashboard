<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">COMPANIES</th>
          <th scope="col">MEMBERS</th>
          <th scope="col">BUDGET</th>
          <th scope="col">PROGRESS</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bodyRaw" v-for="project in projects">
          <td class="companies">
            <img :src="project.companyLogo" />
            <p>{{ project.companyName }}</p>
          </td>
          <td class="members">
            <img :src="project.members.memberOne" />
            <img :src="project.members.memberTwo" />
            <img :src="project.members.memberThree" />
            <img :src="project.members.memberFour" />
          </td>
          <td class="badget">{{ project.budget }}</td>
          <td class="prog">
            <span class="progress-number">{{ project.progress }}</span>
            <div class="progress-bar">
              <span
                class="progress-line"
                :class="{ complete: project.complete }"
                :style="{ width: project.progress }"
              ></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref({
  projectOne: {
    companyLogo: "./src/imgs/xd-logo.png",
    companyName: "Material XD Material XD Version",
    members: {
      memberOne: "./src/imgs/person01.jpg",
      memberTwo: "./src/imgs/person02.jpg",
      memberThree: "./src/imgs/person03.jpg",
      memberFour: "./src/imgs/person04.jpg",
    },
    budget: "$14,000",
    progress: "60%",
    complete: false,
  },
  projectTwo: {
    companyLogo:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-atlassian.3dc00559.svg",
    companyName: "Add Progress Track",
    members: {
      memberOne: "./src/imgs/person03.jpg",
      memberTwo: "./src/imgs/person02.jpg",
      memberThree: "",
      memberFour: "",
    },
    budget: "$3,000",
    progress: "10%",
    complete: false,
  },
  projectThree: {
    companyLogo:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-slack.9a05c08a.svg",
    companyName: "Fix Platform Errors",
    members: {
      memberOne: "./src/imgs/person01.jpg",
      memberTwo: "./src/imgs/person04.jpg",
      memberThree: "",
      memberFour: "",
    },
    budget: "Not set",
    progress: "100%",
    complete: true,
  },
  projectFour: {
    companyLogo:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-jira.cb154bf2.svg",
    companyName: "Launch our Mobile App",
    members: {
      memberOne: "./src/imgs/person03.jpg",
      memberTwo: "./src/imgs/person01.jpg",
      memberThree: "./src/imgs/person04.jpg",
      memberFour: "./src/imgs/person02.jpg",
    },
    budget: "$20,500",
    progress: "100%",
    complete: true,
  },
  projectFive: {
    companyLogo:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-atlassian.3dc00559.svg",
    companyName: "Add the New Pricing Page",
    members: {
      memberOne: "./src/imgs/person01.jpg",
      memberTwo: "",
      memberThree: "",
      memberFour: "",
    },
    budget: "$500",
    progress: "25%",
    complete: false,
  },
  projectSix: {
    companyLogo:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-jira.cb154bf2.svg",
    companyName: "Redesign New Online Shop",
    members: {
      memberOne: "./src/imgs/person02.jpg",
      memberTwo: "./src/imgs/person01.jpg",
      memberThree: "",
      memberFour: "",
    },
    budget: "$2,000",
    progress: "40%",
    complete: false,
  },
});
</script>

<style scoped lang="scss">
table {
  margin-top: 30px;
  min-width: 700px;
  tr {
    th {
      color: var(--gray-color);
      font-size: 10px;
      font-weight: bold;
    }
    td {
      // padding: 20px 0;
      height: 60px;
    }
    td.companies {
      display: flex;
      gap: 20px;
      align-items: center;
      img {
        width: 25px;
      }
      p {
        margin: 0;
        color: var(--text-main-color);
        font-weight: bold;
        font-size: 14px;
      }
    }
    td.members {
      // padding: 20px 0;
      // display: flex // position: relative;
      place-content: center;
      img {
        width: 25px;
        border-radius: 50%;
        border: 2px solid #fff;
        position: relative;
        cursor: pointer;
        &:hover {
          z-index: 1;
        }
        &:nth-child(2) {
          right: 15px;
        }
        &:nth-child(3) {
          right: 30px;
        }
        &:nth-child(4) {
          right: 45px;
        }
      }
    }
    td.badget {
      color: var(--gray-color);
      font-weight: bold;
      font-size: 14px;
      place-content: center;
      // padding: 20px 0;
    }
    td.prog {
      // padding: 10px 0;
      place-content: center;

      span.progress-number {
        font-size: 12px;
        display: inline-block;
        color: var(--gray-color);
        font-weight: bold;
      }
      .progress-bar {
        position: relative;
        width: 100%;
        height: 3px;
        background-color: #ddd;

        span {
          &.progress-line {
            position: absolute;
            height: 3px;
            z-index: 10;
            background-color: var(--blue-color);
          }
          &.complete {
            background-color: var(--main-color);
          }
        }
      }
    }
  }
}
</style>
