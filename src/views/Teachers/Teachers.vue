<template>
  <Container>
    <Wrapper>
      <AddNew @click="$router.push('/register')">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>{{ $t("addNew") }}</span>
      </AddNew>
      <Table>
        <Head>
          <Column></Column>
          <Column>{{ $t("firstname") }}</Column>
          <Column>{{ $t("lastname") }}</Column>
          <Column>{{ $t("dateOfBirth") }}</Column>
          <Column>{{ $t("email") }}</Column>
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
    </Wrapper>
    <va-modal v-model="showEditModal" hide-default-actions>
      <slot>
        <EditTeacher
          :data="editStaffData"
          @closeModal="closeEditModal"
          @refetchStaff="fetchStaff"
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
} from "../../components/table/Table.styles";
import {
  Wrapper,
  ActionWrapper,
  Edit,
  Delete,
  AddNew,
  Container,
} from "./Teachers.styles";
import { getAllStaff, deleteStaff } from "../../api/ApiMethods";
import EditTeacher from "./EditTeacher/EditTeacher.vue";

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
    EditTeacher,
  },
  data() {
    return {
      staff: [],
      showEditModal: false,
      showAddModal: false,
      editStaffData: [],
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
    async fetchStaff() {
      const staff = await getAllStaff();
      this.staff = staff;
    },
    triggerAddModal() {
      this.showAddModal = !this.showAddModal;
    },
    async handleDelete(id) {
      if (confirm(this.$t("Are you sure you want to delete this teacher?"))) {
        await deleteStaff(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Teacher deleted succesfully!",
        });
        await this.fetchStaff();
      }
    },
  },
  async beforeCreate() {
    const staff = await getAllStaff();
    this.staff = staff;
  },
};
</script>
