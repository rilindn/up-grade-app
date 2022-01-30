<template>
  <Header />
  <Body>
    <Sidebar />
    <router-view />
  </Body>
</template>
<script>
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { Body } from "./AdminLayout.styles";

export default {
  name: "AdminLayout",
  components: {
    Sidebar,
    Header,
    Body,
  },
};
</script>
