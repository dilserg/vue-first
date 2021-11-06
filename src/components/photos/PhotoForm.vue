<template>
  <v-form @submit.prevent="addPhoto" ref="form">
    <v-container>
      <v-row align="center">
        <v-text-field :rules="rules.title" v-model="title" />
        <v-file-input
          :rules="rules.file"
          v-model="image"
          placeholder="Attach photo"
        />
        <v-btn
          color="primary"
          class="ml-3"
          :disabled="formIsValid"
          @click="addPhoto"
          >Add</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    title: "",
    image: null,
    rules: {
      title: [(val) => (val || "").length > 0 || "This field is required"],
      file: [(val) => !!val || "This field is required"],
    },
  }),
  computed: {
    formIsValid() {
      return this.title && this.image === null;
    },
  },
  methods: {
    ...mapMutations(["pushPhoto"]),
    addPhoto() {
      this.pushPhoto({ title: this.title, image: this.image });
      this.title = "";
      this.image = null;
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped></style>
