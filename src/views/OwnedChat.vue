<template>
  <div class="d-flex justify-end">
    <v-card class="pa-5" color="accent" dark>
    {{this.chat.id}} Mine
  </v-card>
  </div>
</template>

<script>
export default {
  props: ["chat"]
};
</script>
