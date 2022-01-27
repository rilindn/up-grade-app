<template>
  <Wrapper>
    <!-- <Title>{{ $t("landingPage.title") }}</Title> -->
    <FirstSection />
    <SecondSection />
     <ThirdSection />
     <FourthSection/>
  </Wrapper>
</template>
<script>
import { Wrapper, Title } from "./LandingPage.styles";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from './FourthSection/FourthSection.vue';
export default {
  components: {
    // Title,ss
    Wrapper,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
  },
};
</script>

