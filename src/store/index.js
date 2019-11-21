import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "",

        avatar: "",

        chats: [],

        socket: {
            isConnected: false
        }
    },

    getters: {
        allChat: state => state.chats.sort((a, b) => a - b),

    },


    mutations: {
        addChat(state, data) {
            state.chats.push(data);
        }
    },

    actions: {
        async sendChat({ commit }, data) {
            console.log("Sending chat: ");
            console.log(data);
            //Vue.prototype.$socket.send(data);
            commit('addChat', data);
        }
    },

    modules: {}
});