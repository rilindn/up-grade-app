<template>
  <FormWrapper>
    <Title>Add Class Student</Title>
    <SearchInput v-model="search" :placeholder="$t('search')" />
    <Wrapper v-if="students?.length > 0">
      <Table>
        <Head>
          <Column></Column>
          <Column>Name</Column>
          <Column>Surname</Column>
          <Column>Email</Column>
        </Head>
        <Body>
          <Row
            @click="selectStudent(student)"
            v-for="student in students"
            :key="student._id"
          >
            <Cell
              ><Avatar
                :size="40"
                :name="`${student.firstName} ${student.lastName}`"
            /></Cell>
            <Cell>{{ student.firstName }}</Cell>
            <Cell>{{ student.lastName }}</Cell>
            <Cell>{{ student.email }}</Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
    <span v-else>No unassigned students were found!</span>
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
} from "./AddClassStudent.styles";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import Avatar from "@/components/Avatar";
import { addClassStudent } from "@/api/ApiMethods.js";
import SearchInput from "@/components/SearchInput";
import { getNotAssignedStudents } from "@/api/ApiMethods";

export default {
  components: {
    Modal,
    FormWrapper,
    FormStyled,
    Title,
    CancelButton,
    SaveButton,
    SelectInput,
    SearchInput,
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
      students: [],
      selectedStudent: {},
      loading: false,
      search: "",
    };
  },
  props: {
    parallelId: { type: String },
  },
  methods: {
    async selectStudent(student) {
      const { _id } = student;
      const data = { student: _id };
      try {
        const result = await addClassStudent(data, this.parallelId);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.$emit("fetchClassMembers");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "New student added successfully!",
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
    async fetchStudents() {
      const students = await getNotAssignedStudents(this.search);
      this.students = students;
    },
  },
  watch: {
    search: async function () {
      await this.fetchStudents();
    },
  },
  async created() {
    await this.fetchStudents();
  },
};
</script>
