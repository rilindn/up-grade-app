<template>
  <Container>
    <Wrapper>
      <TableHeader>
        <SearchInput v-model="search" :placeholder="$t('search')" />
        <AddNew @click="$router.push('/register')">
          <span><i class="fas fa-plus-circle"></i></span>
          <span>{{ $t("addNew") }}</span>
        </AddNew>
      </TableHeader>
      <Table>
        <Head>
          <Column></Column>
          <Column>{{ $t("firstname") }}</Column>
          <Column>{{ $t("lastname") }}</Column>
          <Column>{{ $t("dateOfBirth") }}</Column>
          <Column>{{ $t("email") }}</Column>
          <Column>{{ $t("students.gender") }}</Column>
          <Column>{{ $t("actions") }}</Column>
        </Head>
        <Body>
          <Row v-for="(teacher, i) in staff" :key="teacher.id">
            <Cell
              ><b>#{{ ++i }}</b></Cell
            >
            <Cell>{{ teacher.firstName }}</Cell>
            <Cell>{{ teacher.lastName }}</Cell>
            <Cell>{{ moment(teacher.dateOfBirth).format("YYYY-MM-DD") }}</Cell>
            <Cell>{{ teacher.email }}</Cell>
            <Cell>{{ teacher?.gender }}</Cell>
            <Cell>
              <ActionWrapper>
                <Edit @click="editModal(teacher)"
                  ><i class="far fa-edit"></i
                ></Edit>
                <Delete @click="handleDelete(teacher._id)">
                  <i class="far fa-trash-alt"></i
                ></Delete>
              </ActionWrapper>
            </Cell>
          </Row>
        </Body>
      </Table>
      <Paginator @fetchPaginationItems="fetchPaginationItems" :pager="pager" />
    </Wrapper>
    <va-modal v-model="showEditModal" hide-default-actions>
      <slot>
        <EditTeacher
          :data="editStaffData"
          @closeModal="closeEditModal"
          @refetchStaff="fetchStaffOnAction"
        />
      </slot>
    </va-modal>
  </Container>
</template>

<script>
import {
  Table,
  Head,
  Body,
  Column,
  Row,
  Cell,
} from "@/components/table/Table.styles";
import {
  Wrapper,
  ActionWrapper,
  Edit,
  Delete,
  AddNew,
  Container,
  TableHeader,
} from "./Teachers.styles";
import { paginationStaff, deleteStaff } from "@/api/ApiMethods";
import EditTeacher from "./EditTeacher/EditTeacher.vue";
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
    SearchInput,
    TableHeader,
    Edit,
    Delete,
    AddNew,
    Container,
    EditTeacher,
    Paginator,
  },
  data() {
    return {
      staff: [],
      showEditModal: false,
      showAddModal: false,
      search: "",
      editStaffData: [],
      pager: {},
      currentPage: 1,
    };
  },
  methods: {
    editModal(subject) {
      this.editStaffData = subject;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    triggerAddModal() {
      this.showAddModal = !this.showAddModal;
    },
    async fetchStaffOnAction() {
      await this.fetchPaginationItems(this.currentPage);
    },
    async handleDelete(id) {
      if (confirm(this.$t("Are you sure you want to delete this teacher?"))) {
        await deleteStaff(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Teacher deleted succesfully!",
        });
        await this.fetchStaffOnAction();
      }
    },
    async fetchPaginationItems(page) {
      this.currentPage = page;
      const data = await paginationStaff(page, this.search);
      this.staff = data.pageOfItems;
      this.pager = data.pager;
    },
  },
  watch: {
    search: async function () {
      await this.fetchPaginationItems(this.currentPage);
    },
  },
  async beforeCreate() {
    const data = await paginationStaff(1);
    this.staff = data.pageOfItems;
    this.pager = data.pager;
  },
};
</script>
