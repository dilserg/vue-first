<template>
  <v-app>
    <navbar> </navbar>
    <router-view />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["fetchTodos", "fetchPhotos", "fetchUsers"]),
  },
  mounted() {
    this.fetchTodos();
    this.fetchPhotos();
    this.fetchUsers();
  },
};
</script>
<style></style>
