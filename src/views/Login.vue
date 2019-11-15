<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-6" px="4">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Enter Name</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit" align="right" justify="right" color="primary">Enter Chat</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",

  data: () => ({
    name: ""
  }),

  methods: {
    submit() {
      if (this.name) {
        this.$store.state.name = this.name;
        this.$router.push("/chat");
      }
    }
  }
};
</script>

<style scoped>
</style>