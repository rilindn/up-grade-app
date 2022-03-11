<template>
  <Wrapper>
    <TopWrapper>
      <TextWrapper>
        <h2>{{ $t("settings.preferences") }}</h2>
        <span>{{ $t("settings.offer") }}. </span>
        <i> {{ $t("settings.changePreferences") }}!</i>
      </TextWrapper>
      <ImageWrapper>
        <img src="@/assets/preferences.svg" alt="" />
      </ImageWrapper>
    </TopWrapper>
    <BottomWrapper>
      <BottomBoxWrapper
        ><h3>{{ $t("settings.avatar") }}</h3>
        <BoxContainer>
          <AvatarContainer>
            <Avatar :size="75" :name="name" @click="triggerMenu" />
            <InputField name="color" type="color" placeholder="Color" />
          </AvatarContainer>
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
        ><h3>{{ $t("settings.password") }}</h3>
        <BoxContainer>
          <PasswordContainer>
            <InputField
              name="password"
              type="password"
              :placeholder="$t('settings.actualPassword')"
            />
            <InputField
              name="password"
              type="password"
              :placeholder="$t('settings.newPassword')"
            />
            <InputField
              name="password"
              type="password"
              :placeholder="$t('settings.confirmPassword')"
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
        ><h3>{{ $t("settings.language") }}</h3>
        <BoxContainer>
          <LanguageContainer>
            <img src="@/assets/languages.png" alt="" />
            <SelectInput
              :error="errors"
              name="language"
              :placeholder="$t('settings.languagePlaceholder')"
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
  AvatarContainer,
} from "./Settings.styles";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import Avatar from "../../components/Avatar";
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
    Avatar,
    AvatarContainer,
  },
  data() {
    return {
      name: this.$store.state.loggedUser.name,
    };
  },
};
</script>
<style></style>
