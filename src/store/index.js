import Vue from "vue";
import Vuex from "vuex";
import photoModule from "@/store/modules/photoModule";
import todoModule from "@/store/modules/todoModule";
import usersModule from "@/store/modules/usersModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    photoModule,
    todoModule,
    usersModule,
  },
});
