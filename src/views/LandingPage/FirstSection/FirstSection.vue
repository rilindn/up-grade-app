<template>
  <Wrapper>
    <HeaderWrapper>
      <Button
            :title="$t('landingPage.firstSection.button')"
            backgroundColor="#00BFA6"
            width="9%"
            borderColor="#00BFA6"
            borderRadius="10px"

          />
   </HeaderWrapper>
  <FirstWrapper>
   
        
    <MiddleWrapper>

   <h1>{{ $t("landingPage.firstSection.title") }}</h1>

   <p>{{ $t("landingPage.firstSection.description") }}</p>
    <Button
            :title="$t('landingPage.firstSection.button')"
            backgroundColor="#00BFA6"
            width="30%"
            borderColor="#00BFA6"
            :loading="loading"
              borderRadius="10px"

          />
    </MiddleWrapper>
    <PhotoWrapper>
   <img src="@/assets/landpage/school.svg" alt="" />
      </PhotoWrapper>
    </FirstWrapper>
  </Wrapper>
</template>
<script>
import {
  Wrapper,
  HeaderWrapper,
  FirstWrapper,
  MiddleWrapper,
  PhotoWrapper,
  Title,
} from "./FirstSection.styles";
import Button from "@/components/button";
export default {
  components: {
    Wrapper,
    HeaderWrapper,
    FirstWrapper,
    MiddleWrapper,
    PhotoWrapper,
    Title,
    Button,
  },
};
</script>
