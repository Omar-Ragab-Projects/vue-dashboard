import { ref } from "vue";

export const insightCards = ref({
  cardOne: {
    cardColor: "background-color: var(--dark-color)",
    cardIcon: "fa-solid fa-vault",
    cardTitle: "Today's Money",
    cardInsights: "$53k",
    cardPercentage: "+55%",
    class: "",
    cardDate: "than last week",
  },
  cardTwo: {
    cardColor: "background-color: var(--red-color)",
    cardIcon: "fa-solid fa-chart-simple",
    cardTitle: "Today's Users",
    cardInsights: "2,300",
    cardPercentage: "+3%",
    class: "",
    cardDate: "than last month",
  },
  cardThree: {
    cardColor: "background-color: var(--green-color)",
    cardIcon: "fa-solid fa-user",
    cardTitle: "New Clients",
    cardInsights: "3,462",
    cardPercentage: "-2%",
    class: "minus",
    cardDate: "than yesterday",
  },
  cardFour: {
    cardColor: "background-color: var(--blue-color)",
    cardIcon: "fa-solid fa-sack-dollar",
    cardTitle: "Sales",
    cardInsights: "$103,430",
    cardPercentage: "+5%",
    class: "",
    cardDate: "Just updated",
  },
});
