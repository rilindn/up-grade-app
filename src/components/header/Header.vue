<template>
  <Wrapper>
    <RightContent>
      <img src="@/assets/logosvg.svg" width="93" height="43" alt="logo" />
      <span>Up Grade</span>
    </RightContent>
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
