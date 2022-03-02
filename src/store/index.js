import { createStore } from "vuex";

export default createStore({
  state: {
    loggedUser: {
      id: "",
      name: "",
      email: "",
      isLogged: false,
      role: "",
    },
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser.id = payload?._id;
      state.loggedUser.name = `${payload?.firstName} ${payload?.lastName}`;
      state.loggedUser.email = payload?.email;
      state.loggedUser.isLogged = true;
      state.loggedUser.role = payload?.role;
    },
  },
  actions: {
    SET_LOGGED_USER(context, payload) {
      context.commit("SET_LOGGED_USER", payload?.user);
    },
  },
  modules: {},
  getters: {
    isAuthenticated: (state) => state.loggedUser.isLogged,
    userRole: (state) => state.loggedUser.role,
    loggedUser: (state) => state.loggedUser,
  },
  plugins: [],
});
