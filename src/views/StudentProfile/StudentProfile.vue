<template>
  <Wrapper>
    <EditWrapper>
      <i @click="displayInputs = !displayInputs" class="far fa-edit"></i>
    </EditWrapper>
    <MiddleBox>
      <RightWrapper>
        <TopWrapper>
          <PhotoWrapper>
            <img src="@/assets/profile.jpeg" alt="logo" />
          </PhotoWrapper>
          <NameWrapper>
            <div></div>
            <p>Maria Ahshhs</p>
            <span>(Active Student)</span>
          </NameWrapper>
        </TopWrapper>
        <Form
          @submit="editProfile"
          :validation-schema="profileSchema"
          v-slot="{ errors }"
          :initial-values="formValues"
        >
          <Container>
            <ContainerColumn>
              <div>
                <DataField>
                  <p>{{ $t("studentProfile.id") }}:</p>
                  <span>19038128</span>
                </DataField>
                <DataField>
                  <p>{{ $t("studentProfile.studentEmail") }}:</p>
                  <span>maria@ubt-uni.com</span>
                </DataField>
                <DataField>
                  <p>{{ $t("studentProfile.generate") }}:</p>
                  <span>2019/2020</span>
                </DataField>
                <DataField>
                  <p>{{ $t("studentProfile.parentName") }}:</p>
                  <span>Alia Ahshsb</span>
                </DataField>
              </div>
            </ContainerColumn>
            <ContainerColumn>
              <div>
                <DataField>
                  <p>{{ $t("studentProfile.nationality") }}:</p>
                  <span>United States</span>
                </DataField>
                <DataField>
                  <p>{{ $t("studentProfile.citizenship") }}:</p>
                  <span>United States</span>
                </DataField>
                <div style="display: flex; flex-direction: column">
                  <DataField>
                    <p>{{ $t("studentProfile.place") }}:</p>
                    <span>New York,USA</span>
                  </DataField>
                  <InputField
                    v-if="displayInputs"
                    name="place"
                    :error="errors"
                    placeholder="Place"
                    type="place"
                  />
                </div>
                <div style="display: flex; flex-direction: column">
                  <DataField>
                    <p>{{ $t("studentProfile.zipcode") }}:</p>
                    <span>172520</span>
                  </DataField>
                  <InputField
                    v-if="displayInputs"
                    name="zipCode"
                    :error="errors"
                    placeholder="Zip Code"
                    type="zipCode"
                  />
                </div>
              </div>
            </ContainerColumn>
            <ContainerColumn>
              <div>
                <DataField>
                  <p>{{ $t("studentProfile.birthday") }}:</p>
                  <span>1 July 2000 (age 21)</span>
                </DataField>
                <DataField>
                  <p>{{ $t("studentProfile.gender") }}:</p>
                  <span>Female</span>
                </DataField>
                <div style="display: flex; flex-direction: column">
                  <DataField>
                    <p>{{ $t("studentProfile.personalEmail") }}:</p>
                    <span>marias@gmail.com</span>
                  </DataField>
                  <InputField
                    v-if="displayInputs"
                    :error="errors"
                    placeholder="Personal Email"
                    name="personalEmail"
                    type="personalEmail"
                  />
                </div>
                <div style="display: flex; flex-direction: column">
                  <DataField>
                    <p>{{ $t("studentProfile.phoneNumber") }}:</p>
                    <span>+323239939393</span>
                  </DataField>
                  <InputField
                    v-if="displayInputs"
                    name="phoneNumber"
                    :error="errors"
                    type="phoneNumber"
                  />
                </div>
              </div>
            </ContainerColumn>
          </Container>
          <SubmitButton
            v-if="displayInputs"
            title="Submit"
            :loading="loading"
            type="submit"
          />
        </Form>
      </RightWrapper>
    </MiddleBox>
  </Wrapper>
</template>
<script>
import {
  Wrapper,
  TopWrapper,
  MiddleBox,
  RightWrapper,
  PhotoWrapper,
  ContainerColumn,
  Container,
  NameWrapper,
  EditWrapper,
  SubmitButton,
  DataField,
} from "./StudentProfile.styles";
import InputField from "@/components/InputField";
import { Form } from "vee-validate";
import * as yup from "yup";
import { configure } from "vee-validate";

configure({
  validateOnBlur: true,
});
export default {
  components: {
    Wrapper,
    TopWrapper,
    MiddleBox,
    RightWrapper,
    PhotoWrapper,
    Container,
    NameWrapper,
    EditWrapper,
    Form,
    SubmitButton,
    InputField,
    DataField,
    ContainerColumn,
  },
  data() {
    return {
      displayInputs: false,
      role: "",
      profileSchema: yup.object({
        place: yup.string().label("Place").required(),
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
      formValues: {
        place: "New York,USA",
        phoneNumber: 323239939393,
        zipCode: 172520,
        personalEmail: "marias@gmail.com",
      },
    };
  },
};
</script>
