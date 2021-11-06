<template>
  <v-container>
    <loader v-if="getIsLoading" class="loader" />
    <user v-else :user="getCurrentUser" />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import User from "@/components/users/user/User";
import Loader from "@/components/ui/loader";

export default {
  components: { Loader, User },
  computed: {
    ...mapGetters(["getCurrentUser", "getIsLoading"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  mounted() {
    this.fetchUser(this.$route.params.userid);
  },
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transform: scale(2);
}
</style>
