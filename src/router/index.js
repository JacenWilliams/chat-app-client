import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import ChatView from "../views/ChatView";
import Signup from "../views/Signup";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
