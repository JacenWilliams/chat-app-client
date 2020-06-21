<template>
  <div class="chat-container justify-center align-center">
    <OwnedChat :class="chat" v-if="owned" :chat="this.chat"></OwnedChat>
    <OtherChat :class="chat" v-else :chat="this.chat"></OtherChat>
  </div>
</template>

<script>
import OwnedChat from "./OwnedChat";
import OtherChat from "./OtherChat";

export default {
  props: ["chat"],

  components: {
    OwnedChat,
    OtherChat
  },

  computed: {
    owned: function() {
      return this.$store.state.userId === this.chat.userId;
    }
  }
};
</script>

<style scoped>
.chat-container {
  justify-self: center;
}
</style>
