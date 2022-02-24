<template>
  <Wrapper>
      <AddNew @click="addAssignRolesModal()">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>{{ $t("addNew") }}</span>
      </AddNew>
      <Table>
        <Head>
          <Column>{{ $t("assignRoles.id") }}</Column>
          <Column>{{ $t("assignRoles.subject") }}</Column>
          <Column>{{ $t("assignRoles.teacher") }}</Column>
            <Column>{{ $t("assignRoles.actions") }}</Column>
        </Head>
        <Body>
          <Row  v-for="(assignRole, i) in assignRoles" :key="i">
              <Cell>{{ assignRole.id }}</Cell>
            <Cell>{{ assignRole.subject }}</Cell>
            <Cell>{{ assignRole.teacher }}</Cell>
              <Cell>
              <ActionWrapper>
              <Edit @click="editAssignRolesModal()"
                  ><i class="far fa-edit"></i
                ></Edit>
                <Delete> <i class="far fa-trash-alt"></i></Delete>
              </ActionWrapper>
            </Cell>
          </Row>
        </Body>
      </Table>
      <va-modal v-model="showAddModal" hide-default-actions>
      <slot>
        <AddAssignRoles
          @closeModal="closeModal"
        />
      </slot>
    </va-modal>
    <va-modal v-model="showEditModal" hide-default-actions>
      <slot>
         <EditAssignRoles
          @closeModal="closeModal"
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
  Cell
} from "../../components/table/Table.styles";
import { Wrapper,AddNew ,ActionWrapper, Edit,Delete,} from "./AssignRoles.styles";
import {assignRoles} from "./AssignRolesData";
import AddAssignRoles from "./AddAssignRoles";
import EditAssignRoles from "./EditAssignRoles";

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
    EditAssignRoles
  },
   data() {
    return {
     assignRoles,
      showEditModal: false,
      showAddModal: false,

    };
  },
  methods: {
    addAssignRolesModal() {
      this.showAddModal = true;
    },
    editAssignRolesModal() {
      this.showEditModal = true;
    },
    closeModal() {
      this.showEditModal = false;
      this.showAddModal = false;
    },
  }
};
</script>
