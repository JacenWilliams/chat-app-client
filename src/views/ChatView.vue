<template>
  <v-container
    class="fill-height d-flex flex-column justify-end"
    fluid
    v-chat-scroll
  >
    <div ref="chats" class="chats">
      <Chat
        v-for="chat in allchat"
        :key="chat.id"
        :chat="chat"
        :class="`index-${chat.id}`"
      ></Chat>
    </div>
    <v-divider light></v-divider>
    <v-footer class="text-form mt-7" fixed>
      <v-form class="text-form" @submit.prevent="send">
        <v-container fluid>
          <v-text-field v-model="message" filled clearable label="Message">
            <template v-slot:append-outer>
              <v-icon @click="send">send</v-icon>
            </template>
          </v-text-field>
        </v-container>
      </v-form>
    </v-footer>
  </v-container>
</template>

<script>
import { mapGetters, getActions, mapActions } from "vuex";
import Chat from "./Chat";

export default {
  data: () => ({
    message: "",
  }),

  components: {
    Chat,
  },

  computed: {
    allchat() {
      return this.$store.state.chats;
    },
  },

  updated() {
    window.scrollTo(0, document.body.scrollHeight);
  },

  beforeMount() {
    if (!this.$store.state.name) {
      this.$router.push("/");
    }
  },

  sockets: {
    connect() {
      this.$store.state.socket.isConnected = true;
      console.log("Websocket connected!");
    },

    message: function(data) {
      console.log("received data: " + data);
      this.$store.state.chats.push(JSON.parse(data));
    },
  },

  methods: {
    ...mapActions(["sendChat"]),

    send: function() {
      let text = this.message;
      let time = Date.now();
      let name = this.$store.state.name;
      let id = Math.max(...this.allchat.map((x) => x.id), 0) + 1;

      if (!text) return;

      this.$socket.emit("message", JSON.stringify({ id, text, time, name }));
      this.message = "";
    },
  },
};
</script>

<style scoped>
.text-form {
  width: 100%;
}

hr {
  color: white;
}

.chats {
  margin-bottom: 100px;
  overflow-y: auto;
}
</style>
