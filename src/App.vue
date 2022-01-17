<template>
  <div>
    <MainLayout v-if="$store.state.loggedUser.isLogged" />
    <Login v-else />
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout";
import Login from "./views/Login";
import "./globalStyles";

export default {
  name: "App",
  components: {
    MainLayout,
    Login,
  },
};
</script>
