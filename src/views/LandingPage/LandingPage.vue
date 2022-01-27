<template>
  <Wrapper>
    <!-- <Title>{{ $t("landingPage.title") }}</Title> -->
    <FirstSection />
    <SecondSection />
     <ThirdSection />
  </Wrapper>
</template>
<script>
import { Wrapper, Title } from "./LandingPage.styles";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
export default {
  components: {
    // Title,ss
    Wrapper,
    FirstSection,
    SecondSection,
    ThirdSection,
  },
};
</script>
