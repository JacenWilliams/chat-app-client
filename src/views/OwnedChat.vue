<template>
  <div class="d-flex justify-end">
    <v-card class="pa-3 ma-3 speech-bubble" color="accent" dark>
      <v-card-text>{{chat.text}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["chat"]
};
</script>

<style scoped>
v-card {
  max-width: 60%;
}

.speech-bubble {
  max-width: 80%;
}
</style>