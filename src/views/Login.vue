<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-6" px="4">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field v-model="username" label="Username" required @keydown.enter="submit"></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                @keydown.enter="submit"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit" align="right" justify="right" color="primary">Sign In</v-btn>
            <v-btn @click="signup" align="right" justify="right" color="secondary">Sign Up</v-btn>
          </v-card-actions>
          <v-alert
            class="justify-center"
            v-model="error"
            dense
            outlined
            type="error"
            dismissible
            close-text="Dismiss"
          >Invalid username or password</v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, getActions, mapActions, mapMutations } from "vuex";

export default {
  name: "login",

  data: () => ({
    username: "",
    password: "",
    images: [],
    avatar: "",
    show: false,
    dialog: false,
    error: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 4 || "Min 8 characters"
    }
  }),

  computed: {
    ...mapGetters(["loggedIn"])
  },

  afterMount() {
    console.log("Mounted");
    this.initializeLogin();
    this.checkLogin();
  },

  methods: {
    ...mapMutations(["initializeLogin"]),

    ...mapActions(["login"]),

    checkLogin() {
      if (this.loggedIn) {
        this.$router.push("/chat");
        return true;
      }
      return false;
    },

    async submit() {
      try {
        await this.login({ username: this.username, password: this.password });
        if (!this.checkLogin()) {
          this.error = true;
        }
      } catch (error) {
        this.error = true;
        console.log(error.stack);
      }
    },

    async signup() {
      this.$router.push("/signup");
    }
  }
};
</script>
