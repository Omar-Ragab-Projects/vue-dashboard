import { ref } from "vue";

export const websiteViews = ref({
  backgroundColor: "#e83875",
  dataPointWidth: 10,
  animationEnabled: true,
  axisX: {
    gridColor: "rgb(255 255 255 / 25%)",
    gridThickness: 1,
    gridDashType: "dash",
    lineColor: "transparent",
    labelFontColor: "white",
    tickLength: 0,
  },
  axisY: {
    interval: 15,
    gridColor: "rgb(255 255 255 / 25%)",
    gridDashType: "dash",
    lineColor: "transparent",
    labelFontColor: "white",
    tickLength: 0,
  },
  data: [
    {
      type: "column",
      color: "white",
      dataPoints: [
        { label: "M", y: 50 },
        { label: "T", y: 20 },
        { label: "W", y: 10 },
        { label: "T", y: 20 },
        { label: "F", y: 50 },
        { label: "S", y: 10 },
        { label: "S", y: 40 },
      ],
    },
  ],
});
export const dailySales = ref({
  backgroundColor: "#5bb35f",
  dataPointWidth: 10,
  animationEnabled: true,
  axisX: {
    gridColor: "rgb(255 255 255 / 25%)",
    gridThickness: 0,
    gridDashType: "dash",
    lineColor: "transparent",
    labelFontColor: "white",
    tickLength: 0,
    labelAngle: -20,
  },
  axisY: {
    interval: 15,
    gridColor: "rgb(255 255 255 / 25%)",
    gridDashType: "dash",
    lineColor: "transparent",
    labelFontColor: "white",
    tickLength: 0,
  },
  data: [
    {
      type: "spline",
      color: "white",
      dataPoints: [
        { label: "Apr", y: 0 },
        { label: "Jun", y: 20 },
        { label: "Aug", y: 10 },
        { label: "Oct", y: 20 },
        { label: "Dec", y: 50 },
      ],
    },
  ],
});
export const completeTasks = ref({
  backgroundColor: "#3e3e45",
  dataPointWidth: 10,
  animationEnabled: true,
  axisX: {
    gridColor: "rgb(255 255 255 / 25%)",
    gridThickness: 0,
    gridDashType: "dash",
    lineColor: "transparent",
    labelFontColor: "white",
    tickLength: 0,
    labelAngle: -20,
  },
  axisY: {
    interval: 15,
    gridColor: "rgb(255 255 255 / 25%)",
    gridDashType: "dash",
    lineColor: "transparent",
    labelFontColor: "white",
    tickLength: 0,
  },
  data: [
    {
      type: "spline",
      color: "white",
      dataPoints: [
        { label: "Apr", y: 0 },
        { label: "Jun", y: 10 },
        { label: "Aug", y: 40 },
        { label: "Oct", y: 20 },
        { label: "Dec", y: 50 },
      ],
    },
  ],
});
