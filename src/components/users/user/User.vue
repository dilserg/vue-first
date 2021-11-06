<template>
  <v-card class="pa-10" color="primary" dark>
    <v-card-title>
      {{ user.name }}
    </v-card-title>
    <v-row>
      <v-col>
        <v-card-text>username: {{ user.username }}</v-card-text>
      </v-col>
      <v-col class="text-end">
        <v-card-text>website: {{ user.website }}</v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-text>email: {{ user.email }}</v-card-text>
      </v-col>
      <v-col class="text-end">
        <v-card-text>company: {{ user.company.name }}</v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-text>phone: {{ user.phone }}</v-card-text>
      </v-col>
      <v-col class="text-end">
        <v-card-text>
          address: {{ user.address.city }},
          {{ user.address.street }}
          {{ user.address.suite }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
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
