<template>
  <Wrapper>
    <Container id="container" :leftContainer="rightPanelShow">
      <FormContainer :rightPanel="rightPanelShow" :rightContainer="true">
        <FormStyled
          @submit="login"
          :validation-schema="loginSchema"
          v-slot="{ errors }"
        >
          <h1>{{ $t("login.staff.title") }}</h1>
          <SocialContainer>
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </SocialContainer>
          <span>{{ $t("login.externalLogin") }}</span>
          <InputField
            name="email"
            type="email"
            :error="errors"
            placeholder="Email"
          />
          <InputField
            name="password"
            type="password"
            :error="errors"
            placeholder="Password"
          />
          <a href="#">{{ $t("login.forgotPsw") }}</a>
          <Button
            :title="$t('login.signInBtn')"
            :loading="loading"
            type="submit"
          />
        </FormStyled>
      </FormContainer>
      <FormContainer :rightPanel="rightPanelShow" :leftContainer="true">
        <FormStyled
          @submit="login"
          :validation-schema="loginSchema"
          v-slot="{ errors }"
        >
          <h1>{{ $t("login.student.title") }}</h1>
          <SocialContainer>
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </SocialContainer>
          <span>{{ $t("login.externalLogin") }}</span>
          <InputField
            name="email"
            type="email"
            :error="errors"
            placeholder="Email"
          />
          <InputField
            name="password"
            type="password"
            :error="errors"
            placeholder="Password"
          />
          <a href="#">{{ $t("login.forgotPsw") }}</a>
          <Button
            :title="$t('login.signInBtn')"
            :loading="loading"
            type="submit"
          />
        </FormStyled>
      </FormContainer>
      <OverlayContainer :rightPanel="rightPanelShow">
        <Overlay :rightPanel="rightPanelShow">
          <OverlayPanel :rightOverlay="true">
            <h1>{{ $t("login.student.overlay.title") }}</h1>
            <p>{{ $t("login.student.overlay.text") }}</p>
            <div style="padding: 27px">
              <img src="@/assets/teacher.svg" alt="" width="100" />
            </div>
            <Button
              @onClick="setRightPanel(true)"
              :title="$t('login.student.overlay.btn')"
              bgColor="transparent"
              borderColor="#fff"
            />
          </OverlayPanel>
          <OverlayPanel>
            <h1>{{ $t("login.staff.overlay.title") }}</h1>
            <p>{{ $t("login.staff.overlay.text") }}</p>
            <div style="padding: 27px">
              <img src="@/assets/student.svg" alt="" width="100" />
            </div>
            <Button
              @onClick="setRightPanel(false)"
              :title="$t('login.staff.overlay.btn')"
              bgColor="transparent"
              borderColor="#fff"
            />
          </OverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  </Wrapper>
</template>
<script>
import {
  Wrapper,
  Container,
  FormContainer,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  SocialContainer,
  FormStyled,
} from "./Login.styles";
import InputField from "@/components/InputField";
import Button from "@/components/button";
import { configure } from "vee-validate";
import * as yup from "yup";

configure({
  validateOnBlur: true,
});
export default {
  data() {
    return {
      rightPanelShow: false,
      loading: false,
      loginSchema: yup.object({
        email: yup.string().required().email(),
        // can define custom error message
        password: yup
          .string()
          .required("Password is a required field")
          .min(8, "Must be 8 chars"),
      }),
    };
  },
  components: {
    Wrapper,
    Button,
    Container,
    FormContainer,
    OverlayContainer,
    Overlay,
    OverlayPanel,
    SocialContainer,
    FormStyled,
    InputField,
  },
  methods: {
    setRightPanel(val) {
      this.rightPanelShow = val;
    },
    login(values) {
      console.log(values);
      this.loading = true;
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve((this.loading = false));
        }, 2000);
      }).then(() => {
        this.$store.commit("SET_LOGGED_USER", values);
        this.$router.push("/");
      });
    },
  },
};
</script>
<style scoped></style>
