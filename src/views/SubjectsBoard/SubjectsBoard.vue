<template>
  <Container>
    <Wrapper>
      <AddNew>
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
    <va-modal v-model="showModal" hide-default-actions>
      <slot>
        <EditSubject
          :data="editSubjectData"
          @closeModal="closeModal"
          @refetchSubjects="fetchSubjects"
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
    EditSubject,
  },
  data() {
    return {
      subjects: [],
      showModal: false,
      editSubjectData: [],
    };
  },
  methods: {
    editModal(subject) {
      this.editSubjectData = subject;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async fetchSubjects() {
      const subjects = await getAllSubjects();
      this.subjects = subjects;
    },
  },

  async beforeCreate() {
    const subjects = await getAllSubjects();
    this.subjects = subjects;
  },
};
</script>
