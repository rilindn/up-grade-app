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
          <Column>{{ $t("parallels.class") }}</Column>
          <Column>{{ $t("parallels.name") }}</Column>
          <Column>{{ $t("parallels.capacity") }}</Column>
          <Column>{{ $t("parallels.students") }}</Column>
          <Column>{{ $t("actions") }}</Column>
          <Column></Column>
        </Head>
        <Body>
          <Row v-for="(parallel, i) in parallels" :key="i">
            <Cell
              ><b>#{{ ++i }}</b></Cell
            >
            <Cell>{{ parallel.class }}</Cell>
            <Cell>{{ parallel.name }}</Cell>
            <Cell>{{ parallel.capacity }}</Cell>
            <Cell>{{ parallel.students.length }}</Cell>
            <Cell>
              <ActionWrapper>
                <Edit @click="editModal(parallel)"
                  ><i class="far fa-edit"></i
                ></Edit>
                <Delete @click="handleDelete(parallel._id)">
                  <i class="far fa-trash-alt"></i
                ></Delete>
              </ActionWrapper>
            </Cell>
            <Cell>
              <router-link
                :to="{ name: 'Class Details', params: { id: parallel._id } }"
                >{{ $t("parallels.seeDetails") }}</router-link
              >
            </Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
    <va-modal v-model="showEditModal" hide-default-actions>
      <slot>
        <EditParallel
          :data="editParallel"
          @closeModal="closeEditModal"
          @refetchParallels="fetchParallels"
        />
      </slot>
    </va-modal>
    <va-modal v-model="showAddModal" hide-default-actions>
      <slot>
        <AddParallel
          @refetchParallels="fetchParallels"
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
} from "./Parallels.styles";
import AddParallel from "./AddParallel";
import EditParallel from "./EditParallel";
import { getAllParallels, deleteParallel } from "../../api/ApiMethods";
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
    AddParallel,
    EditParallel,
  },
  data() {
    return {
      parallels: [],
      showEditModal: false,
      showAddModal: false,
      editParallel: [],
    };
  },
  methods: {
    editModal(subject) {
      this.editParallel = subject;
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    async fetchParallels() {
      const parallels = await getAllParallels();
      this.parallels = parallels;
    },
    triggerAddModal() {
      this.showAddModal = !this.showAddModal;
    },
    async handleDelete(id) {
      if (confirm("Are you sure you want to delete this parallel?")) {
        await deleteParallel(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Parallel deleted succesfully!",
        });
        this.fetchParallels();
      }
    },
  },
  async beforeCreate() {
    const parallels = await getAllParallels();
    this.parallels = parallels;
  },
};
</script>
