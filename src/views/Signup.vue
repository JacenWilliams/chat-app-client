<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-6" px="4">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Sign Up</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model="username"
                label="Username"
                required
                @keydown.enter="submit"
                @keypress="error = false"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                @keydown.enter="submit"
                @keypress="error = false"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit" align="right" justify="right" color="primary">Sign Up</v-btn>
            <v-btn @click="login" align="right" justify="right" text>Login</v-btn>
          </v-card-actions>
          <v-alert
            class="justify-center"
            v-model="error"
            dense
            outlined
            type="error"
            dismissible
            close-text="Dismiss"
          >{{errorMessage}}</v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, getActions, mapActions, mapMutations } from "vuex";

export default {
  name: "signup",

  data: () => ({
    username: "",
    password: "",
    images: [],
    avatar: "",
    show: false,
    dialog: false,
    error: false,
    errorMessage: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    }
  }),

  computed: {
    ...mapGetters(["loggedIn"])
  },

  methods: {
    ...mapActions(["signup"]),

    checkLogin() {
      if (this.loggedIn) this.$router.push("/chat");
      else return false;
    },

    async submit() {
      try {
        if (!this.username) {
          this.errorMessage = "Username is required!";
          this.error = true;
          return;
        }

        if (!this.password) {
          this.errorMessage = "Password is required!";
          this.error = true;
          return;
        }

        await this.signup({ username: this.username, password: this.password });
        if (!this.checkLogin()) this.error = true;
      } catch (error) {
        this.errorMessage = "Username already exists!";
        this.error = true;
        console.log(error.stack);
      }
    },

    async login() {
      this.$router.push("/login");
    }
  }
};
</script>
