<template>
  <v-card class="mb-5 pa-3" color="orange">
    <v-row v-if="isCompleted" align="center" class="pa-3">
      <v-checkbox id="checkbox-completed" v-model="isCompleted" />
      <label class="text-decoration-line-through" for="#checkbox-completed">
        {{ todo.title }}
      </label>
      <v-spacer />
      <v-btn @click="deleteTodoHandler" icon color="primary">
        <v-icon dark>mdi-delete</v-icon>
      </v-btn>
    </v-row>
    <v-row v-else align="center" class="pa-3">
      <v-checkbox
        @click="changeCompleteHandler"
        id="checkbox"
        v-model="isCompleted"
      />
      <label for="#checkbox">{{ todo.title }}</label>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    isCompleted: false,
  }),
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["changeComplete", "deleteTodo"]),
    deleteTodoHandler() {
      this.deleteTodo(this.todo.id);
    },
    changeCompleteHandler() {
      this.changeComplete(this.todo.id);
    },
  },
  mounted() {
    this.isCompleted = this.todo.completed;
  },
};
</script>

<style scoped></style>
