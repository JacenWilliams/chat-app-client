import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueNativeSock from 'vue-native-websocket';
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

Vue.use(VueNativeSock, 'ws://localhost:9090', {
  store: store, 
  format: 'json',
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
