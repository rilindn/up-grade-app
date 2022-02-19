<template>
  <Wrapper>
    <Container>
      <Classroom
        v-for="(classroom, i) in classes"
        :key="classroom._id"
        :bgColor="backgroundColors[i]"
        :classroom="classroom"
      />
    </Container>
  </Wrapper>
</template>
<script>
import Select from "@/components/select";
import Classroom from "../../components/classroom";

import { Wrapper, Container, SubContainer } from "./Classes.styles";
import { getAllClasses } from "../../api/ApiMethods";
import backgroundColors from "./ClassesColor.config";

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
      classes: [],
      backgroundColors,
    };
  },
  async beforeCreate() {
    const classes = await getAllClasses();
    this.classes = classes;
  },
  created() {
    this.emitter.on("fetchClasses", async () => {
      const classes = await getAllClasses();
      this.classes = classes;
    });
  },
};
</script>
