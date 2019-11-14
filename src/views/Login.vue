<template>
<v-container>
  <v-row align="center">
    <v-form>
      <v-text-field
      v-model="name"
      label="Name"
      required
      ></v-text-field>
    </v-form>
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
    submit () {
      if(this.name){
        this.$store.name = this.name;
        this.$router.push('/chat');
      }
    }
  }

}
</script>

<style scoped>

</style>