<template>
  <router-link :to="`/users/${user.id}`" class="text-decoration-none">
    <v-card color="purple" class="mb-3" dark>
      <v-card-title>{{ user.username }}</v-card-title>
      <v-card-text>
        <v-row justify="space-between">
          <v-col>name: {{ user.name }}</v-col>
          <v-col class="text-center">email: {{ user.email }}</v-col>
          <v-col class="text-end">phone: {{ user.phone }}</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
