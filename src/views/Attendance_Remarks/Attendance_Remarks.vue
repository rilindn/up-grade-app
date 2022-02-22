<template>
  <Container>
    <Wrapper>
      <SectionsWrapper>
      <Section>
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
     </Section>
     <Section>
         <span class="table-title">{{ $t("Remarks") }}</span>
         <RemarkWrapper>
             <RemarkBody>
               <RemarkItem @scroll="handleScroll" v-for="(remark, i) in remarks" :key="i" >
                 <RemarkDate class="proff-date">
                  <div>
                    <Avatar :size="37"/>
                    <span>{{remark.proffesor}}</span>
                    <span>{{remark.date}}</span>
                   </div>
                 </RemarkDate>
                 <Remarks>{{remark.rem}}</Remarks>
               </RemarkItem>
             </RemarkBody>
         </RemarkWrapper>
       </Section>
      </SectionsWrapper>
    </Wrapper>
  </Container>
</template>

<script>
import Avatar from "@/components/Avatar"
import { attendance,remarks} from "./Attendance_RemarksData";
import {
  Wrapper,
  Container,
  Section,
  SectionsWrapper,
  ColumnStyled,
  BodyStyled,
  RowStyled,
  CellStyled,
  HeadStyled,
  RemarkWrapper,
  RemarkDate,
  RemarkItem,
  RemarkBody,
  Remarks

} from "./Attendance_Remarks.styles";

export default {
  components: {
    Wrapper,
    Container,
    Section,
    SectionsWrapper,
    ColumnStyled,
    BodyStyled,
    RowStyled,
    CellStyled,
    HeadStyled,
    RemarkWrapper,
    RemarkDate,
    RemarkItem,
    RemarkBody,
    Avatar,
    Remarks

  },
  data() {
    return {
     attendance, 
     remarks
    };
  },
  methods:{
    handleScroll(e)  {
    var currentScrollPosition = e.srcElement.scrollTop;
    if (currentScrollPosition > this.scrollPosition) {
        console.log("Scrolling down");
    }
    this.scrollPosition = currentScrollPosition;
   }
  },
};
</script>
