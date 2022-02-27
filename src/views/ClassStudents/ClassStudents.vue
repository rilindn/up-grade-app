<template>
  <Container>
    <Wrapper>
      <AddNew @click="addStudentModal = true">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>{{ $t("addNew") }}</span>
      </AddNew>
      <Table>
        <Head>
          <Column>Id</Column>
          <Column>Firstname</Column>
          <Column>Lastname</Column>
          <Column>Date of Birth</Column>
          <Column>Email</Column>
          <Column>Actions</Column>
        </Head>
        <Body>
          <Row
            v-for="(student, i) in classStudents"
            :key="student.id"
            :index="++i"
          >
            <Cell>{{ student.studentId }}</Cell>
            <Cell>{{ student.firstName }}</Cell>
            <Cell>{{ student.lastName }}</Cell>
            <Cell>{{ moment(student.dateOfBirth).format("YYYY-MM-DD") }}</Cell>
            <Cell>{{ student.email }}</Cell>
            <Cell>
              <ActionWrapper>
                <Delete @click="handleDelete(student._id)">
                  <i class="far fa-trash-alt"></i
                ></Delete>
              </ActionWrapper>
            </Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
  </Container>
  <va-modal v-model="addStudentModal" hide-default-actions>
    <slot>
      <AddClassStudent
        @fetchClassMembers="fetchClassMembers"
        @closeModal="addStudentModal = false"
        :parallelId="$route.params.id"
      />
    </slot>
  </va-modal>
</template>

<script>
import {
  Table,
  Head,
  Body,
  Column,
  Row,
  Cell,
} from "../../components/table/Table.styles";
import { users } from "../../components/table/sampleData";
import {
  Wrapper,
  ActionWrapper,
  Edit,
  Delete,
  AddNew,
  Container,
} from "./ClassStudents.styles";
import { getParallel, getStudentById } from "@/api/ApiMethods";
import AddClassStudent from "./AddClassStudent";
import {
  deleteStudentParallel,
  getParallelStudents,
} from "../../api/ApiMethods";

export default {
  components: {
    Table,
    Head,
    Body,
    Column,
    Row,
    Cell,
    Wrapper,
    ActionWrapper,
    Edit,
    Delete,
    AddNew,
    Container,
    AddClassStudent,
  },
  data() {
    return {
      classStudents: [],
      addStudentModal: false,
    };
  },
  methods: {
    async fetchClassMembers() {
      const students = await getParallelStudents(this.$route.params.id);
      this.classStudents = students;
    },
    async handleDelete(id) {
      const ids = {
        parallelId: this.$route.params.id,
        studentId: id,
      };
      if (confirm("Are you sure you want to delete this student?")) {
        await deleteStudentParallel(ids);
        const students = await getParallelStudents(this.$route.params.id);
        this.classStudents = students;
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Student unassigned succesfully!",
        });
        this.fetchParallels();
      }
    },
  },
  async beforeCreate() {
    const students = await getParallelStudents(this.$route.params.id);
    this.classStudents = students;
  },
};
</script>
