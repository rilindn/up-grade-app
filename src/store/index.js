import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    loggedUser: {
      name: "",
      email: "",
      isLogged: false,
      role: "",
    },
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser.name = payload.name;
      state.loggedUser.email = payload.email;
      state.loggedUser.isLogged = true;
      state.loggedUser.role = payload.role;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
