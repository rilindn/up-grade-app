<template>
  <Wrapper>
    <AddNew @click="addAssignRolesModal()">
      <span><i class="fas fa-plus-circle"></i></span>
      <span>{{ $t("addNew") }}</span>
    </AddNew>
    <Table>
      <Head>
        <Column></Column>
        <Column>{{ $t("assignRoles.subject") }}</Column>
        <Column>{{ $t("assignRoles.teacher") }}</Column>
        <Column>{{ $t("assignRoles.actions") }}</Column>
      </Head>
      <Body>
        <Row v-for="(item, i) in assignedRoles" :key="i">
          <Cell>#{{ ++i }}</Cell>
          <Cell>{{ item.subject.name }}</Cell>
          <Cell>{{ item.teacher.name }}</Cell>
          <Cell>
            <ActionWrapper>
              <Edit @click="editAssignRolesModal(item)"
                ><i class="far fa-edit"></i
              ></Edit>
              <Delete @click="handleDelete(item._id)">
                <i class="far fa-trash-alt"></i
              ></Delete>
            </ActionWrapper>
          </Cell>
        </Row>
      </Body>
    </Table>
    <va-modal v-model="showAddModal" hide-default-actions>
      <slot>
        <AddAssignRoles
          @closeModal="closeModal"
          @fetchSubjectTeacher="fetchSubjectTeacher"
        />
      </slot>
    </va-modal>
    <va-modal v-model="showEditModal" hide-default-actions>
      <slot>
        <EditAssignRoles
          @fetchSubjectTeacher="fetchSubjectTeacher"
          @closeModal="closeModal"
          :data="editData"
        />
      </slot>
    </va-modal>
  </Wrapper>
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
  AddNew,
  ActionWrapper,
  Edit,
  Delete,
} from "./AssignRoles.styles";
import { assignRoles } from "./AssignRolesData";
import AddAssignRoles from "./AddAssignRoles";
import EditAssignRoles from "./EditAssignRoles";
import {
  getAllSubjectTeacher,
  deleteSubjectTeacher,
} from "@/api/ApiMethods.js";

export default {
  components: {
    Wrapper,
    Table,
    Head,
    Body,
    Column,
    Row,
    Cell,
    AddNew,
    ActionWrapper,
    Edit,
    Delete,
    AddAssignRoles,
    EditAssignRoles,
  },
  data() {
    return {
      assignRoles,
      showEditModal: false,
      showAddModal: false,
      assignedRoles: [],
      editData: {},
    };
  },
  methods: {
    addAssignRolesModal() {
      this.showAddModal = true;
    },
    editAssignRolesModal(item) {
      this.showEditModal = true;
      this.editData = item;
    },
    closeModal() {
      this.showEditModal = false;
      this.showAddModal = false;
    },
    async fetchSubjectTeacher() {
      const data = await getAllSubjectTeacher();
      this.assignedRoles = data;
    },
    async handleDelete(id) {
      if (confirm("Are you sure?")) {
        await deleteSubjectTeacher(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Role assignment deleted!",
        });
        await this.fetchSubjectTeacher();
      }
    },
  },
  async beforeCreate() {
    const data = await getAllSubjectTeacher();
    this.assignedRoles = data;
  },
};
</script>
