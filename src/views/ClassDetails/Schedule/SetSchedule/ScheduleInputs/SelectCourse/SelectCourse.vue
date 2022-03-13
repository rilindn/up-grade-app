<template>
  <FormWrapper>
    <Title>Select Course</Title>
    <Wrapper v-if="courses?.length > 0">
      <Table>
        <Head>
          <Column></Column>
          <Column>Teacher</Column>
          <Column>Subject</Column>
        </Head>
        <Body>
          <Row
            v-for="(course, i) in courses"
            @click="handleCourse(course)"
            :key="course._id"
          >
            <Cell>#{{ ++i }}</Cell>
            <Cell>{{ course.teacher.name }}</Cell>
            <Cell>{{ course.subject.name }}</Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
    <span v-else>No unassigned courses were found!</span>
  </FormWrapper>
</template>

<script>
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";
import {
  Modal,
  FormWrapper,
  FormStyled,
  Title,
  CancelButton,
  SaveButton,
  Wrapper,
} from "./SelectCourse.styles";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import Avatar from "@/components/Avatar";
import { getParallelCourses } from "@/api/ApiMethods";

export default {
  components: {
    Modal,
    FormWrapper,
    FormStyled,
    Title,
    CancelButton,
    SaveButton,
    SelectInput,
    InputField,
    Avatar,
    Table,
    Column,
    Row,
    Cell,
    Head,
    Body,
    Wrapper,
  },
  data() {
    return {
      courses: [],
      selectedStudent: {},
      loading: false,
    };
  },
  props: {
    parallelId: { type: String },
  },
  methods: {
    handleCourse(course) {
      this.$emit("selectCourse", course);
      this.$emit("closeModal");
    },
  },
  async beforeCreate() {
    const courses = await getParallelCourses(this.parallelId);
    this.courses = courses;
  },
};
</script>
