<template>
  <Wrapper>
    <Container>
      <SubContainer>
        <Classroom
          :bgColor="palette.green[300]"
          title="First grade"
          subTitle="I"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          :bgColor="palette.pink[100]"
          title="Second grade"
          subTitle="II"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          :bgColor="palette.blue[100]"
          title="Third grade"
          subTitle="III"
        />
      </SubContainer>
    </Container>
    <Container>
      <SubContainer>
        <Classroom
          :bgColor="palette.pink[200]"
          title="Fourth grade"
          subTitle="IV"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          :bgColor="palette.grey[200]"
          title="Fifth grade"
          subTitle="V"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          :bgColor="palette.yellow[100]"
          title="Sixth grade"
          subTitle="VI"
        />
      </SubContainer>
    </Container>
    <Container>
      <SubContainer>
        <Classroom
          :bgColor="palette.brown[100]"
          title="Seventh grade"
          subTitle="VII"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          :bgColor="palette.green[50]"
          title="Eighth grade"
          subTitle="VIII"
        />
      </SubContainer>
      <SubContainer>
        <Classroom
          :bgColor="palette.orange[100]"
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
import palette from "@/theme/palette";
import { Wrapper, Container, SubContainer } from "./Classes.styles";

export default {
  components: {
    Select,
    Classroom,
    Wrapper,
    Container,
    SubContainer,
  },
  data() {
    return {
      palette,
    };
  },
};
</script>
