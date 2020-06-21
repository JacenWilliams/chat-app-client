<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>ChatApp</v-toolbar-title>
      <div class="d-flex"></div>
      <v-spacer></v-spacer>
      <v-btn v-if="loggedIn" text small color="secondary" @click="performLogout">Logout</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Jacen Williams</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, getActions, mapActions, mapMutations } from "vuex";

export default {
  name: "App",

  components: {},

  computed: {
    ...mapGetters(["loggedIn"])
  },

  methods: {
    ...mapActions(["logout"]),

    async performLogout() {
      await this.logout();
      this.$router.push("/login");
    }
  },

  data: () => ({
    //
  })
};
</script>
