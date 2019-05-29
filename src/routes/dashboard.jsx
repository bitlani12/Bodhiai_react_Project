import React from "react";
import Dashboard from "views/Dashboard/Dashboard";
// import UserProfile from "views/AllTest/AllTest";
// import Typography from "views/Typography/Typography";
// import Performance from "views/Performance/Performance";

import WeakAreas from "views/WeakAreas/WeakAreas";

//import SmartTest from "../views/SmartTest/SmartTest";
//import Logout from "../views/Logout/Logout";
//import MainDashboard from "../views/Dashboard/MainDashboard/MainDashboard";
//import Recommendations from "../views/Recommendations/Recommendation";
//import Challenge from "../views/Challenge/Challenge";
//import Message from "../views/Message/Message";
import ResetPassword from "../views/ResetPassword/ResetPassword";

import Loadable from "react-loadable";

const Loads = ({ isLoading, error }) => {
  return <div />;
};
const MainDashboard = Loadable({
  loader: () => import("../views/Dashboard/MainDashboard/MainDashboard"),
  loading: Loads
});
const Message = Loadable({
  loader: () => import("../views/Message/Message"),
  loading: Loads
});
const Challenge = Loadable({
  loader: () => import("../views/Challenge/Challenge"),
  loading: Loads
});
const Recommendations = Loadable({
  loader: () => import("../views/Recommendations/Recommendation"),
  loading: Loads
});
const Logout = Loadable({
  loader: () => import("../views/Logout/Logout"),
  loading: Loads
});
const SmartTest = Loadable({
  loader: () => import("../views/SmartTest/SmartTest"),
  loading: Loads
});

// const Dashboard = Loadable({
//   loader: () => import("views/Dashboard/Dashboard"),
//   loading: Loads
// });
const UserProfile = Loadable({
  loader: () => import("views/AllTest/AllTest"),
  loading: Loads
});
const Typography = Loadable({
  loader: () => import("views/Typography/Typography"),
  loading: Loads
});
const Performance = Loadable({
  loader: () => import("views/Performance/Performance"),
  loading: Loads
});
const dashboardRoutes = [
  ,
  // maindashboard is / , and test com[ponent is inside dashboard
  {
    path: "#",
    name: "Home",
    icon: "",
    className: ""
  },
  {
    path: "/",
    name: "Dashboard",
    icon: "dashboard",
    component: MainDashboard
  },
  {
    path: "/main",
    name: "Test",
    icon: "test2",
    component: Dashboard
  },
  {
    path: "#",
    name: "Tests",
    icon: "",
    className: ""
  },
  {
    path: "/user",
    name: "All Test",
    icon: "alltest",
    component: UserProfile
  },
  {
    path: "/smarttest",
    name: "Smart Test",
    icon: "smarttest",
    component: SmartTest
  },

  {
    path: "#",
    name: "COMMUNICATE",
    icon: "",
    className: ""
  },
  {
    path: "/table",
    name: "Messages",
    icon: "MESSAGE",
    component: Message
  },
  {
    path: "#",
    name: "STUDENT PERFORMANCE",
    icon: "",
    className: ""
  },
  {
    path: "/performance",
    name: "My Performance",
    icon: "myperformance",
    component: Performance
  },
  {
    path: "/recommendations",
    name: "Learning",
    icon: "learning",
    component: Recommendations
  },
  {
    path: "/challenge",
    name: "Challenge",
    icon: "challenge",
    component: Challenge
  },
  {
    path: "/typography",
    name: "Progress",
    icon: "Progress",
    component: Typography
  },
  {
    path: "/myweakareas",
    name: "My Weak Areas",
    icon: "weakareas",
    component: WeakAreas
  },

  {
    path: "#",
    name: "ACCOUNT SETTING",
    icon: "",
    className: ""
  },
  //  {
  //    path: "/resetpassword",
  //    name: "Notifications",
  //    icon: "pe-7s-news-paper",
  //    component: Typography
  //  },
  // {
  //   path: "/logout",
  //   name: "Logout",
  //   icon: "pe-7s-news-paper",
  //   component: Typography
  // },

  {
    path: "/icons",
    name: "Reset Password",
    icon: "resetpasw",
    component: ResetPassword
  },
  { path: "/maps", name: "Logout", icon: "logout", component: Logout },
  {
    path: "#",
    name: "",
    icon: "",
    className: ""
  }
  // { path: "", name: "", icon: "", component: "" },
  // { path: "", name: "", icon: "", component: "" },

  //{ redirect: true, path: "/", to: "/dashboard", name: "Dashboard" },
  // { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" },
  // ================================= this is for creating link only according to url which component will render===========================================
];

export default dashboardRoutes;
