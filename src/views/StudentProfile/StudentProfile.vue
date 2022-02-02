<template>
  <Wrapper>
    <MiddleBox>
     <RightWrapper>
       <TopWrapper>
       <PhotoWrapper>
          <img src="@/assets/profile.jpeg" width="140"  alt="logo" />
       </PhotoWrapper>
         <NameWrapper>
        <div><div></div><p>{{ $t("studentProfile.name") }}</p><span>{{ $t("studentProfile.active") }}</span></div>
      </NameWrapper>
       </TopWrapper>
       <Container>
           <FirstContainer>
             <div>
                 <div><p>{{ $t("studentProfile.id") }}:</p><span>{{ $t("studentProfile.idNr") }}</span></div>
              <div><p>{{ $t("studentProfile.birthday") }}:</p><span>{{ $t("studentProfile.date") }}</span></div>
              <div><p>{{ $t("studentProfile.nationality") }}:</p><span>{{ $t("studentProfile.nationalityPlace") }}</span></div>
                 <div><p>{{ $t("studentProfile.citizenship") }}:</p><span>{{ $t("studentProfile.citizenshipPlace") }}</span></div>
               <div><p>{{ $t("studentProfile.gender") }}:</p><span>{{ $t("studentProfile.genderType") }}</span></div>
            </div>
           </FirstContainer>
            <SecondContainer>
             <div>
            <div><p>{{ $t("studentProfile.place") }}:</p><span>{{ $t("studentProfile.placeName") }}</span></div>
           <div><p>{{ $t("studentProfile.zipcode") }}:</p><span>{{ $t("studentProfile.zipcodeNumber") }}</span></div>
             </div>
            </SecondContainer>
      </Container>
    </RightWrapper>
      <LeftWrapper>
        <div>
         <h1>Contact Info</h1>
         <div> <i class="far fa-envelope color"  style="color:#d7d7d7"></i><p>{{ $t("studentProfile.personalEmail") }}</p></div>
         <span>{{ $t("studentProfile.personalEmailText") }}</span>
         <div><i class="fas fa-phone-square color" style="color:#d7d7d7"></i><p>{{ $t("studentProfile.phoneNumber") }}</p></div>
         <span>{{ $t("studentProfile.phoneNumberNr") }}</span>
         <div> <i class="far fa-envelope color"  style="color:#d7d7d7"></i> <p>{{ $t("studentProfile.studentEmail") }}</p></div>
         <span>{{ $t("studentProfile.studentEmailText") }}</span>
        </div>
     </LeftWrapper>
    </MiddleBox>
  </Wrapper>
</template>
<script>
import { Wrapper,TopWrapper,MiddleBox,RightWrapper ,LeftWrapper,Profile,PhotoWrapper,ProfileInfo,FirstContainer,SecondContainer,TopNavigation,Container,NameWrapper} from "./StudentProfile.styles";
// import { basicItems } from "./TopNavigationItems.config";
export default {
  components: {
    Wrapper,
    TopWrapper,
    MiddleBox,
    RightWrapper,
    LeftWrapper,
    PhotoWrapper,
    Profile,
    ProfileInfo,
    FirstContainer,
    SecondContainer,
    TopNavigation,
    Container,
    NameWrapper
  
  },
   data() {
    return {
     
      topNavigationItems: [],
    isHidden: false
    };
  },
 
};
</script>
