<template>
  <Container>
    <Wrapper>
      <AddNew @click="$router.push('/register')">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>Add New</span>
      </AddNew>
      <Table>
        <Head>
          <Column></Column>
          <Column>Firstname</Column>
          <Column>Lastname</Column>
          <Column>Date of Birth</Column>
          <Column>Email</Column>
          <Column>Actions</Column>
        </Head>
        <Body>
          <Row v-for="(admin, i) in admins" :key="admin.id">
            <Cell
              ><b>#{{ ++i }}</b></Cell
            >
            <Cell>{{ admin.firstName }}</Cell>
            <Cell>{{ admin.lastName }}</Cell>
            <Cell>{{ moment(admin.dateOfBirth).format("YYYY-MM-DD") }}</Cell>
            <Cell>{{ admin.email }}</Cell>
            <Cell>
              <ActionWrapper>
                <Edit @click="editModal(admin)"
                  ><i class="far fa-edit"></i
                ></Edit>
                <Delete @click="handleDelete(admin._id)">
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
        <EditAdmin
          :data="editAdminData"
          @closeModal="closeEditModal"
          @refetchAdmin="fetchAdmin"
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
} from "./Admins.styles";
import { getAllAdmins, deleteAdmin } from "../../api/ApiMethods";
import EditAdmin from "./EditAdmin/EditAdmin.vue";

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
    EditAdmin,
  },
  data() {
    return {
      admins: [],
      showEditModal: false,
      showAddModal: false,
      editAdminData: [],
    };
  },
  methods: {
    editModal(admin) {
      this.editAdminData = admin;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    async fetchAdmin() {
      const admins = await getAllAdmins();
      this.admins = admins;
    },
    triggerAddModal() {
      this.showAddModal = !this.showAddModal;
    },
    async handleDelete(id) {
      if (confirm("Are you sure you want to delete this admin?")) {
        await deleteAdmin(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Admin deleted succesfully!",
        });
        await this.fetchAdmin();
      }
    },
  },
  async beforeCreate() {
    const admins = await getAllAdmins();
    this.admins = admins;
  },
};
</script>
