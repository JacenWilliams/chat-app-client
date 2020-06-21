import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSocketIO from 'vue-socket.io-extended';
import VueChatScroll from "vue-chat-scroll";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import $socket from "./socket";

Vue.config.productionTip = false;

try {
    Vue.use(VueSocketIO, $socket, { store });
} catch (ex) {
    console.log(ex);
}

Vue.use(VueChatScroll);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app"); 9