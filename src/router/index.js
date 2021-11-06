import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/photos",
    component: () => import("../pages/GalleryPage"),
  },
  {
    path: "/todos",
    component: () => import("../pages/TodosPage"),
  },
  {
    path: "/users",
    component: () => import("../pages/AllUsersPage"),
  },
  {
    path: "/users/:userid",
    component: () => import("../pages/UserPage"),
  },
  {
    path: "*",
    component: MainPage,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
