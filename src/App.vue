<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>ChatApp</v-toolbar-title>
      <div class="d-flex"></div>
      <v-spacer></v-spacer>
      <v-menu offset-y bottom v-if="loggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            {{username}}
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="performLogout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
    ...mapGetters(["loggedIn", "username"])
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
