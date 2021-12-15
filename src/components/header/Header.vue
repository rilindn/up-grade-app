<template>
  <Wrapper>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact-us">Contact Us</router-link> |
    <router-link to="/login">Login</router-link>
  </Wrapper>
</template>

<script>
import { Wrapper } from "./Header.styles";
export default {
  components: {
    Wrapper,
  },
};
</script>

<style></style>
