<template>
  <Wrapper>
    <FirstWrapper>
       <img src="@/assets/landpage/message.svg" alt="" width="400"  style="margin-left:100px;margin-top:100px" />
         <div style="position:absolute;width:40%;">
          <h2 >{{ $t("landingPage.fourthSection.title") }}</h2>
           <p>{{ $t("landingPage.fourthSection.subTitle") }}</p>
          <span >{{ $t("landingPage.fourthSection.testiomonialDescription") }}</span>
         </div>
    </FirstWrapper>
    <SecondWrapper>
     <Splide :options="{ rewind: true }" >
    <SplideSlide >
       <TextBox>
          <MiddleBox>
            <div> 
            <img src="@/assets/landpage/profile.svg" alt="" width="90"/>
            <div>
                <h1>{{ $t("landingPage.fourthSection.firstName") }}</h1>
                <p>{{ $t("landingPage.fourthSection.firstType") }}</p>
            </div>
             <img src="@/assets/landpage/quote.svg" alt=""  width="40"/>
          </div>
          <span>{{ $t("landingPage.fourthSection.description") }}</span>
          </MiddleBox>
          </TextBox>
      </SplideSlide> 
       <SplideSlide>
          <TextBox>
             <MiddleBox>
              <div> 
              <img src="@/assets/landpage/profile.svg" alt="" width="90"/>
              <div>
                <h1>{{ $t("landingPage.fourthSection.firstName") }}</h1>
                <p>{{ $t("landingPage.fourthSection.firstType") }}</p>
              </div>
             <img src="@/assets/landpage/quote.svg" alt=""  width="40"/>
             </div>
              <span>{{ $t("landingPage.fourthSection.description") }}</span>
            </MiddleBox>
          </TextBox>
        </SplideSlide>
        <SplideSlide>
          <TextBox>
             <MiddleBox>
              <div> 
              <img src="@/assets/landpage/profile.svg" alt="" width="90"/>
              <div>
                <h1>{{ $t("landingPage.fourthSection.firstName") }}</h1>
                <p>{{ $t("landingPage.fourthSection.firstType") }}</p>
              </div>
             <img src="@/assets/landpage/quote.svg" alt=""  width="40"/>
             </div>
              <span>{{ $t("landingPage.fourthSection.description") }}</span>
            </MiddleBox>
          </TextBox>
        </SplideSlide>
    </Splide>
    </SecondWrapper>
  </Wrapper>
</template>
<script>
import { Wrapper,FirstWrapper,SecondWrapper,TextBox,MiddleBox } from "./FourthSection.styles";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Button from "@/components/button";
export default {
  components: { 
    Wrapper,
    FirstWrapper,
    SecondWrapper,
    TextBox,
    MiddleBox,
    Button,
    Splide, 
    SplideSlide
  },
 
};
</script>
