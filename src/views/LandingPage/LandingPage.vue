<template>
  <Wrapper>
    <!-- <Title>{{ $t("landingPage.title") }}</Title> -->
    <FirstSection />
    <SecondSection />
  </Wrapper>
</template>
<script>
import { Wrapper, Title } from "./LandingPage.styles";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
export default {
  components: {
    // Title,
    Wrapper,
    FirstSection,
    SecondSection,
  },
};
</script>
