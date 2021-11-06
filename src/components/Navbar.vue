<template>
  <v-app-bar color="green" max-height="60px">
    <v-spacer />
    <router-link class="ml-3 text-decoration-none" to="/">
      <v-btn dark outlined> Home </v-btn>
    </router-link>
    <router-link class="ml-3 text-decoration-none" to="/photos">
      <v-btn dark outlined> Gallery </v-btn>
    </router-link>
    <router-link class="ml-3 text-decoration-none" to="/todos">
      <v-btn dark outlined> Todos </v-btn>
    </router-link>
    <router-link class="ml-3 text-decoration-none" to="/users">
      <v-btn dark outlined>All users</v-btn>
    </router-link>
    <v-spacer />
  </v-app-bar>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped></style>
