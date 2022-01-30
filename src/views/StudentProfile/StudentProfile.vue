<template>
  <Wrapper>
    <TopWrapper>
      <Profile>
      <PhotoWrapper>
        <img src="@/assets/profile.jpeg" alt="" width="120" />
      </PhotoWrapper>
      <ProfileInfo>
            <FirstContainer>
              <div><h1>Marie Diear</h1><h1 style="color:red"> (Active Student)</h1></div>
              <div><p>Birthday:</p><p style="color:red">1 July  2000 (age 21)</p></div>
              <div><p>Nationaloty:</p><p style="color:red">United States</p></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam fringilla nunc a dui aliquet ultrices.</p>
          </FirstContainer>
          <SecondContainer>
             <div>
             <div><img src="@/assets/location.svg"  /><p>New York,USA</p></div>
             </div>
            </SecondContainer>
      </ProfileInfo>
      </Profile>
    </TopWrapper>
    <MiddleBox>
     <RightWrapper>
    <p>THIS ISSS PROFILE PAGE</p>
    </RightWrapper>
         <LeftWrapper>
           <div>
    <h1>Contact Info</h1>
     <div> <i class="far fa-envelope color"  style="color:#d7d7d7"></i><p>Personal Email</p></div>
      <span>maria123@gmail.com</span>
     <div><i class="fas fa-phone-square color" style="color:#d7d7d7"></i><p>Phone Number</p></div>
      <span>+2329939939399</span>
      <div> <i class="far fa-envelope color"  style="color:#d7d7d7"></i> <p>Student Email</p></div>
      <span>maria123@std-uni.edu</span>
           </div>
    </LeftWrapper>
    </MiddleBox>
  </Wrapper>
</template>
<script>
import { Wrapper,TopWrapper,MiddleBox,RightWrapper ,LeftWrapper,Profile,PhotoWrapper,ProfileInfo,FirstContainer,SecondContainer} from "./StudentProfile.styles";
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
    SecondContainer
  
  },
};
</script>
