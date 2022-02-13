<template>
  <Container>
    <Wrapper>
      <AddNew>
        <span><i class="fas fa-plus-circle"></i></span>
        <span>Add New</span>
      </AddNew>
      <Table>
        <Head>
          <Column>Number</Column>
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
                <Delete @click="deleteStudent(user._id)">
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
        <EditStudent :data="editUserData" @closeModal="closeModal" />
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
    async deleteStudent(id) {
      await deleteStudent(id);
      const users = await getAllStudents();
      this.users = users;
    },
  },
  async beforeCreate() {
    const users = await getAllStudents();
    this.users = users;
  },
};
</script>
