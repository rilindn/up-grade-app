<template>
  <Container>
    <Wrapper>
      <TableHeader>
        <SearchInput v-model="search" :placeholder="$t('search')" />
        <AddNew @click="$router.push('/register-student')">
          <span><i class="fas fa-plus-circle"></i></span>
          <span>{{ $t("addNew") }}</span>
        </AddNew>
      </TableHeader>
      <!-- <va-inner-loading :loading="users?.length <= 0" :size="60"> -->
      <Table>
        <Head>
          <Column></Column>
          <Column>{{ $t("students.studentId") }}</Column>
          <Column>{{ $t("firstname") }}</Column>
          <Column>{{ $t("students.parentName") }}</Column>
          <Column>{{ $t("lastname") }}</Column>
          <Column>{{ $t("students.gender") }}</Column>
          <Column>{{ $t("dateOfBirth") }}</Column>
          <Column>{{ $t("email") }}</Column>
          <Column>{{ $t("actions") }}</Column>
        </Head>
        <Body>
          <Row v-for="(user, i) in users" :key="user._id" :index="++i">
            <Cell
              @click="
                this.$router.push({
                  name: 'Profile',
                  params: { id: user._id },
                })
              "
            >
              <Avatar
                :size="35"
                :name="`${user?.firstName} ${user?.lastName}`"
                :color="user?.avatarColor"
              />
            </Cell>
            <Cell>{{ user?.studentId }}</Cell>
            <Cell>{{ user?.firstName }}</Cell>
            <Cell>{{ user.parent?.firstName }}</Cell>
            <Cell>{{ user?.lastName }}</Cell>
            <Cell>{{ user?.gender }}</Cell>
            <Cell>{{ moment(user?.dateOfBirth).format("YYYY-MM-DD") }}</Cell>
            <Cell>{{ user?.email }}</Cell>
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
      <Paginator @fetchPaginationItems="fetchPaginationItems" :pager="pager" />
      <!-- </va-inner-loading> -->
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
import Avatar from "@/components/Avatar";
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
import { deleteStudent } from "@/api/ApiMethods";
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
    Avatar,
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
      if (confirm(this.$t("Are you sure you want to delete this student?"))) {
        await deleteStudent(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Student deleted succesfully!",
        });
        await this.fetchStudentsOnAction();
      }
    },
    async fetchPaginationItems(page) {
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
