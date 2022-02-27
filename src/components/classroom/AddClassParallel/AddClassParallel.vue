<template>
  <FormWrapper>
    <Title>Add Class Parallel</Title>
    <Wrapper v-if="parallels?.length > 0">
      <Table>
        <Head>
          <Column>Class</Column>
          <Column>Name</Column>
          <Column>Max Capacity</Column>
          <Column>Students</Column>
        </Head>
        <Body>
          <Row
            @click="selectParallel(parallel)"
            v-for="parallel in parallels"
            :key="parallel._id"
          >
            <Cell>{{ parallel.class }}</Cell>
            <Cell>{{ parallel.name }}</Cell>
            <Cell>{{ parallel.capacity }}</Cell>
            <Cell>{{ parallel.students.length }}</Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
    <span v-else>No unassigned parallels were found!</span>
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
} from "./AddClassParallel.styles";
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import Avatar from "@/components/Avatar";
import { getNonAssignedParallels } from "@/api/ApiMethods";
import { addClassParallel } from "../../../api/ApiMethods";

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
      parallels: [],
      selectedStudent: {},
      loading: false,
    };
  },
  props: {
    classId: { type: String },
  },
  methods: {
    async selectParallel(parallel) {
      const { _id } = parallel;
      const data = { parallel: _id };
      try {
        const result = await addClassParallel(data, this.classId);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.$emit("fetchParallels");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Parallel assigned successfully!",
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
    const parallels = await getNonAssignedParallels();
    this.parallels = parallels;
  },
};
</script>
