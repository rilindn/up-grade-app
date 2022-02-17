<template>
  <Container>
    <Wrapper>
      <AddNew @click="$router.push('/register')">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>Add New</span>
      </AddNew>
      <Table>
        <Head>
          <Column>Student ID</Column>
          <Column>Name</Column>
          <Column>Lastname</Column>
          <Column>Email</Column>
          <Column>Actions</Column>
        </Head>
        <Body>
          <Row v-for="(user, i) in users" :key="user.id" :index="++i">
            <Cell>{{ user.studentId }}</Cell>
            <Cell>{{ user.firstName }}</Cell>
            <Cell>{{ user.lastName }}</Cell>
            <Cell>{{ user.email }}</Cell>
            <Cell>
              <ActionWrapper>
                <Edit @click="editModal(user)"
                  ><i class="far fa-edit"></i
                ></Edit>
                <Delete @click="handleDelete(user._id)">
                  <i class="far fa-trash-alt"></i
                ></Delete>
              </ActionWrapper>
            </Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
    <va-modal v-model="showModal" hide-default-actions>
      <slot>
        <EditStudent
          :data="editUserData"
          @closeModal="closeModal"
          @fetchStudents="fetchStudents"
        />
      </slot>
    </va-modal>
  </Container>
</template>

<script>
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";
import {
  Wrapper,
  ActionWrapper,
  Edit,
  Delete,
  AddNew,
  Container,
} from "./Students.styles";
import EditStudent from "./EditStudent";
import { getAllStudents, deleteStudent } from "@/api/ApiMethods";
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
    EditStudent,
  },
  data() {
    return {
      users: [],
      showModal: false,
      editUserData: [],
    };
  },
  methods: {
    editModal(user) {
      this.editUserData = user;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async fetchStudents() {
      const users = await getAllStudents();
      this.users = users;
    },
    async handleDelete(id) {
      if (confirm("Are you sure?")) {
        await deleteStudent(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "User deleted!",
        });
        await this.fetchStudents();
      }
    },
  },
  async beforeCreate() {
    const users = await getAllStudents();
    this.users = users;
  },
};
</script>
