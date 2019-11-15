<template>
  <v-container class="fill-height d-flex flex-column justify-end" fluid>

          <Chat v-for="chat in allChat" :key="chat.id" :chat="chat"></Chat>

          <v-divider light></v-divider>
          <v-form class="text-form" @submit.prevent="send">
            <v-container fluid >
                    <v-text-field
                      v-model="message"
                      filled
                      clearable
                      label="Message"
                    >
                    <template v-slot:append-outer>
                      <v-icon
                      @click="send">send</v-icon>
                    </template>
                    </v-text-field>
  
            </v-container>
          </v-form>
  </v-container>
</template>

<script>
import {mapGetters, getActions, mapActions} from 'vuex';
import Chat from "./Chat";

export default {

  data: () => ({
    message: ""
  }),

  components: {
    Chat
  },

  computed: {
    ...mapGetters(['allChat'])
  },

  methods: {
    ...mapActions(['sendChat']),

    send: function() {
      let text = this.message;
      let time = Date.now();
      let name = this.$store.state.name;
      let id = Math.max(...this.allChat.map(x => x.id), 0) + 1;

      this.sendChat({id,text,name,time});

      this.message = "";
    },
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
</style>
