<template>
  <div>
    <v-list>
      <v-list-item v-for="chat in this.chats" :key="chat.id">
        <v-list-item-content>
          <v-list-item-title v-text="chat.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    chats: [
      { id: 7, text: "Chat1", author: "Jacen" },
      { id: 19, text: "Chat2", author: "John" }
    ]
  })
};
</script>

<style scoped>
</style>