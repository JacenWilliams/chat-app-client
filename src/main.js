import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSocketio from 'vue-socket.io';
import VueChatScroll from "vue-chat-scroll";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

try {
    Vue.use(new VueSocketio({ connection: 'http://localhost:3000', debug: true }));
} catch (ex) {
    console.log(ex);
}
Vue.use(VueChatScroll);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");