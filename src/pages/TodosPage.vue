<template>
  <v-container>
    <todo-form />
    <todo :key="todo.id" v-for="todo in getFilteredTodos" :todo="todo" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Todo from "@/components/todos/todo";
import TodoForm from "@/components/todos/todoForm";

export default {
  components: { TodoForm, Todo },
  computed: {
    ...mapGetters(["getFilteredTodos"]),
  },
};
</script>

<style scoped></style>
