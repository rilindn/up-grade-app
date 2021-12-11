<template>
  <Header v-if="$route.fullPath !== '/login'" />
  <router-view />
  <!-- <Footer /> -->
</template>

<script>
import Footer from "./components/footer";
import Header from "./components/header";
import Welcome from "./views/Welcome";

export default {
  name: "App",
  components: {
    // Footer,
    Header,
    Welcome,
  },
};
</script>
