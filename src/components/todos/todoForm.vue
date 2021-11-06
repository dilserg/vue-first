<template>
  <v-form @submit.prevent="addTodoHandler" ref="form">
    <v-container fluid>
      <v-row align="center">
        <v-text-field :rules="rules.text" v-model="text" />

        <v-btn class="ml-3" type="submit" color="indigo" dark rounded>
          Add
        </v-btn>
      </v-row>
      <v-row>
        <v-select
          @change="selectShowHandler"
          v-model="selectedShow"
          :items="showVariants"
          label="show"
        />
        <v-select
          @change="selectSortHandler"
          v-model="selectedSort"
          :items="sortVariants"
          label="sort by"
        />
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    selectedShow: "all",
    showVariants: ["all", "uncompleted", "completed"],
    selectedSort: "new first",
    sortVariants: ["old first", "new first"],
    text: "",
    rules: {
      text: [(val) => (val || "").length > 0 || "This field is required"],
    },
  }),
  methods: {
    ...mapMutations(["addTodo", "setSort", "setShowedTodos"]),
    addTodoHandler() {
      if (!this.text) return;
      this.addTodo(this.text);
      this.text = "";
      this.$refs.form.resetValidation();
    },
    selectSortHandler() {
      this.setSort(this.selectedSort);
    },
    selectShowHandler() {
      this.setShowedTodos(this.selectedShow);
    },
  },
};
</script>

<style scoped></style>
