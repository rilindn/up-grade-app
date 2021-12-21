<template>
  <div>
    <Sidebar v-if="$route.fullPath !== '/login'" />
    <Header v-if="$route.fullPath !== '/login'" />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from "./components/footer";
import Header from "./components/header";
import "./globalStyles";
import Sidebar from "./components/sidebar";

export default {
  name: "App",
  components: {
    // Footer,
    Sidebar,
    Header,
  },
};
</script>
