<template>
  <Container>
    <Wrapper>
      <TableHeader>
        <SearchInput v-model="search" placeholder="Search" />
        <AddNew @click="$router.push('/register-student')">
          <span><i class="fas fa-plus-circle"></i></span>
          <span>Add New</span>
        </AddNew>
      </TableHeader>
      <va-inner-loading :loading="users?.length <= 0" :size="60">
        <Table>
          <Head>
            <Column></Column>
            <Column>Student ID</Column>
            <Column>Name</Column>
            <Column>Lastname</Column>
            <Column>Date of birth</Column>
            <Column>Email</Column>
            <Column>Actions</Column>
          </Head>
          <Body>
            <Row v-for="(user, i) in users" :key="user.id" :index="++i">
              <Cell
                ><b>#{{ i + (currentPage - 1) * pager.pageSize }}</b></Cell
              >
              <Cell>{{ user.studentId }}</Cell>
              <Cell>{{ user.firstName }}</Cell>
              <Cell>{{ user.lastName }}</Cell>
              <Cell>{{ moment(user.dateOfBirth).format("YYYY-MM-DD") }}</Cell>
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
        <Paginator
          @fetchPaginationItems="fetchPaginationItems"
          :page="page"
          :pager="pager"
        />
      </va-inner-loading>
    </Wrapper>
    <va-modal v-model="showModal" hide-default-actions>
      <slot>
        <EditStudent
          :data="editUserData"
          @closeModal="closeModal"
          @refetchStudents="fetchStudentsOnAction"
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
  TableHeader,
} from "./Students.styles";
import EditStudent from "./EditStudent";
import { getAllStudents, deleteStudent } from "@/api/ApiMethods";
import { paginationStudents } from "../../api/ApiMethods";
import Paginator from "@/components/Paginator";
import SearchInput from "@/components/SearchInput";
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
    Paginator,
    SearchInput,
    TableHeader,
  },
  data() {
    return {
      users: [],
      pager: {},
      showModal: false,
      editUserData: [],
      currentPage: 1,
      search: "",
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
    async fetchStudentsOnAction() {
      await this.fetchPaginationItems(this.currentPage);
    },
    async handleDelete(id) {
      if (confirm("Are you sure?")) {
        await deleteStudent(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "User deleted!",
        });
        await this.fetchStudentsOnAction();
      }
    },
    async fetchPaginationItems(page) {
      console.log("first", this.search);
      this.currentPage = page;
      const data = await paginationStudents(page, this.search);
      this.users = data.pageOfItems;
      this.pager = data.pager;
    },
  },
  watch: {
    search: async function () {
      await this.fetchPaginationItems(this.currentPage);
    },
  },
  async beforeCreate() {
    const data = await paginationStudents(1);
    this.users = data.pageOfItems;
    this.pager = data.pager;
  },
};
</script>
