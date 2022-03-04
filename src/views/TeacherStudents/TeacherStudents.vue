<template>
  <Container>
    <Wrapper>
      <va-inner-loading :loading="students?.length <= 0" :size="60">
        <TableStyled>
          <HeadStyled>
            <ColumnStyled>ID</ColumnStyled>
            <ColumnStyled>{{ $t("mystudents.name") }}</ColumnStyled>
            <ColumnStyled>{{ $t("mystudents.lastname") }}</ColumnStyled>
            <ColumnStyled>{{ $t("mystudents.email") }}</ColumnStyled>
            <ColumnStyled>I</ColumnStyled>
            <ColumnStyled>II</ColumnStyled>
            <ColumnStyled>III</ColumnStyled>
            <ColumnStyled>{{ $t("mystudents.final") }}</ColumnStyled>
          </HeadStyled>
          <BodyStyled>
            <RowStyled v-for="(student, i) in students" :key="i">
              <SingleStudentRecord
                :student="student"
                :courseId="$route.params.courseId"
              />
            </RowStyled>
          </BodyStyled>
        </TableStyled>
      </va-inner-loading>
    </Wrapper>
  </Container>
</template>
<script>
import {
  TableStyled,
  HeadStyled,
  BodyStyled,
  ColumnStyled,
  RowStyled,
} from "./TeacherStudents.styles";
import EditStudentGrades from "./EditStudentGrades";
import SingleStudentRecord from "./SingleStudentRecord";
import { getParallelStudents, paginationStudents } from "@/api/ApiMethods";

export default {
  components: {
    TableStyled,
    HeadStyled,
    BodyStyled,
    ColumnStyled,
    RowStyled,
    EditStudentGrades,
    SingleStudentRecord,
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {},
  async beforeCreate() {
    const { parallelId } = this.$route.params;
    const students = await getParallelStudents(parallelId);
    this.students = students;
  },
};
</script>
