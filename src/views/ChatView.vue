<template>
  <v-container
    class="fill-height d-lg-flex flex-column justify-end chatContainer"
    fluid
    v-chat-scroll
  >
    <div ref="chats justify-center" class="chats">
      <Chat v-for="chat in allChat" :key="chat.id" :chat="chat" :class="`index-${chat.id}`"></Chat>
    </div>
    <v-divider light></v-divider>
    <v-footer class="text-form mt-7" fixed>
      <v-form class="text-form" @submit.prevent="send">
        <v-container fluid>
          <v-text-field v-model="message" filled clearable label="Message" required>
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
import { mapGetters, getActions, mapActions, mapMutations } from "vuex";
import Chat from "./Chat";

export default {
  data: () => ({
    message: ""
  }),

  components: {
    Chat
  },

  computed: {
    ...mapGetters(["allChat", "loggedIn"])
  },

  updated() {
    window.scrollTo(0, document.body.scrollHeight);
  },

  beforeMount() {
    if (!this.loggedIn) {
      this.$router.push("/");
    }
  },

  methods: {
    ...mapActions(["sendChat"]),

    send: function() {
      let text = this.message;
      if (!text) return;
      this.sendChat(text);
      this.message = "";
    }
  }
};
</script>

<style scoped>
.text-form {
  width: 100%;
}

hr {
  color: white;
}

.chatContainer {
  justify-self: center;
}

.chats {
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  overflow-y: auto;
}
</style>
