import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "",

        avatar: "",

        chats: [{
                id: 1,
                name: "Jacen",
                text: "This is a chat that takes up a line or two. Although this is one solution to the answer, i'd say you have to look from the eyes of the developer giving the solution. A lot of seasoned developers strive to keep business logic and display logic separate. Especially those whom have dealt with the pain points of merging the two together. This solution works and yes it is a great alternative or additional solution. However it does mix business logic with display logic a little further than most would consider acceptable.",
                time: new Date(Date.now() - 1000 * 60)
            },

            {
                id: 2,
                name: "John",
                text: "Hi from John!",
                time: Date.now()
            }
        ],

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