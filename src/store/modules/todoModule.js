import axios from "axios";

export default {
  state: {
    todos: [],
    sortBy: "new first",
    showedTodos: "all",
  },
  mutations: {
    setTodos: (state, payload) => {
      state.todos = payload;
    },
    setSort: (state, sortBy) => {
      state.sortBy = sortBy;
    },
    setShowedTodos: (state, showType) => {
      state.showedTodos = showType;
    },
    addTodo: (state, title) => {
      state.todos.push({ id: Date.now(), title, completed: false });
    },
    changeComplete: (state, id) => {
      state.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter((el) => el.id !== id);
    },
  },
  actions: {
    fetchTodos: async (context) => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      context.commit("setTodos", response.data);
    },
  },
  getters: {
    getFilteredTodos: (state) => {
      if (state.sortBy === "new first") {
        if (state.showedTodos === "all") {
          return state.todos.slice().reverse();
        } else if (state.showedTodos === "uncompleted") {
          return state.todos.filter((todo) => !todo.completed).reverse();
        } else if (state.showedTodos === "completed") {
          return state.todos
            .filter((todo) => {
              console.log(todo.completed);
              return todo.completed;
            })
            .reverse();
        }
      } else if (state.sortBy === "old first") {
        if (state.showedTodos === "all") {
          return state.todos;
        } else if (state.showedTodos === "uncompleted") {
          return state.todos.filter((todo) => !todo.completed);
        } else if (state.showedTodos === "completed") {
          return state.todos.filter((todo) => todo.completed);
        }
      }
    },
  },
};
