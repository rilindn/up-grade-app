<template>
  <Wrapper>
    <h1>{{ $t("home.title") }}</h1>
    <h2>{{ `${$t("home.welcome")}  ${$store.state.loggedUser.name}` }}</h2>
  </Wrapper>
</template>
<script>
import { Wrapper } from "./FirstSection.styles";
export default {
  components: {
    Wrapper,
  },
};
</script>
