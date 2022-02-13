<template>
  <Wrapper>
     <EditWrapper>
       <button v-on:click="seen = !seen" style="border:none">
       <i class="far fa-edit"></i>
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
            <Form
        @submit="editProfile"
        :validation-schema="profileSchema"
        v-slot="{ errors }">
       <Container>
 
           <FirstContainer>
             <div>
               <div><p>{{ $t("studentProfile.id") }}:</p><span>19038128</span></div>
               <div> <p>{{ $t("studentProfile.studentEmail") }}:</p><span>maria@ubt-uni.com</span></div>
               <div><p>{{ $t("studentProfile.generate") }}:</p><span>2019/2020</span></div>
               <div><p>{{ $t("studentProfile.parentName") }}:</p><span>Alia Ahshsb</span></div>
            </div>
           </FirstContainer>
            <SecondContainer>
             <div> 
            <div><div><p>{{ $t("studentProfile.nationality") }}:</p><span>United States</span></div></div>
            <div><div><p>{{ $t("studentProfile.citizenship") }}:</p><span>United States</span></div></div>
            <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.place") }}:</p><span>New York,USA</span></div>
            <InputFieldWrapper v-if="seen">
           <InputField
            v-if="seen"
            name="place"
            :error="errors"
            placeholder="Place"
            type="place"
            />
             <i class="far fa-check-square"></i>
            </InputFieldWrapper>
            </div>
            <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.zipcode") }}:</p><span>172520</span></div>
            <InputFieldWrapper v-if="seen">
            <InputField
            v-if="seen"
            name="zipCode"
            :error="errors"
            placeholder="Zip Code"
            type="zipCode"
            />
            <i class="far fa-check-square"></i>
            </InputFieldWrapper>
            </div>
            </div>
            </SecondContainer>
            <ThirdContainer>
             <div>
            <div><div><p>{{ $t("studentProfile.birthday") }}:</p><span>1 July  2000 (age 21)</span></div></div>
            <div> <div><p>{{ $t("studentProfile.gender") }}:</p><span>Female</span></div></div>
            <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.personalEmail") }}:</p><span>marias@gmail.com</span></div>
           <InputFieldWrapper v-if="seen">
            <InputField
            v-if="seen"
            :error="errors"
            placeholder="Personal Email"
            name="personalEmail"
            type="personalEmail"
            />
            <i class="far fa-check-square"></i>
             </InputFieldWrapper>
            </div>
            <div style="display:flex;flex-direction:column"> <div><p>{{ $t("studentProfile.phoneNumber") }}:</p><span>+323239939393</span></div>
            <InputFieldWrapper v-if="seen">
            <InputField
            v-if="seen"
            name="phoneNumber"
            :error="errors"
            type="phoneNumber"
            placeholder="Phone Number"
            />
           <i class="far fa-check-square"></i>
             </InputFieldWrapper>
            </div>  
            </div>
            </ThirdContainer>
            
      </Container>
         </Form>
    </RightWrapper>
    </MiddleBox>
        
  </Wrapper>
</template>
<script>
import { Wrapper,TopWrapper,MiddleBox,RightWrapper ,PhotoWrapper,FirstContainer,SecondContainer,Container,NameWrapper,EditWrapper,ThirdContainer,InputFieldWrapper} from "./StudentProfile.styles";
import InputField from "@/components/InputField";
import { Form } from "vee-validate";
import * as yup from "yup";
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
    Form,
    InputFieldWrapper,
    InputField,
  
  },
    data() {
    return {
      seen: false,
       role: "",
      profileSchema: yup.object({
        place: yup
          .string()
          .label("Place")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        phoneNumber: yup
          .string()
          .label("Phone Number")
          .matches(/^[0-9]*$/, "Only numbers are allowed for this field ")
          .required(),
        zipCode: yup
          .string()
          .label("Zip Code")
          .matches(/^[0-9]*$/, "Only numbers are allowed for this field ")
          .required(),
        personalEmail: yup.string().required().email().label("Email"),
      }),
    };  
  },

 
};
</script>
