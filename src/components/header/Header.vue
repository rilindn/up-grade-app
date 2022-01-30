<template>
  <Wrapper>
    <LanguageSwitcher />
    <Divider />
    <UserMenu />
  </Wrapper>
</template>

<script>
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.vue";
import { Wrapper, Divider } from "./Header.styles";
import UserMenu from "../UserMenu/UserMenu.vue";
export default {
  name: "Header",
  components: {
    Wrapper,
    LanguageSwitcher,
    Divider,
    UserMenu,
  },
};
</script>

<style></style>
