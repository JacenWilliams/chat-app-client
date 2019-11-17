<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <v-toolbar-title>FireSpin</v-toolbar-title>
      <div class="d-flex align-center"></div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <v-col align="center">
        <div>
          Icons made by
          <a
            href="https://www.flaticon.com/authors/roundicons-freebies"
            title="Roundicons Freebies"
          >Roundicons Freebies</a> from
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
