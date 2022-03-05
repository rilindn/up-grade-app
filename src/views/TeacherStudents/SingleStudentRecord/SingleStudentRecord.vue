<template>
  <CellStyled>{{ student.studentId }}</CellStyled>
  <CellStyled>{{ student.firstName }}</CellStyled>
  <CellStyled>{{ student.lastName }}</CellStyled>
  <CellStyled>{{ student.email }}</CellStyled>
  <CellStyled>
    <GradeWrapper>
      <div>
        <span>{{ gradesData?.periods?.["1"]?.first || null }}</span>
        <span>{{ gradesData?.periods?.["1"]?.second || null }}</span>
      </div>
      <FinalGrade>
        <span>{{ gradesData?.periods?.["1"]?.final || null }}</span>
      </FinalGrade>
    </GradeWrapper>
    <EditIcon
      @click="editGradesTrigger('1', gradesData?.periods?.['1'])"
      class="edit-trigger"
    >
      <span>
        <i class="far fa-edit"></i>
      </span>
    </EditIcon>
  </CellStyled>
  <CellStyled>
    <GradeWrapper>
      <div>
        <span>{{ gradesData?.periods?.["2"]?.first || null }}</span>
        <span>{{ gradesData?.periods?.["2"]?.second || null }}</span>
      </div>
      <FinalGrade>
        <span>{{ gradesData?.periods?.["2"]?.final || null }}</span>
      </FinalGrade>
    </GradeWrapper>
    <EditIcon
      @click="editGradesTrigger('2', gradesData?.periods?.['2'])"
      class="edit-trigger"
    >
      <span>
        <i class="far fa-edit"></i>
      </span>
    </EditIcon>
  </CellStyled>
  <CellStyled>
    <GradeWrapper>
      <div>
        <span>{{ gradesData?.periods?.["3"]?.first || null }}</span>
        <span>{{ gradesData?.periods?.["3"]?.second || null }}</span>
      </div>
      <FinalGrade>
        <span>{{ gradesData?.periods?.["3"]?.final || null }}</span>
      </FinalGrade>
    </GradeWrapper>
    <EditIcon
      @click="editGradesTrigger('3', gradesData?.periods?.['3'])"
      class="edit-trigger"
    >
      <span>
        <i class="far fa-edit"></i>
      </span>
    </EditIcon>
  </CellStyled>
  <CellStyled>
    <OtherGrades>{{ gradesData?.final || null }}</OtherGrades>
    <EditIcon
      @click="editGradesTrigger('final', { finalGrade: gradesData?.final })"
      class="edit-trigger"
    >
      <span>
        <i class="far fa-edit"></i>
      </span>
    </EditIcon>
  </CellStyled>
  <va-modal v-model="showModal" hide-default-actions>
    <slot>
      <EditStudentGrades
        :data="editStudentData"
        :ids="ids"
        @closeModal="showModal = false"
        @refetchGrades="fetchGrades"
      />
    </slot>
  </va-modal>
</template>
<script>
import {
  CellStyled,
  GradeWrapper,
  FinalGrade,
  OtherGrades,
  ActionWrapper,
  Edit,
  EditIcon,
} from "./SingleStudentRecord.styles";
import EditStudentGrades from "../EditStudentGrades";
import { getStudentGradesByCourse } from "@/api/ApiMethods";

export default {
  components: {
    CellStyled,
    GradeWrapper,
    FinalGrade,
    OtherGrades,
    ActionWrapper,
    Edit,
    EditIcon,
    EditStudentGrades,
  },
  data() {
    return {
      showModal: false,
      gradesData: {},
      editStudentData: {},
      selectedFieldToEdit: "",
      ids: {
        gradesId: this.gradesData?._id,
        studentId: this.student?._id,
        courseId: this.courseId,
      },
    };
  },
  props: {
    student: {
      type: Object,
    },
    courseId: {
      type: String,
    },
  },
  methods: {
    editGradesTrigger(field, data) {
      this.editStudentData = { field, ...data };
      this.showModal = true;
    },
    async fetchGrades() {
      let studentId = this.student._id;
      const gradesData = await getStudentGradesByCourse(
        studentId,
        this.courseId
      );
      this.ids.gradesId = gradesData._id;
      this.gradesData = gradesData;
    },
  },
  async created() {
    await this.fetchGrades();
  },
};
</script>
