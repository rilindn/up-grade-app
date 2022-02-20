<template>
  <Container>
    <Wrapper>
      <AddNew @click="triggerAddModal">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>Add New</span>
      </AddNew>
      <Table>
        <Head>
          <Column>Name</Column>
          <Column>Level</Column>
          <Column>Description</Column>
          <Column>Actions</Column>
        </Head>
        <Body>
          <Row v-for="(subject, i) in subjects" :key="i">
            <Cell>{{ subject.subjectName }}</Cell>
            <Cell>{{ subject.targetedLevel }}</Cell>
            <Cell>{{ subject.subjectDescription }}</Cell>
            <Cell>
              <ActionWrapper>
                <Edit @click="editModal(subject)"
                  ><i class="far fa-edit"></i
                ></Edit>
                <Delete> <i class="far fa-trash-alt"></i></Delete>
              </ActionWrapper>
            </Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
    <va-modal v-model="showEditModal" hide-default-actions>
      <slot>
        <EditSubject
          :data="editSubjectData"
          @closeModal="closeEditModal"
          @refetchSubjects="fetchSubjects"
        />
      </slot>
    </va-modal>
    <va-modal v-model="showAddModal" hide-default-actions>
      <slot>
        <AddSubject
          @refetchSubjects="fetchSubjects"
          @closeModal="triggerAddModal"
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
  Container,
  AddNew,
} from "./SubjectsBoard.styles";
import AddSubject from "./AddSubject/AddSubject.vue";
import EditSubject from "./EditSubject/EditSubject.vue";
import { getAllSubjects } from "../../api/ApiMethods";
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
    Container,
    AddNew,
    AddSubject,
    EditSubject,
  },
  data() {
    return {
      subjects: [],
      showEditModal: false,
      showAddModal: false,
      editSubjectData: [],
    };
  },
  methods: {
    editModal(subject) {
      this.editSubjectData = subject;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    async fetchSubjects() {
      const subjects = await getAllSubjects();
      this.subjects = subjects;
    },
    triggerAddModal() {
      this.showAddModal = !this.showAddModal;
    },
  },
  async beforeCreate() {
    const subjects = await getAllSubjects();
    this.subjects = subjects;
  },
};
</script>
