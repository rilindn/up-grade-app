<template>
  <Sidebar v-if="$route.fullPath !== '/login'"/>
  <Header v-if="$route.fullPath !== '/login'" />
  <router-view />
  <!-- <Footer /> -->
</template>

<script>
import Footer from "./components/footer";
import Header from "./components/header";
import Welcome from "./views/Welcome";
import Sidebar from "./components/sidebar";

export default {
  name: "App",
  components: {
    // Footer,
     Sidebar,
    Header,
    Welcome,
  },
};
</script>
