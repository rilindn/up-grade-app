<template>
  <Sidebar />
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import Footer from "../../components/footer";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default {
  name: "MainLayout",
  components: {
    Footer,
    Sidebar,
    Header,
  },
};
</script>
