<template>
  <div class="d-flex justify-start mb-3 chat">
    <v-card class="px-3 ma-3 speech-bubble" color="primary" dark>
      <div class="overline mb-4">
        {{ chat.username }} - {{ new Date(chat.timeStamp).toTimeString() }}
      </div>
      <v-card-text>{{ chat.message }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["chat"],
};
</script>

<style scoped>
v-card {
  max-width: 80%;
}

.speech-bubble {
  max-width: 80%;
}
</style>
