<template>
  <Wrapper>
       <HalfWrapper>
        <div>
        <h2 style="color:#2A9D8F;font-size:20px">{{ $t("landingPage.thirdSection.title") }}</h2>
        <h2 style="color:#6B6B6B;font-size:30px">{{ $t("landingPage.thirdSection.subTitle") }}</h2>
        </div>
        </HalfWrapper>
         <HeaderWrapper>
        <div style="">
        <img src="@/assets/watchUs.svg" alt=""  />
        </div>
       </HeaderWrapper>
       <MiddleWrapper>
           <FirstWrapper>
               <div>
                 <h2 >{{ $t("landingPage.thirdSection.serviceTitle") }}</h2>
                  <p>{{ $t("landingPage.thirdSection.serviceTitleDetails") }}</p>
                  <span >{{ $t("landingPage.thirdSection.serviceTitleDescription") }}</span>
               </div>
           <div style="padding-top:50px"> 
        <Button
            :title="$t('landingPage.thirdSection.buttonWatch')"
            backgroundColor="#00BFA6"
            width="30%"
            borderColor="#00BFA6"

          />
        </div>   
           </FirstWrapper>
           <SecondWrapper>
               <SecondMiddleWrapper>
            <Box>
                <div>
                 <img src="@/assets/landpage/box1.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.services.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.services.firstDescription") }}</p>
                 </div>
            </Box>
                <Box>
                <div>
                 <img src="@/assets/landpage/box1.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.services.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.services.firstDescription") }}</p>
                 </div>
            </Box>
                <Box>
                <div>
                 <img src="@/assets/landpage/box1.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.services.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.services.firstDescription") }}</p>
                 </div>
            </Box>
               </SecondMiddleWrapper>

     <FirstMiddleWrapper>
            <Box>
                <div>
                 <img src="@/assets/landpage/box1.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.services.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.services.firstDescription") }}</p>
                 </div>
            </Box>
                <Box>
                <div>
                 <img src="@/assets/landpage/box1.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.services.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.services.firstDescription") }}</p>
                 </div>
            </Box>
                <Box>
                <div>
                 <img src="@/assets/landpage/box1.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.services.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.services.firstDescription") }}</p>
                 </div>
            </Box>
               </FirstMiddleWrapper>
           </SecondWrapper>

       </MiddleWrapper>
   
  </Wrapper>
</template>
<script>
import { Wrapper,HeaderWrapper,HalfWrapper,MiddleWrapper,FirstWrapper,SecondWrapper,Box,SecondMiddleWrapper ,FirstMiddleWrapper} from "./ThirdSection.styles";
import Button from "@/components/button";
export default {
  components: {
    Wrapper,
    HeaderWrapper,
    HalfWrapper,
    MiddleWrapper,
    FirstWrapper,
    SecondWrapper,
    Box,
    SecondMiddleWrapper,
    FirstMiddleWrapper,
    Button
  },
};
</script>
