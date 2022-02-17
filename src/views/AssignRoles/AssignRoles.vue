<template>
  <Wrapper>
      <AddNew @click="addAssignRolesModal()">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>{{ $t("addNew") }}</span>
      </AddNew>
      <Table>
        <Head>
          <Column>{{ $t("assignRoles.subject") }}</Column>
          <Column>{{ $t("assignRoles.teacher") }}</Column>
        </Head>
        <Body>
          <Row  v-for="(assignRole, i) in assignRoles" :key="i">
            <Cell>{{ assignRole.subject }}</Cell>
            <Cell>{{ assignRole.teacher }}</Cell>
          </Row>
        </Body>
      </Table>
      <va-modal v-model="showModal" hide-default-actions>
      <slot>
        <AddAssignRoles
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
import { Wrapper,AddNew } from "./AssignRoles.styles";
import {assignRoles} from "./AssignRolesData";
import AddAssignRoles from "./AddAssignRoles";

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
    AddAssignRoles
  },
   data() {
    return {
     assignRoles,
      showModal: false,

    };
  },
  methods: {
    addAssignRolesModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  }
};
</script>
