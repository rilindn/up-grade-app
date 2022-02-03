<template>
  <Wrapper>
    <MiddleBox>
     <RightWrapper>
       <TopWrapper>
       <PhotoWrapper>
          <img src="@/assets/profile.jpeg" width="140"  alt="logo" />
       </PhotoWrapper>
         <NameWrapper>
        <div><div></div><p>Maria Ahshhs</p><span>(Active Student)</span></div>
      </NameWrapper>
       </TopWrapper>
       <Container>
           <FirstContainer>
             <div>
                 <div><p>{{ $t("studentProfile.id") }}:</p><span>19038128</span></div>
              <div><p>{{ $t("studentProfile.birthday") }}:</p><span>1 July  2000 (age 21)</span></div>
              <div><p>{{ $t("studentProfile.nationality") }}:</p><span>United States</span></div>
                 <div><p>{{ $t("studentProfile.citizenship") }}:</p><span>United States</span></div>
               <div><p>{{ $t("studentProfile.gender") }}:</p><span>Female</span></div>
            </div>
           </FirstContainer>
            <SecondContainer>
             <div>
            <div><p>{{ $t("studentProfile.place") }}:</p><span>New York,USA</span></div>
           <div><p>{{ $t("studentProfile.zipcode") }}:</p><span>172520</span></div>
             </div>
            </SecondContainer>
      </Container>
    </RightWrapper>
      <LeftWrapper>
        <div>
         <h1>Contact Info</h1>
         <div> <i class="far fa-envelope color"  style="color:#d7d7d7"></i><p>{{ $t("studentProfile.personalEmail") }}</p></div>
         <span>marias@gmail.com</span>
         <div><i class="fas fa-phone-square color" style="color:#d7d7d7"></i><p>{{ $t("studentProfile.phoneNumber") }}</p></div>
         <span>+323239939393</span>
         <div> <i class="far fa-envelope color"  style="color:#d7d7d7"></i> <p>{{ $t("studentProfile.studentEmail") }}</p></div>
         <span>maria@ubt-uni.com</span>
        </div>
     </LeftWrapper>
    </MiddleBox>
  </Wrapper>
</template>
<script>
import { Wrapper,TopWrapper,MiddleBox,RightWrapper ,LeftWrapper,PhotoWrapper,FirstContainer,SecondContainer,Container,NameWrapper} from "./StudentProfile.styles";

export default {
  components: {
    Wrapper,
    TopWrapper,
    MiddleBox,
    RightWrapper,
    LeftWrapper,
    PhotoWrapper,
    FirstContainer,
    SecondContainer,
    Container,
    NameWrapper
  
  },
 
};
</script>
