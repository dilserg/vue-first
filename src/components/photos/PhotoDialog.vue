<template>
  <v-dialog
    v-model="$store.getters.getDialogPhoto"
    @click:outside="$store.commit('hideDialog')"
    max-width="600px"
  >
    <v-card>
      <v-card-title>{{ $store.getters.getCurrentPhoto.title }}</v-card-title>
      <v-card-text>
        <v-img :src="$store.getters.getCurrentPhoto.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped></style>
