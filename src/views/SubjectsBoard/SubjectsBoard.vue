<template>
  <Container>
    <Wrapper>
      <AddNew @click="triggerAddModal">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>{{ $t("addNew") }}</span>
      </AddNew>
      <Table>
        <Head>
          <Column></Column>
          <Column>{{ $t("parallels.name") }}</Column>
          <Column>{{ $t("parallels.class") }}</Column>
          <Column>{{ $t("subjects.description") }}</Column>
          <Column>{{ $t("actions") }}</Column>
        </Head>
        <Body>
          <Row v-for="(subject, i) in subjects" :key="i">
            <Cell
              ><b>#{{ ++i }}</b></Cell
            >
            <Cell>{{ subject.subjectName }}</Cell>
            <Cell>{{ subject.targetedLevel }}</Cell>
            <Cell>{{ subject.subjectDescription }}</Cell>
            <Cell>
              <ActionWrapper>
                <Edit @click="editModal(subject)"
                  ><i class="far fa-edit"></i
                ></Edit>
                <Delete @click="handleDelete(subject._id)">
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
import { getAllSubjects, deleteSubject } from "../../api/ApiMethods";
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
    async handleDelete(id) {
      if (confirm("Are you sure you want to delete this subject?")) {
        await deleteSubject(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Subject deleted succesfully!",
        });
        this.emitter.emit("fetchSubjects");
      }
    },
  },
  async beforeCreate() {
    const subjects = await getAllSubjects();
    this.subjects = subjects;
  },
  created() {
    this.emitter.on("fetchSubjects", async () => {
      const subjects = await getAllSubjects();
      this.subjects = subjects;
    });
  },
};
</script>
