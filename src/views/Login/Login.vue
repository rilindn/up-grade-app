<template>
  <div class="wrapper">
    <div
      class="container"
      id="container"
      v-bind:class="{ 'right-panel-active': rightPanelShow }"
    >
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>Login as Staff</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input class="input" type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Login as Student</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input class="input" type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Staff or Teacher?</h1>
            <p>If you are a staff or teacher please slide to the other form</p>
            <div style="padding-bottom: 20px">
              <img src="../../assets/teacher.svg" alt="" width="100" />
            </div>
            <button
              class="ghost"
              id="signInStaff"
              @click="rightPanelShow = true"
            >
              Sign In as Staff
            </button>
          </div>
          <div class="overlay-panel overlay-left">
            <h1>Student or Parent?</h1>
            <p>If you are a student or parent please slide to the other form</p>
            <div style="padding-bottom: 20px">
              <img src="../../assets/student.svg" alt="" width="100" />
            </div>
            <button
              class="ghost"
              id="signInTeacher"
              @click="rightPanelShow = false"
            >
              Sign In as Student
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      rightPanelShow: false,
    };
  },
};
</script>
<style scoped>
@import "./Login.styles.scss";
</style>
