import { ref } from "vue";
import {
  websiteViews,
  dailySales,
  completeTasks,
} from "@/components/dashboard/LiveCharts";

export const LiveCards = ref({
  cardOne: {
    liveChart: websiteViews,
    liveTitle: "Website Views",
    livePercentage: "",
    liveStatus: "Last Campaign Performance",
    liveDate: "campaign sent 2 days ago",
  },
  cardTwo: {
    liveChart: dailySales,
    liveTitle: "Daily Sales",
    livePercentage: "(+15%)",
    liveStatus: "increase in today sales.",
    liveDate: "updated 4 min ago",
  },
  cardThree: {
    liveChart: completeTasks,
    liveTitle: "Completed Tasks",
    livePercentage: "",
    liveStatus: "Last Campaign Performance",
    liveDate: "just updated",
  },
});
