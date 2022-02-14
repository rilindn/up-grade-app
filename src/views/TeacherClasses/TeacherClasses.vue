<template>
  <Wrapper>
    <Container>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-green300)"
          title="First grade"
          subTitle="I"
        />
      </SubContainer>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-pink100)"
          title="Second grade"
          subTitle="II"
        />
      </SubContainer>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-blue100)"
          title="Third grade"
          subTitle="III"
        />
      </SubContainer>
    </Container>
    <Container>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-pink200)"
          title="Fourth grade"
          subTitle="IV"
        />
      </SubContainer>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-grey300)"
          title="Fifth grade"
          subTitle="V"
        />
      </SubContainer>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-yellow100)"
          title="Sixth grade"
          subTitle="VI"
        />
      </SubContainer>
    </Container>
    <Container>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-brown100)"
          title="Seventh grade"
          subTitle="VII"
        />
      </SubContainer>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-green50)"
          title="Eighth grade"
          subTitle="VIII"
        />
      </SubContainer>
      <SubContainer>
        <TeacherClass
          bgColor="var(--va-orange100)"
          title="Ninth grade"
          subTitle="IX"
        />
      </SubContainer>
    </Container>
  </Wrapper>
</template>
<script>

import TeacherClass from "../../components/teacherClass";

import { Wrapper, Container, SubContainer } from "./TeacherClasses.styles";

export default {
  components: {
    TeacherClass,
    Wrapper,
    Container,
    SubContainer,
  },
};
</script>
