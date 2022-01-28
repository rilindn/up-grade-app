<template>
  <Wrapper>
    <HeaderWrapper>
      <TextWrapper>
    <h2>{{ $t("landingPage.secondSection.title") }}</h2>
      </TextWrapper>
    </HeaderWrapper>
    <MiddleWrapper>
      <PhotoWrapper>
         <img src="@/assets/AboutUs.svg" alt=""  />
      </PhotoWrapper>
      <AboutWrapper>
        <div>
        <h2>{{ $t("landingPage.secondSection.aboutUs") }}</h2>
        <p>{{ $t("landingPage.secondSection.aboutUsText") }}</p>
       <div>
            <div style="padding-top:27px;padding-right:10px">
              <img src="@/assets/tick.svg" alt="" width="20" height="20"/>
            </div>
           <p>{{ $t("landingPage.secondSection.aboutUsDetails") }}</p>
       </div>
        <div >
            <div style="padding-top:27px;padding-right:10px">
              <img src="@/assets/tick.svg" alt="" width="20" height="20"/>
            </div>
           <p>{{ $t("landingPage.secondSection.aboutUsDetails") }}</p>
       </div>
       </div>
       <div style="padding-top:20px"> 
        <Button
            :title="$t('landingPage.secondSection.button')"
            backgroundColor="#00BFA6"
            width="25%"
            borderColor="#00BFA6"
            borderRadius="10px"
          />
        </div>   
      </AboutWrapper>
    </MiddleWrapper>
  </Wrapper>
</template>
<script>
import { Wrapper,HeaderWrapper,TextWrapper ,MiddleWrapper,PhotoWrapper,AboutWrapper} from "./SecondSection.styles";
import Button from "@/components/button";
export default {
  components: {
    Wrapper,
    HeaderWrapper,
    TextWrapper,
    MiddleWrapper,
    PhotoWrapper,
    AboutWrapper,
    Button
  },
};
</script>
