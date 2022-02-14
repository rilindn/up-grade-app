<template>
  <Wrapper>
    <TablesWrapper>
      <SingleTable>
        <span class="table-title">{{ $t("gradesBoard.grades") }}</span>
        <TableStyled>
          <HeadStyled>
            <ColumnStyled>
              <div>{{ $t("gradesBoard.subjects") }}</div>
              <span>
                <hr />
              </span>
              <div>{{ $t("gradesBoard.periods") }}</div>
            </ColumnStyled>
            <ColumnStyled>I</ColumnStyled>
            <ColumnStyled>II</ColumnStyled>
            <ColumnStyled>III</ColumnStyled>
            <ColumnStyled>Final</ColumnStyled>
          </HeadStyled>
          <BodyStyled>
            <RowStyled v-for="(grades, i) in studentgrades" :key="i">
              <CellStyled class="subject-name">{{ grades.subject }}</CellStyled>
              <CellStyled v-for="(g, i) in grades.periods" :key="i">
                <GradeWrapper>
                  <div>
                    <span>{{ g.first }}</span>
                    <span>{{ g.second }}</span>
                  </div>
                  <FinalGrade>
                    <span>{{ calculatedGrade(g.first, g.second) }}</span>
                  </FinalGrade>
                </GradeWrapper>
              </CellStyled>
              <CellStyled>
                <OtherGrades>{{ grades.final }}</OtherGrades>
              </CellStyled>
            </RowStyled>
          </BodyStyled>
        </TableStyled>
      </SingleTable>
      <PieChartGPA />
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
import { studentgrades, subjects, studentmannergrades } from "./GradesData";
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
      studentgrades,
      subjects,
      studentmannergrades,
    };
  },
  methods: {
    calculatedGrade(firstGrade, secondGrade) {
      const calculatedGPA = Math.round((firstGrade + secondGrade) / 2);
      return calculatedGPA;
    },
  },
};
</script>
