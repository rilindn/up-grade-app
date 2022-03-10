<template>
  <Wrapper>
    <TopWrapper>
      <TextWrapper>
        <h2>Preferences</h2>
        <span>We offer to you options. </span>
        <i> You can change your preferences!</i>
      </TextWrapper>
      <ImageWrapper>
        <img src="@/assets/preferences.svg" alt="" />
      </ImageWrapper>
    </TopWrapper>
    <BottomWrapper>
      <BottomBoxWrapper
        ><h3>Password</h3>
        <BoxContainer>
          <PasswordContainer>
            <InputField
              name="password"
              type="password"
              placeholder="Password"
            />
            <InputField
              name="password"
              type="password"
              placeholder="New password"
            />

            <InputField
              name="password"
              type="password"
              placeholder="Confirm new password"
            />
          </PasswordContainer>
          <SaveButton
            borderRadius="10px"
            :title="$t('save')"
            type="submit"
            height="30px"
            backgroundColor="#05C59A"
          />
        </BoxContainer>
      </BottomBoxWrapper>
      <BottomBoxWrapper
        ><h3>Avatar</h3>
        <BoxContainer></BoxContainer>
      </BottomBoxWrapper>
      <BottomBoxWrapper
        ><h3>Language</h3>
        <BoxContainer>
          <LanguageContainer>
            <img src="@/assets/languages.png" alt="" />
            <SelectInput
              :error="errors"
              name="language"
              placeholder="Language"
              :options="['English', 'Albania']"
            />
          </LanguageContainer>
          <SaveButton
            borderRadius="10px"
            :title="$t('save')"
            type="submit"
            height="30px"
            backgroundColor="#05C59A"
          />
        </BoxContainer>
      </BottomBoxWrapper>
    </BottomWrapper>
  </Wrapper>
</template>
<script>
import {
  Wrapper,
  TopWrapper,
  BottomWrapper,
  ImageWrapper,
  TextWrapper,
  BottomBoxWrapper,
  BoxContainer,
  PasswordContainer,
  SaveButton,
  LanguageContainer,
} from "./Settings.styles";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
export default {
  components: {
    Wrapper,
    TopWrapper,
    BottomWrapper,
    ImageWrapper,
    TextWrapper,
    BottomBoxWrapper,
    BoxContainer,
    PasswordContainer,
    InputField,
    SaveButton,
    LanguageContainer,
    SelectInput,
  },
  data() {},
};
</script>
<style></style>
