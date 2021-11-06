<template>
  <v-container>
    <user-search />
    <user-card v-for="user in getFilteredUsers" :user="user" :key="user.id" />
  </v-container>
</template>

<script>
import UserCard from "@/components/users/UserCard";
import { mapGetters } from "vuex";
import UserSearch from "@/components/users/UserSearch";
export default {
  components: { UserSearch, UserCard },
  computed: {
    ...mapGetters(["getFilteredUsers"]),
  },
};
</script>

<style scoped></style>
