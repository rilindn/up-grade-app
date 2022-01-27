<template>
  <Wrapper>
       <HalfWrapper>
        <div>
        <h2>{{ $t("landingPage.thirdSection.title") }}</h2>
        <h1>{{ $t("landingPage.thirdSection.subTitle") }}</h1>
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
            borderRadius="10px"
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
                 <img src="@/assets/landpage/schoolarship.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.schoolarship.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.schoolarship.firstDescription") }}</p>
                 </div>
            </Box>
                <Box>
                <div>
                 <img src="@/assets/landpage/booklibrary.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.booklibrary.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.booklibrary.firstDescription") }}</p>
                 </div>
            </Box>
               </SecondMiddleWrapper>

     <FirstMiddleWrapper>
            <Box>
                <div>
                 <img src="@/assets/landpage/onlineclasses.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.onlieClasses.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.onlieClasses.firstDescription") }}</p>
                 </div>
            </Box>
                <Box>
                <div>
                 <img src="@/assets/landpage/homeprojects.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.homeProjects.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.homeProjects.firstDescription") }}</p>
                 </div>
            </Box>
                <Box>
                <div>
                 <img src="@/assets/landpage/support.svg" alt="" width="65" />
                 <h1>{{ $t("landingPage.thirdSection.support.firstTitle") }}</h1>
                 <p>{{ $t("landingPage.thirdSection.support.firstDescription") }}</p>
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
