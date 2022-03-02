<template>
  <Wrapper>
    <Container>
      <SubContainer v-for="(parallel, i) in parallels" :key="parallel._id">
        <TeacherClass
          :bgColor="backgroundColors[i]"
          :classname="parallel.class"
          :subTitle="parallel.name"
          :parallelId="parallel._id"
        />
      </SubContainer>
    </Container>
  </Wrapper>
</template>
<script>
import { getTeacherParallels } from "@/api/ApiMethods";
import TeacherClass from "@/components/teacherClass";
import backgroundColors from "@/views/Classes/ClassesColor.config";
import { Wrapper, Container, SubContainer } from "./TeacherClasses.styles";

export default {
  components: {
    TeacherClass,
    Wrapper,
    Container,
    SubContainer,
  },
  data() {
    return {
      parallels: [],
      backgroundColors,
    };
  },
  async beforeCreate() {
    let teacherId = this.$store.getters.loggedUser.id;
    const parallels = await getTeacherParallels(teacherId);
    this.parallels = parallels;
  },
};
</script>
