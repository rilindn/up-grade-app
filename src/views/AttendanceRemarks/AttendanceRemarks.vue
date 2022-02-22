<template>
  <Container>
    <Section>
      <span class="title">{{ $t("attendance.title") }}</span>
      <TableStyled>
        <Head>
          <ColumnStyled>{{ $t("attendance.subject") }}</ColumnStyled>
          <ColumnStyled>{{ $t("attendance.teacher") }}</ColumnStyled>
          <ColumnStyled>{{ $t("attendance.reasonable") }}</ColumnStyled>
          <ColumnStyled>{{ $t("attendance.unreasonable") }}</ColumnStyled>
          <ColumnStyled>{{ $t("attendance.total") }}</ColumnStyled>
        </Head>
        <BodyStyled>
          <RowStyled v-for="(a, i) in attendance" :key="i">
            <CellStyled class="subject">{{ a.subject }}</CellStyled>
            <CellStyled>{{ a.teacher }}</CellStyled>
            <CellStyled>{{ a.reasonable }}</CellStyled>
            <CellStyled>{{ a.unreasonable }}</CellStyled>
            <CellStyled>{{ a.reasonable + a.unreasonable }}</CellStyled>
          </RowStyled>
          <RowStyled class="totals">
            <CellStyled colspan="2" class="subject">{{
              $t("attendance.totalAbsences")
            }}</CellStyled>
            <CellStyled>{{ this.reasonableAbsences }}</CellStyled>
            <CellStyled>{{ this.unreasonableAbsences }}</CellStyled>
            <CellStyled>{{
              this.reasonableAbsences + this.unreasonableAbsences
            }}</CellStyled>
          </RowStyled>
        </BodyStyled>
      </TableStyled>
    </Section>
    <Section>
      <span class="title">{{ $t("attendance.remarks") }}</span>
      <RemarkWrapper>
        <RemarkItem
          @scroll="handleScroll"
          v-for="(remark, i) in remarks"
          :key="i"
        >
          <RemarkHead>
            <Teacher>
              <Avatar :size="37" :name="remark.proffesor" />
              <span class="name">{{ remark.proffesor }}</span>
            </Teacher>
            <span class="date">{{ remark.date }}</span>
          </RemarkHead>
          <Description>{{ remark.rem }}</Description>
        </RemarkItem>
      </RemarkWrapper>
    </Section>
  </Container>
</template>

<script>
import Avatar from "@/components/Avatar";
import { attendance, remarks } from "./AttendanceRemarksData";
import {
  Container,
  Section,
  ColumnStyled,
  BodyStyled,
  RowStyled,
  CellStyled,
  RemarkWrapper,
  RemarkHead,
  RemarkItem,
  Description,
  TableStyled,
  Teacher,
} from "./AttendanceRemarks.styles";
import { Head } from "@/components/table";
export default {
  components: {
    Container,
    Section,
    ColumnStyled,
    BodyStyled,
    RowStyled,
    CellStyled,
    Head,
    RemarkWrapper,
    RemarkHead,
    RemarkItem,
    Avatar,
    Description,
    TableStyled,
    Teacher,
  },
  data() {
    return {
      attendance,
      remarks,
      reasonableAbsences: 0,
      unreasonableAbsences: 0,
    };
  },
  methods: {},
  created() {
    attendance.map(({ reasonable, unreasonable }) => {
      this.reasonableAbsences += reasonable;
      this.unreasonableAbsences += unreasonable;
    });
  },
};
</script>
