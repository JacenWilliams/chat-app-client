<template>
  <div class="d-flex mb-3 chat justify-end">
    <v-card class="pa-2 ma-2 speech-bubble" color="accent" dark>
      <div class="mb-1 caption text-right">
        {{ chat.username }} - {{ getDate(chat.postedTimeStamp) }}
      </div>
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
      return date.toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
v-card {
  max-width: 60%;
  align-self: flex-end;
  justify-self: flex-end;
}

.speech-bubble {
  max-width: 80%;
}

.chat {
  align-content: flex-end;
  justify-self: flex-end;
}
</style>
