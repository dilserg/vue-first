<template>
  <v-form @submit.prevent>
    <v-text-field label="Search user" v-model="search" />
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    search: "",
  }),
  methods: {
    ...mapMutations(["setSearchString"]),
  },
  watch: {
    search() {
      this.setSearchString(this.search);
    },
  },
};
</script>

<style scoped></style>
