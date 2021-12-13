<template>
  <div>
    <Header v-if="$route.fullPath !== '/login'" />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Footer from "./components/footer";
import Header from "./components/header";
import Welcome from "./views/Welcome";
import "./globalStyles";

export default {
  name: "App",
  components: {
    // Footer,
    Header,
    Welcome,
  },
};
</script>
