import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    loggedUser: {
      email: "",
      isLogged: false,
      role: "",
    },
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser.email = payload.email;
      state.loggedUser.isLogged = true;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
