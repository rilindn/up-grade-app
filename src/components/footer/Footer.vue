<template>
  <Wrapper>
    <FirstWrapper>
      <h4>FOLLOW US</h4>
      <FirstMiddleWrapper>
      <span><i class="fab fa-facebook-f"></i>Facebook</span>
      <span><i class="fab fa-twitter"></i>Twitter</span>
      <span><i class="fab fa-linkedin-in"></i>Linked In</span>
     <span> <i class="fab fa-instagram"></i>Instagram</span>
      </FirstMiddleWrapper>
    </FirstWrapper>
    <FirstWrapper>
      <h4> GETTING ABOUT</h4>
       <List>
      <span>Home</span>
      <span>Join</span>
      <span>Contact Us</span>
      <span>List Stuff</span>
      <span>Help</span>
      </List>
    </FirstWrapper>
    <FirstWrapper>
     <h4>IMPORTANT STUFF</h4> 
      <List>
      <span>About E-Learning</span>
      <span>Privacy Policy</span>
      <span>Terms of Use</span>
      <span>Stuff you can't list</span>
      </List>
    </FirstWrapper>
    <FirstWrapper>
      <h4>HELPFUL TIPS</h4>
      <List>
      <span>Etiquette</span>
      <span>E-Learning Policy</span>
      <span>E-Learning Glossary</span>
      </List>
    </FirstWrapper>
  </Wrapper>
</template>

<script>
import { Wrapper, FirstWrapper,FirstMiddleWrapper, List} from "./Footer.styles";
export default {
  components: {
    Wrapper,
    FirstWrapper,
    FirstMiddleWrapper,
    List,
  },
};
</script>

<style scoped></style>
