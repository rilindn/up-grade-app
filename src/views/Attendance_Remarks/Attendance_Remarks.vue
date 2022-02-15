<template>
  <Container>
    <Wrapper>
      <TablesWrapper>
      <SingleTable>
          <span class="table-title">{{ $t("Attendance") }}</span>
      <TableStyled>
        <HeadStyled>
          <ColumnStyled>Subject</ColumnStyled>
          <ColumnStyled>Teacher</ColumnStyled>
          <ColumnStyled>Reasonable</ColumnStyled>
          <ColumnStyled>Unreasonable</ColumnStyled>
        </HeadStyled>
        <BodyStyled>
          <RowStyled  v-for="(attendancee, i) in attendance" :key="i">
            <CellStyled class="subject-name">{{ attendancee.subject }}</CellStyled>
            <CellStyled>{{ attendancee.teacher }}</CellStyled>
            <CellStyled>{{ attendancee.reasonable }}</CellStyled>
            <CellStyled>{{ attendancee.unreasonable }}</CellStyled>
          </RowStyled>
        </BodyStyled>
      </TableStyled>
     </SingleTable>
     <SingleTable>
         <span class="table-title">{{ $t("Remarks") }}</span>
      <TableStyled>
        <HeadStyled>
          <ColumnStyled>Subject</ColumnStyled>
          <ColumnStyled>Remarks</ColumnStyled>
        </HeadStyled>
        <BodyStyled>
          <RowStyled  v-for="(remarkk, i) in remarks" :key="i">
            <CellStyled class="subject-name">{{ remarkk.subjectt }}</CellStyled>
            <CellStyled>{{ remarkk.remark }}</CellStyled>
          </RowStyled>
        </BodyStyled>
      </TableStyled>
     </SingleTable>
      </TablesWrapper>
    </Wrapper>
  </Container>
</template>

<script>
import { attendance, remarks} from "./Attendance_RemarksData";
import {
  Wrapper,
  Container,
  SingleTable,
  TablesWrapper,
  ColumnStyled,
  BodyStyled,
  RowStyled,
  CellStyled,
  HeadStyled
} from "./Attendance_Remarks.styles";
export default {
  components: {
    Wrapper,
    Container,
    SingleTable,
    TablesWrapper,
    ColumnStyled,
    BodyStyled,
    RowStyled,
    CellStyled,
    HeadStyled
  },
  data() {
    return {
     attendance, 
     remarks
    };
  },
};
</script>
