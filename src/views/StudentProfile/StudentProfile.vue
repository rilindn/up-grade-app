<template>
  <Wrapper>
     <EditWrapper>
       <button v-on:click="seen = !seen" style="border:none">
        <p >Edit Profile</p>
       </button>
      </EditWrapper>
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
               <div> <p>{{ $t("studentProfile.studentEmail") }}:</p><span>maria@ubt-uni.com</span></div>
               <div><p>{{ $t("studentProfile.birthday") }}:</p><span>1 July  2000 (age 21)</span></div>
               <div><p>{{ $t("studentProfile.gender") }}:</p><span>Female</span></div>
            </div>
           </FirstContainer>
            <SecondContainer>
             <div>
             <div> <div><p>{{ $t("studentProfile.nationality") }}:</p><span>United States</span></div></div>
              <div>   <div><p>{{ $t("studentProfile.citizenship") }}:</p><span>United States</span></div></div>
               <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.place") }}:</p><span>New York,USA</span></div>
           <InputField
            v-if="seen"
            name="zip code"
            :error="errors"
            placeholder="Password"
            />
            </div>
             </div>
            </SecondContainer>
                <ThirdContainer>
             <div>
                 <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.zipcode") }}:</p><span>172520</span></div>
            <InputField
           v-if="seen"
            name="zip code"
            :error="errors"
            placeholder="Password"
            />
            </div>
                <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.personalEmail") }}:</p><span>marias@gmail.com</span></div>
                  <InputField
            v-if="seen"
            name="zip code"
            :error="errors"
            placeholder="Password"
            /></div>
                <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.phoneNumber") }}:</p><span>+323239939393</span></div>
                  <InputField
            v-if="seen"
            name="zip code"
            :error="errors"
            placeholder="Password"
            /></div>  
             </div>
            </ThirdContainer>
      </Container>
    </RightWrapper>
    </MiddleBox>
        
  </Wrapper>
</template>
<script>
import { Wrapper,TopWrapper,MiddleBox,RightWrapper ,PhotoWrapper,FirstContainer,SecondContainer,Container,NameWrapper,EditWrapper,ThirdContainer} from "./StudentProfile.styles";
import InputField from "@/components/InputField";
export default {
  components: {
    Wrapper,
    TopWrapper,
    MiddleBox,
    RightWrapper,
    PhotoWrapper,
    FirstContainer,
    SecondContainer,
    Container,
    NameWrapper,
    EditWrapper,
    ThirdContainer,
    InputField,
  
  },
    data() {
    return {
      seen: false,
    };
  },

 
};
</script>
