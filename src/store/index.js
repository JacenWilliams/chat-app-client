import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: "",

        userId: "",

        token: "",

        chats: [],

        socket: {
            isConnected: false
        }
    },

    getters: {
        allChat: state => state.chats.sort((a, b) => a.PostedTimeStamp - b.PostedTimeStamp),

        loggedIn(state) {
            if (state.token) {
                return true;
            }

            return false;
        },

        username(state) {
            return state.username;
        }
    },

    mutations: {
        setLogin(state, data) {
            state.userId = data.userId;
            state.username = data.username;
            state.token = data.token;

            localStorage.setItem('userData', JSON.stringify(data));
        },

        initializeLogin(state) {
            let userData = JSON.parse(localStorage.getItem('userData'));

            console.log("Initialize login:");
            console.log(JSON.stringify(userData));

            if (userData && userData.username && userData.userId && userData.token) {
                state.username = userData.username;
                state.userId = userData.userId;
                state.token = userData.token;
            }
        },

        setLogout(state) {
            state.userId = "";
            state.username = "";
            state.token = "";

            localStorage.removeItem('userData');
        },

        chatReceived(state, chat) {
            state.chats.push(chat);
        },

        initializeChats(state, chats) {
            state.chats = chats;
        },

        SOCKET_CONNECT(state, data) {
        }
    },

    actions: {
        async sendChat({ commit }, data) {
            this._vm.$socket.client.emit('message', data);
        },

        async login({ commit, dispatch }, data) {
            var response = await axios.post(process.env.VUE_APP_API_HOST + "/users/login", data);
            var user = response.data;

            if (user) {
                commit('setLogin', user);
                dispatch('connectToSocket', user.token);
            }
        },

        async logout({ commit, dispatch }) {
            commit('setLogout');
            dispatch('disconnectFromSocket');
        },

        async signup({ commit, dispatch }, data) {
            let response = await axios.post(process.env.VUE_APP_API_HOST + "/users/signup", data);
            let user = response.data;

            if (user && user.token) {
                commit('setLogin', user);
                dispatch('connectToSocket', user.token);
                return true;
            }

            return false;
        },

        async disconnectFromSocket({ commit }) {
            this._vm.$socket.client.io.opts.query = {};
            this._vm.$socket.client.close();
        },

        async connectToSocket({ commit }, token) {
            this._vm.$socket.client.io.opts.query = { token };
            this._vm.$socket.client.open();
        },

        async socket_connect({ commit }) {
            console.log("Socket Connected!");
        },

        async socket_disconnect({ commit }, data) {
            console.log("Socket Disconnected");
        },

        async socket_initialize({ commit }, data) {
            commit('initializeChats', data);
        },

        async socket_message({ commit }, data) {
            commit('chatReceived', data);
        }
    },

    modules: {}
});