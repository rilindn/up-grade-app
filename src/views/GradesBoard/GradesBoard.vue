<template>
  <Wrapper>
    <TablesWrapper>
      <SingleTable>
        <span class="table-title">{{ $t("gradesBoard.grades") }}</span>
        <TableStyled>
          <HeadStyled>
            <ColumnStyled colspan="2">
              <div>{{ $t("gradesBoard.periods") }}</div>
              <span>
                <hr />
              </span>
              <div>{{ $t("gradesBoard.course") }}</div>
            </ColumnStyled>
            <ColumnStyled>I</ColumnStyled>
            <ColumnStyled>II</ColumnStyled>
            <ColumnStyled>III</ColumnStyled>
            <ColumnStyled>{{ $t("gradesBoard.final") }}</ColumnStyled>
          </HeadStyled>
          <BodyStyled>
            <RowStyled v-for="(grades, i) in studentgrades.grade" :key="i">
              <CellStyled class="subject-name">
                {{ grades.course.teacher || null }}
              </CellStyled>
              <CellStyled class="subject-name">
                {{ grades.course.subject || null }}
              </CellStyled>
              <CellStyled>
                <GradeWrapper>
                  <div>
                    <span>{{ grades?.periods?.["1"]?.first || null }}</span>
                    <span>{{ grades?.periods?.["1"]?.second || null }}</span>
                  </div>
                  <FinalGrade>
                    <span>{{ grades?.periods?.["1"]?.final || null }}</span>
                  </FinalGrade>
                </GradeWrapper>
              </CellStyled>
              <CellStyled>
                <GradeWrapper>
                  <div>
                    <span>{{ grades?.periods?.["2"]?.second || null }}</span>
                    <span>{{ grades?.periods?.["2"]?.second || null }}</span>
                  </div>
                  <FinalGrade>
                    <span>{{ grades?.periods?.["2"]?.final || null }}</span>
                  </FinalGrade>
                </GradeWrapper>
              </CellStyled>
              <CellStyled>
                <GradeWrapper>
                  <div>
                    <span>{{ grades?.periods?.["3"]?.second || null }}</span>
                    <span>{{ grades?.periods?.["3"]?.second || null }}</span>
                  </div>
                  <FinalGrade>
                    <span>{{ grades?.periods?.["3"]?.final || null }}</span>
                  </FinalGrade>
                </GradeWrapper>
              </CellStyled>
              <CellStyled>
                <OtherGrades>{{ grades?.final || null }}</OtherGrades>
              </CellStyled>
            </RowStyled>
          </BodyStyled>
        </TableStyled>
      </SingleTable>
      <PieChartGPA v-if="studentGPA" :gpa="studentGPA" />
      <!-- <SingleTable>
        <span>{{ $t("gradesBoard.manner") }}</span>
        <TableStyled>
          <HeadStyled>
            <ColumnStyled>
              <div>{{ $t("gradesBoard.subjects") }}</div>
              <hr />
              <div>{{ $t("gradesBoard.periods") }}</div>
            </ColumnStyled>
            <ColumnStyled>I</ColumnStyled>
            <ColumnStyled>II</ColumnStyled>
            <ColumnStyled>III</ColumnStyled>
            <ColumnStyled>Final</ColumnStyled>
          </HeadStyled>
          <BodyStyled>
            <RowStyled v-for="(grades, i) in studentmannergrades" :key="i">
              <CellStyled>{{ grades.subject }}</CellStyled>
              <CellStyled v-for="(g, i) in grades.periods" :key="i">
                <OtherGrades>{{ g.grade }}</OtherGrades>
              </CellStyled>
              <CellStyled>
                <OtherGrades>{{ grades.final }}</OtherGrades>
              </CellStyled>
            </RowStyled>
          </BodyStyled>
        </TableStyled>
      </SingleTable> -->
    </TablesWrapper>
  </Wrapper>
</template>
<script>
import PieChartGPA from "@/components/student/PieChartGPA";
import {
  Wrapper,
  TablesWrapper,
  TableStyled,
  HeadStyled,
  BodyStyled,
  ColumnStyled,
  RowStyled,
  CellStyled,
  GradeWrapper,
  FinalGrade,
  OtherGrades,
  SingleTable,
} from "./GradesBoard.styles";
import { getStudentsGPA, getStudentGrades } from "../../api/ApiMethods";
export default {
  components: {
    Wrapper,
    TablesWrapper,
    TableStyled,
    HeadStyled,
    BodyStyled,
    ColumnStyled,
    RowStyled,
    CellStyled,
    GradeWrapper,
    FinalGrade,
    OtherGrades,
    SingleTable,
    PieChartGPA,
  },
  data() {
    return {
      studentgrades: {},
      studentGPA: 0,
    };
  },
  methods: {},
  async beforeCreate() {
    const grades = await getStudentGrades(this.$store.getters?.loggedUser?.id);
    const studentGPA = await getStudentsGPA(
      this.$store.getters?.loggedUser?.id
    );
    this.studentgrades = grades;
    this.studentGPA = studentGPA;
  },
};
</script>
