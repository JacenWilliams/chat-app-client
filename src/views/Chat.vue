<template>
  <div class="chat-container">
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
    OtherChat,
  },

  computed: {
    owned: function() {
      return this.$store.state.username === this.chat.username;
    },
  },
};
</script>

<style scoped>
.chat-container {
  width: 100%;
}
</style>
