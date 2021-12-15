<template>
  <Wrapper>
    <Container id="container" :leftContainer="rightPanelShow">
      <FormContainer :rightPanel="rightPanelShow" :rightContainer="true">
        <Form action="#">
          <h1>Login as Staff</h1>
          <SocialContainer>
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </SocialContainer>
          <span>or use your account</span>
          <input class="input" type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <Button id="signInStaff" title="Sign In" />
        </Form>
      </FormContainer>
      <FormContainer :rightPanel="rightPanelShow" :leftContainer="true">
        <Form action="#">
          <h1>Login as Student</h1>
          <SocialContainer>
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </SocialContainer>
          <span>or use your account</span>
          <input class="input" type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <Button title="Sign In" />
        </Form>
      </FormContainer>
      <OverlayContainer :rightPanel="rightPanelShow">
        <Overlay :rightPanel="rightPanelShow">
          <OverlayPanel :rightOverlay="true">
            <h1>Staff or Teacher?</h1>
            <p>If you are a staff or teacher please slide to the other form</p>
            <div style="padding: 27px">
              <img src="@/assets/teacher.svg" alt="" width="100" />
            </div>
            <Button
              @onClick="setRightPanel(true)"
              title="Sign In as Staff"
              bgColor="transparent"
              borderColor="#fff"
            />
          </OverlayPanel>
          <OverlayPanel>
            <h1>Student or Parent?</h1>
            <p>If you are a student or parent please slide to the other form</p>
            <div style="padding: 27px">
              <img src="@/assets/student.svg" alt="" width="100" />
            </div>
            <Button
              @onClick="setRightPanel(false)"
              title="Sign In as Staff"
              bgColor="transparent"
              borderColor="#fff"
            >
              Sign In as Student
            </Button>
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
  },
};
</script>
<style scoped></style>
