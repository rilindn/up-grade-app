<template>
  <Wrapper>
    <RightContent> E - LEARNING </RightContent>
    <LeftContent>
      <LanguageSwitcher />
      <UserMenu />
    </LeftContent>
  </Wrapper>
</template>

<script>
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.vue";
import { Wrapper, RightContent, LeftContent } from "./Header.styles";
import Avatar from "../Avatar";
import UserMenu from "../UserMenu/UserMenu.vue";
export default {
  name: "Header",
  components: {
    Wrapper,
    LanguageSwitcher,
    RightContent,
    LeftContent,
    Avatar,
    UserMenu,
  },
};
</script>

<style></style>
