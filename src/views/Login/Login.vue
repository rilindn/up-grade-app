<template>
  <Wrapper>
    <Container id="container" :leftContainer="rightPanelShow">
      <FormContainer :rightPanel="rightPanelShow" :rightContainer="true">
        <Form @submit.prevent>
          <h1>{{ $t("login.staff.title") }}</h1>
          <SocialContainer>
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </SocialContainer>
          <span>{{ $t("login.externalLogin") }}</span>
          <input class="input" type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">{{ $t("login.forgotPsw") }}</a>
          <Button
            :title="$t('login.signInBtn')"
            :loading="loading"
            @onClick="login"
          />
        </Form>
      </FormContainer>
      <FormContainer :rightPanel="rightPanelShow" :leftContainer="true">
        <Form @submit.prevent>
          <h1>{{ $t("login.student.title") }}</h1>
          <SocialContainer>
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </SocialContainer>
          <span>{{ $t("login.externalLogin") }}</span>
          <input class="input" type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">{{ $t("login.forgotPsw") }}</a>
          <Button
            :title="$t('login.signInBtn')"
            :loading="loading"
            @onClick="login"
          />
        </Form>
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
  Form,
  SocialContainer,
} from "./Login.styles";
import Button from "@/components/button";
export default {
  data() {
    return {
      rightPanelShow: false,
      loading: false,
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
    Form,
    SocialContainer,
  },
  methods: {
    setRightPanel(val) {
      this.rightPanelShow = val;
    },
    login() {
      this.loading = true;
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve((this.loading = false));
        }, 2000);
      }).then(() => {
        this.$router.push("/home");
      });
    },
  },
};
</script>
<style scoped></style>
