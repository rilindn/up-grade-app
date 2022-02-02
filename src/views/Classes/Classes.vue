<template>
  <Wrapper>
    <Container>
      <SubContainer>
        <Classroom
          bgColor="var(--va-green300)"
          title="First grade"
          subTitle="I"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          bgColor="var(--va-pink200)"
          title="Second grade"
          subTitle="II"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          bgColor="var(--va-blue100)"
          title="Third grade"
          subTitle="III"
        />
      </SubContainer>
    </Container>
    <Container>
      <SubContainer>
        <Classroom
          bgColor="var(--va-pink200)"
          title="Fourth grade"
          subTitle="IV"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          bgColor="var(--va-grey300)"
          title="Fifth grade"
          subTitle="V"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          bgColor="var(--va-yellow100)"
          title="Sixth grade"
          subTitle="VI"
        />
      </SubContainer>
    </Container>
    <Container>
      <SubContainer>
        <Classroom
          bgColor="var(--va-brown100)"
          title="Seventh grade"
          subTitle="VII"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          bgColor="var(--va-green50)"
          title="Eighth grade"
          subTitle="VIII"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          bgColor="var(--va-orange100)"
          title="Ninth grade"
          subTitle="IX"
        />
      </SubContainer>
    </Container>
  </Wrapper>
</template>
<script>
import Select from "@/components/select";
import Classroom from "../../components/classroom";

import { Wrapper, Container, SubContainer } from "./Classes.styles";

export default {
  components: {
    Select,
    Classroom,
    Wrapper,
    Container,
    SubContainer,
  },
};
</script>
