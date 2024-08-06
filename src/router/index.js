import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/tables",
      name: "Tables",
      component: () => import("../views/TablesView.vue"),
    },
    {
      path: "/billing",
      name: "Billing",
      component: () => import("../views/BillingView.vue"),
    },
    {
      path: "/rtl",
      name: "Rtl",
      component: () => import("../views/RtlView.vue"),
    },
    {
      path: "/notifications",
      name: "Notifications",
      component: () => import("../views/NotificationView.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../views/SignInView.vue"),
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/SignUpView.vue"),
    },
  ],
});

export default router;
