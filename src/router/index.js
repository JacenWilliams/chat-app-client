import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import ChatView from "../views/ChatView";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "login",
        component: Login
    },
    {
        path: "/chat",
        name: "chat",
        component: ChatView
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;