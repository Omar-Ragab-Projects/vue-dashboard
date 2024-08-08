<template>
  <div class="table-one table-responsive">
    <h3>Authors Table</h3>
    <div class="authors-table">
      <table class="table">
        <thead>
          <tr>
            <th>AUTHORS</th>
            <th>FUNCTION</th>
            <th>STATUS</th>
            <th>EMPLOYED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in authors">
            <td class="author">
              <img :src="author.authorPhoto" />
              <div class="info">
                <h5>{{ author.authorName }}</h5>
                <span>{{ author.authorMail }}</span>
              </div>
            </td>
            <td class="function">
              <h5>{{ author.authorFunctionName }}</h5>
              <span>{{ author.authorFunction }}</span>
            </td>
            <td class="status">
              <span
                :class="{
                  online: author.authorOnline,
                  offline: author.authorOffline,
                }"
                >{{ author.authorStatus }}</span
              >
            </td>
            <td class="employed">
              <span>{{ author.authorEmployed }}</span>
            </td>
            <td class="edit"><span>Edit</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="table-two table-responsive">
    <h3>Projects Table</h3>
    <div class="projects-table">
      <table class="table">
        <thead>
          <tr>
            <th>PROJECT</th>
            <th>BUDGET</th>
            <th>STATUS</th>
            <th>COMPLETION</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects">
            <td class="project">
              <div class="project-owner">
                <img :src="project.projectPhoto" />
                <div class="name">
                  <h5>{{ project.projectName }}</h5>
                </div>
              </div>
            </td>
            <td class="budget">
              <span>{{ project.projectBudget }}</span>
            </td>
            <td class="project-status">
              <span>{{ project.projectStatus }}</span>
            </td>
            <td class="completion">
              <div class="complete-process">
                <span>{{ project.progetProcess }}</span>
                <div class="process-bar">
                  <span
                    class="progress-line"
                    :style="{
                      width: project.progetProcess,
                      backgroundColor: project.processColor,
                    }"
                  ></span>
                </div>
              </div>
            </td>
            <td class="edit menu">
              <span
                ><font-awesome-icon icon="fa-solid fa-ellipsis-vertical "
              /></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="seperator"></div>
</template>

<script setup>
import { ref } from "vue";
const authors = ref({
  authorOne: {
    authorPhoto: "https://i.ibb.co/2hDFT9m/person01.jpg",
    authorName: "Ahmed Mohamed",
    authorMail: "ahmed@creative-tim.com",
    authorFunctionName: "Manager",
    authorFunction: "Organization",
    authorStatus: "ONLINE",
    authorOnline: true,
    authorOffline: false,
    authorEmployed: "23/04/18",
  },
  authorTwo: {
    authorPhoto: "https://i.ibb.co/94fVJ5L/person02.jpg",
    authorName: "Islam Ibrahim",
    authorMail: "islam@creative-tim.com",
    authorFunctionName: "Programator",
    authorFunction: "Developer",
    authorStatus: "OFFLINE",
    authorOnline: false,
    authorOffline: true,
    authorEmployed: "11/01/19",
  },
  authorThree: {
    authorPhoto: "https://i.ibb.co/PN0TWLh/person03.jpg",
    authorName: "Zeyad Ghasem",
    authorMail: "zeyad@creative-tim.com",
    authorFunctionName: "Executive",
    authorFunction: "Projects",
    authorStatus: "ONLINE",
    authorOnline: true,
    authorOffline: false,
    authorEmployed: "19/09/17",
  },
  authorFour: {
    authorPhoto: "https://i.ibb.co/qj0NmFR/person04.jpg",
    authorName: "Hisham Zaki",
    authorMail: "hisham@creative-tim.com",
    authorFunctionName: "Programator",
    authorFunction: "Developer",
    authorStatus: "ONLINE",
    authorOnline: true,
    authorOffline: false,
    authorEmployed: "24/12/08",
  },
  authorFive: {
    authorPhoto: "https://i.ibb.co/W5BM2SQ/person05.jpg",
    authorName: "Amgad Mostafa",
    authorMail: "amgad@creative-tim.com",
    authorFunctionName: "Manager",
    authorFunction: "Executive",
    authorStatus: "OFFLINE",
    authorOnline: false,
    authorOffline: true,
    authorEmployed: "04/10/21",
  },
  authorSix: {
    authorPhoto: "https://i.ibb.co/94fVJ5L/person02.jpg",
    authorName: "Omar Ragab",
    authorMail: "omar@creative-tim.com",
    authorFunctionName: "Programator",
    authorFunction: "Developer",
    authorStatus: "OFFLINE",
    authorOnline: false,
    authorOffline: true,
    authorEmployed: "14/09/20",
  },
});
const projects = ref({
  projectOne: {
    projectPhoto:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-asana.adf903ff.svg",
    projectName: "Asana",
    projectBudget: "$2,500",
    projectStatus: "working",
    progetProcess: "60%",
    processColor: "var(--blue-color)",
  },
  projectTwo: {
    projectPhoto:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/github.822fceca.svg",
    projectName: "Github",
    projectBudget: "$5,000",
    projectStatus: "done",
    progetProcess: "100%",
    processColor: "var(--green-color)",
  },
  projectThree: {
    projectPhoto:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-atlassian.3dc00559.svg",
    projectName: "Atlassian",
    projectBudget: "$3,400",
    projectStatus: "canceled",
    progetProcess: "30%",
    processColor: "var(--red-color)",
  },
  projectFour: {
    projectPhoto:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/bootstrap.1e0ee1be.svg",
    projectName: "Bootstrap",
    projectBudget: "$14,000",
    projectStatus: "working",
    progetProcess: "80%",
    processColor: "var(--blue-color)",
  },
  projectFive: {
    projectPhoto:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/logo-slack.9a05c08a.svg",
    projectName: "Slack",
    projectBudget: "$1,000",
    projectStatus: "canceled",
    progetProcess: "0%",
    processColor: "var(--red-color)",
  },
  projectSix: {
    projectPhoto:
      "https://demos.creative-tim.com/vue-material-dashboard-2/img/devto.e45dab88.svg",
    projectName: "Devto",
    projectBudget: "$2,300",
    projectStatus: "done",
    progetProcess: "100%",
    processColor: "var(--green-color)",
  },
});
</script>

<style scoped lang="scss">
.table-one,
.table-two {
  // overflow-x: scroll;
  position: relative;
  margin-top: -60px;
  > div {
    min-width: 700px;
  }
  h3 {
    position: relative;
    width: calc(100% - 40px);
    background-color: var(--main-color);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 10px #ddd;
    color: white;
    font-size: 18px;
    top: 60px;
    left: 20px;
    z-index: 1;
  }
  .authors-table,
  .projects-table {
    position: relative;
    padding: 20px;
    border-radius: 6px;
    background-color: white;
    .table {
      margin-top: 60px;
      margin-bottom: -10px;
      thead {
        th {
          color: var(--gray-color);
          font-size: 10px;
          font-weight: bold;
        }
      }
      tbody {
        tr {
          height: 70px;
          &:last-of-type {
            border-bottom: transparent;
          }
          td {
            place-content: center start;
            height: 70px;
            &.author {
              display: flex;
              align-items: center;
              gap: 15px;
              img {
                width: 40px;
                height: 40px;
                border-radius: 10px;
              }
              .info {
                h5 {
                  margin: 0;
                  color: var(--text-main-color);
                  font-weight: bold;
                  font-size: 15px;
                }
                span {
                  color: var(--gray-color);
                  font-size: 14px;
                }
              }
            }
            &.function {
              h5 {
                color: var(--gray-color);
                font-weight: bold;
                font-size: 14px;
                margin: 0;
              }
              span {
                color: var(--gray-color);
                font-size: 14px;
              }
            }
            &.status {
              span {
                padding: 6px 12px;
                font-size: 11px;
                font-weight: bold;
                color: white;
                border-radius: 10px;
              }
              .online {
                background-color: var(--green-color);
              }
              .offline {
                background-color: var(--dark-color);
              }
            }
            &.employed {
              span {
                color: var(--gray-color);
                font-weight: bold;
                font-size: 14px;
                margin: 0;
              }
            }
            &.edit {
              span {
                color: var(--gray-color);
                font-weight: bold;
                font-size: 13px;
                margin: 0;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
.table-two {
  margin-top: -30px;
  margin-bottom: 30px;
  td.project {
    .project-owner {
      display: flex;
      align-items: center;
      gap: 15px;
      img {
        width: 40px;
        height: 40px;
      }
      h5 {
        margin: 0;
        color: var(--text-main-color);
        font-weight: bold;
        font-size: 15px;
      }
    }
  }
  td.budget {
    span {
      color: var(--gray-color);
      font-weight: bold;
      font-size: 14px;
    }
  }
  td.project-status {
    span {
      color: var(--gray-color);
      font-weight: bold;
      font-size: 13px;
    }
  }
  td.completion {
    .complete-process {
      display: flex;
      align-items: center;
      gap: 10px;
      > span {
        color: var(--gray-color);
        font-weight: bold;
        font-size: 13px;
      }
      .process-bar {
        position: relative;
        width: 50%;
        height: 3px;
        background-color: #ddd;
        span.progress-line {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          // background-color: var(--blue-color);
        }
      }
    }
  }
}
.seperator {
  height: 10px;
  width: 100%;
}
.app[dir="rtl"] {
  .table-one,
  .table-two {
    h3 {
      left: auto;
      right: 20px;
    }
  }
}
</style>
