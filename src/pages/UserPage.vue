<template>
  <v-container fluid>
    {{ getCurrentUser.name }}
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  mounted() {
    this.fetchUser(this.$route.params.userid);
  },
};
</script>

<style scoped></style>
