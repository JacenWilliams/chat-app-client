<template>
<div class="d-flex justify-start mb-3">
  <v-card class="pa-5" color="primary" dark>
    {{this.chat.id}} Other
  </v-card>
</div>
</template>

<script>
export default {
  props: ['chat']
};
</script>
