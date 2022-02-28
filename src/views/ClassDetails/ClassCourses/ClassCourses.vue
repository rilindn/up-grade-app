<template>
  <Container>
    <Wrapper>
      <AddNew @click="addCourseModal = true">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>{{ $t("addNew") }}</span>
      </AddNew>
      <Table v-if="classCourses?.length > 0">
        <Head>
          <Column></Column>
          <Column>Teacher</Column>
          <Column>Subject</Column>
          <Column>Actions</Column>
        </Head>
        <Body>
          <Row v-for="(course, i) in classCourses" :key="course._id">
            <Cell>#{{ ++i }}</Cell>
            <Cell>{{ course.teacher.name }}</Cell>
            <Cell>{{ course.subject.name }}</Cell>
            <Cell>
              <ActionWrapper>
                <Delete @click="handleDelete(course._id)">
                  <i class="far fa-trash-alt"></i
                ></Delete>
              </ActionWrapper>
            </Cell>
          </Row>
        </Body>
      </Table>
      <span v-else>No assigned courses were found!</span>
    </Wrapper>
  </Container>
  <va-modal v-model="addCourseModal" hide-default-actions>
    <slot>
      <AddClassCourse
        @fetchClassCourses="fetchClassCourses"
        @closeModal="addCourseModal = false"
        :parallelId="$route.params.id"
      />
    </slot>
  </va-modal>
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
import {
  Wrapper,
  ActionWrapper,
  Edit,
  Delete,
  AddNew,
  Container,
} from "./ClassCourses.styles";
import AddClassCourse from "./AddClassCourse";
import { deleteParallelCourse, getParallelCourses } from "@/api/ApiMethods";

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
    AddClassCourse,
  },
  data() {
    return {
      classCourses: [],
      addCourseModal: false,
    };
  },
  methods: {
    async fetchClassCourses() {
      const courses = await getParallelCourses(this.$route.params.id);
      this.classCourses = courses.filter(Boolean);
    },
    async handleDelete(id) {
      const ids = {
        parallelId: this.$route.params.id,
        courseId: id,
      };
      if (confirm("Are you sure you want to delete this course?")) {
        await deleteParallelCourse(ids);
        this.fetchClassCourses();
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Student unassigned succesfully!",
        });
        this.fetchParallels();
      }
    },
  },
  async beforeCreate() {
    const courses = await getParallelCourses(this.$route.params.id);
    this.classCourses = courses.filter(Boolean);
  },
};
</script>
