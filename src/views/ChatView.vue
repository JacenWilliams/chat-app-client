<template>
  <v-container class="fill-height d-flex flex-column justify-end" fluid v-chat-scroll>
    <div ref="chats" class="chats">
      <Chat v-for="chat in allChat" :key="chat.id" :chat="chat" :class="`index-${chat.id}`"></Chat>
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
    message: ""
  }),

  components: {
    Chat
  },

  computed: {
    ...mapGetters(["allChat"])
  },

  updated() {
    window.scrollTo(0, document.body.scrollHeight);
  },

  beforeMount() {
    if (!this.$store.state.name) {
      this.$router.push("/");
    }
  },

  methods: {
    ...mapActions(["sendChat"]),

    send: function() {
      let text = this.message;
      let time = Date.now();
      let name = this.$store.state.name;
      let id = Math.max(...this.allChat.map(x => x.id), 0) + 1;

      this.sendChat({ id, text, name, time });

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

.chats {
  margin-bottom: 100px;
  overflow-y: auto;
}
</style>
