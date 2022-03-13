<template>
  <Wrapper>
    <h1>{{ $t("welcome.title", { name: $store.state.loggedUser.name }) }}</h1>
    <h4>{{ $t("welcome.redirect") }}</h4>
  </Wrapper>
</template>
<script>
import { Wrapper } from "./Welcome.styles";
export default {
  components: {
    Wrapper,
  },
  beforeCreate() {
    const role = this.$store.getters.userRole;
    if (role === "Admin") return this.$router.push("/admin");
    if (role === "Staff") return this.$router.push("/teacher-classes");
    if (role === "Student") return this.$router.push("/schedule");
    return this.$router.push("/admin");
  },
};
</script>
