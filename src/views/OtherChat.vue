<template>
  <div class="d-flex mb-3 chat">
    <v-card class="pa-2 ma-2 speech-bubble" color="primary" dark>
      <div class="mb-1 caption">{{ chat.username }} - {{ getDate(chat.postedTimeStamp)}}</div>
      <v-card-text class="pa-1 ma-1">
        <div class="text--primary">{{ chat.message }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["chat"],

  methods: {
    getDate(datestring) {
      let date = new Date(datestring);
      let localDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60 * 1000
      );
      return localDate.toLocaleTimeString();
    }
  }
};
</script>

<style scoped>
v-card {
  max-width: 80%;
}

.speech-bubble {
  max-width: 80%;
}

.chat {
  align-content: flex-start;
}
</style>
