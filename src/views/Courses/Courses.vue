<template>
  <Wrapper>
    <AddNew @click="addCoursesModal()">
      <span><i class="fas fa-plus-circle"></i></span>
      <span>{{ $t("addNew") }}</span>
    </AddNew>
    <Table>
      <Head>
        <Column></Column>
        <Column>{{ $t("courses.courseCode") }}</Column>
        <Column>{{ $t("courses.teacher") }}</Column>
        <Column>{{ $t("courses.teacher") }}</Column>
        <Column>{{ $t("courses.actions") }}</Column>
      </Head>
      <Body>
        <Row v-for="(course, i) in courses" :key="i">
          <Cell>#{{ ++i }}</Cell>
          <Cell>{{ course.courseCode }}</Cell>
          <Cell>{{ course.subject.name }}</Cell>
          <Cell>{{ course.teacher.name }}</Cell>
          <Cell>
            <ActionWrapper>
              <Edit @click="editCoursesModal(course)"
                ><i class="far fa-edit"></i
              ></Edit>
              <Delete @click="handleDelete(course._id)">
                <i class="far fa-trash-alt"></i
              ></Delete>
            </ActionWrapper>
          </Cell>
        </Row>
      </Body>
    </Table>
    <va-modal v-model="showAddModal" hide-default-actions>
      <slot>
        <AddCourse @closeModal="closeModal" @fetchCourses="fetchCourses" />
      </slot>
    </va-modal>
    <va-modal v-model="showEditModal" hide-default-actions>
      <slot>
        <EditCourse
          @fetchCourses="fetchCourses"
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
} from "@/components/table/Table.styles";
import { Wrapper, AddNew, ActionWrapper, Edit, Delete } from "./Courses.styles";
import AddCourse from "./AddCourse";
import EditCourse from "./EditCourse";
import { getAllCourses, deleteCourse } from "@/api/ApiMethods.js";

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
    AddCourse,
    EditCourse,
  },
  data() {
    return {
      showEditModal: false,
      showAddModal: false,
      courses: [],
      editData: {},
    };
  },
  methods: {
    addCoursesModal() {
      this.showAddModal = true;
    },
    editCoursesModal(item) {
      this.showEditModal = true;
      this.editData = item;
    },
    closeModal() {
      this.showEditModal = false;
      this.showAddModal = false;
    },
    async fetchCourses() {
      const data = await getAllCourses();
      this.courses = data;
    },
    async handleDelete(id) {
      if (confirm("Are you sure?")) {
        await deleteCourse(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Role assignment deleted!",
        });
        await this.fetchCourses();
      }
    },
  },
  async created() {
    await this.fetchCourses();
  },
};
</script>
