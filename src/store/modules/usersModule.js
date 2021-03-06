import axios from "axios";

export default {
  state: {
    usersList: [],
    searchString: "",
    currentUser: {},
    isLoading: false,
  },
  mutations: {
    setUsers: (state, payload) => {
      state.usersList = payload;
    },
    setSearchString: (state, payload) => {
      state.searchString = payload;
    },
    setUser: (state, payload) => {
      state.currentUser = payload;
    },
    setIsLoading: (state, payload) => {
      state.isLoading = payload;
    },
  },
  getters: {
    getFilteredUsers: (state) => {
      return state.usersList.filter((user) => {
        return (
          user.name.toLowerCase().includes(state.searchString.toLowerCase()) ||
          user.username
            .toLowerCase()
            .includes(state.searchString.toLowerCase()) ||
          user.email.toLowerCase().includes(state.searchString.toLowerCase()) ||
          user.website
            .toLowerCase()
            .includes(state.searchString.toLowerCase()) ||
          user.phone.toLowerCase().includes(state.searchString.toLowerCase())
        );
      });
    },

    getIsLoading: (state) => state.isLoading,

    getCurrentUser: (state) => {
      return state.currentUser;
    },
  },
  actions: {
    fetchUsers: async (context) => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      context.commit("setUsers", response.data);
    },

    fetchUser: async (context, id) => {
      context.commit("setIsLoading", true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      context.commit("setUser", response.data);
      context.commit("setIsLoading", false);
    },
  },
};
