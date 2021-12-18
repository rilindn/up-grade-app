<template>
  <Wrapper>
    <RightContent> E - LEARNING </RightContent>
    <LeftContent>
      <LanguageSwitcher />
    </LeftContent>
  </Wrapper>
</template>

<script>
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.vue";
import { Wrapper, RightContent, LeftContent } from "./Header.styles";
export default {
  name: "Header",
  components: {
    Wrapper,
    LanguageSwitcher,
    RightContent,
    LeftContent,
  },
};
</script>

<style></style>
