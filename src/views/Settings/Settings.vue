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
        <FormStyled @submit="editAvatar" :initial-values="{ avatarColor }">
          <AvatarContainer>
            <Avatar :size="75" :name="name" :color="avatarColor" />
            <InputFieldStyled
              name="avatarColor"
              type="color"
              placeholder="Color"
              v-model="avatarColor"
            />
          </AvatarContainer>
          <SaveButton
            borderRadius="10px"
            :title="$t('save')"
            type="submit"
            height="30px"
            backgroundColor="#05C59A"
          />
        </FormStyled>
      </BottomBoxWrapper>
      <BottomBoxWrapper
        ><h3>{{ $t("settings.password") }}</h3>
        <FormStyled
          @submit="changePassword"
          v-slot="{ errors }"
          :validation-schema="changePswSchema"
        >
          <PasswordContainer>
            <InputField
              name="currentPassword"
              type="password"
              :error="errors"
              :placeholder="$t('settings.actualPassword')"
            />
            <InputField
              name="newPassword"
              type="password"
              :error="errors"
              :placeholder="$t('settings.newPassword')"
            />
            <InputField
              name="confirmNewPassword"
              type="password"
              :error="errors"
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
        </FormStyled>
      </BottomBoxWrapper>

      <BottomBoxWrapper
        ><h3>{{ $t("settings.language") }}</h3>
        <FormStyled
          :validation-schema="changeLanguageSchema"
          @submit="changeLanguage"
        >
          <LanguageContainer>
            <img src="@/assets/languages.png" alt="" />
            <SelectInput
              :error="errors"
              name="language"
              :defaultValue="formatedLanguage()"
              :placeholder="$t('settings.languagePlaceholder')"
              :options="['English', 'Albanian']"
            />
          </LanguageContainer>
          <SaveButton
            borderRadius="10px"
            :title="$t('save')"
            type="submit"
            height="30px"
            backgroundColor="#05C59A"
          />
        </FormStyled>
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
  FormStyled,
  PasswordContainer,
  SaveButton,
  LanguageContainer,
  AvatarContainer,
  InputFieldStyled,
} from "./Settings.styles";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import Avatar from "../../components/Avatar";
import * as yup from "yup";
import {
  editAvatarColor,
  editPassword,
  editLanguage,
} from "../../api/ApiMethods";
export default {
  components: {
    Wrapper,
    TopWrapper,
    BottomWrapper,
    ImageWrapper,
    TextWrapper,
    BottomBoxWrapper,
    FormStyled,
    PasswordContainer,
    InputField,
    SaveButton,
    LanguageContainer,
    SelectInput,
    Avatar,
    AvatarContainer,
    InputFieldStyled,
  },
  data() {
    return {
      name: this.$store.state.loggedUser.name,
      avatarColor: this.$store.getters.loggedUser.avatarColor,
      language: this.$store.getters.loggedUser.language,
      id: this.$store.state.loggedUser.id,
      changePswSchema: yup.object({
        currentPassword: yup
          .string()
          .required()
          .min(8)
          .label("Current password"),
        newPassword: yup.string().required().min(8).label("New password"),
        confirmNewPassword: yup
          .string()
          .required()
          .label("Confirm password")
          .oneOf([yup.ref("newPassword")], "Your passwords do not match."),
      }),
      changeLanguageSchema: yup.object({
        language: yup.string().required().label("Language"),
      }),
    };
  },
  methods: {
    async editAvatar(values) {
      this.loading = true;
      try {
        const result = await editAvatarColor(this.id, values);
        if (result?.status === 200) {
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Avatar color updated successfully!",
          });
        } else {
          this.$notify({
            type: "error",
            duration: 2000,
            text: "Please try again!",
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async changePassword(values) {
      const { confirmNewPassword, ...payload } = values;
      try {
        const result = await editPassword(this.id, payload);
        window.location.reload();
        if (result?.status === 200) {
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Password updated successfully!",
          });
        } else {
          this.$notify({
            type: "error",
            duration: 2000,
            text: result?.response?.data,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async changeLanguage(values) {
      const formatedValue =
        values &&
        (values.language === "Albanian"
          ? { language: "al" }
          : { language: "en" });
      try {
        const result = await editLanguage(this.id, formatedValue);
        window.location.reload();
        if (result?.status === 200) {
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Language updated successfully!",
          });
        } else {
          this.$notify({
            type: "error",
            duration: 2000,
            text: result?.response?.data,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    formatedLanguage() {
      let result = "";
      if (this.language === "en") result = "English";
      if (this.language === "al") result = "Albanian";
      return result;
    },
  },
};
</script>
<style></style>
