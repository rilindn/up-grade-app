<template>
  <FormWrapper>
    <Title>Add Class Course</Title>
    <Wrapper v-if="courses?.length > 0">
      <Table>
        <Head>
          <Column></Column>
          <Column>Teacher</Column>
          <Column>Subject</Column>
        </Head>
        <Body>
          <Row
            @click="selectCourse(course)"
            v-for="(course, i) in courses"
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
} from "./AddClassCourse.styles";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import Avatar from "@/components/Avatar";
import {
  getParallelNonAssignedCourses,
  addClassCourse,
} from "@/api/ApiMethods";

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
      selectedCourse: {},
      loading: false,
    };
  },
  props: {
    parallelId: { type: String },
  },
  methods: {
    async selectCourse(course) {
      const { _id } = course;
      const data = { course: _id };
      try {
        const result = await addClassCourse(data, this.parallelId);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.$emit("fetchClassCourses");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "New course added successfully!",
          });
        } else {
          this.loading = false;
          this.$notify({
            type: "error",
            duration: 2000,
            text: "Please try again!",
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  async beforeCreate() {
    const courses = await getParallelNonAssignedCourses(this.parallelId);
    this.courses = courses;
  },
};
</script>
