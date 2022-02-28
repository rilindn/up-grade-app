<template>
    <Container>
        <Wrapper>
          
            <va-inner-loading :loading="students?.length<=0" :size="60">  
            <TableStyled>
                <HeadStyled>
                    <ColumnStyled>{{ $t("mystudents.number") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.name") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.lastname") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.email") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.I") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.II") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.III") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.final") }}</ColumnStyled>
                    <ColumnStyled>{{ $t("mystudents.actions") }}</ColumnStyled>  
                </HeadStyled>
                <BodyStyled>
                    <RowStyled v-for="(student, i) in students" :key="i">
                        <CellStyled>{{student.number}}</CellStyled>
                        <CellStyled>{{student.name}}</CellStyled>
                        <CellStyled>{{student.lastName}}</CellStyled>
                        <CellStyled>{{student.email}}</CellStyled>
                        <CellStyled v-for="(g, i) in student.grade" :key="i">
                        <GradeWrapper>
                            <div>
                                <span>{{g.first}}</span>
                                <span>{{g.second}}</span>
                            </div>
                        <FinalGrade>
                            <span>{{ calculatedGrade(g.first, g.second) }}</span>
                        </FinalGrade>
                        </GradeWrapper>
                        </CellStyled>
                         <CellStyled>
                         <OtherGrades>{{ student.final }}</OtherGrades>
                         </CellStyled>
                        <Cell>
                        <ActionWrapper>
                            <Edit @click="editModal(students)">
                                <i class="far fa-edit"></i>
                            </Edit>
                        </ActionWrapper>
                     </Cell>
                    </RowStyled>
                </BodyStyled>    
            </TableStyled>  
            <Paginator
                @fetchPaginationItems="fetchPaginationItems"
                :page="page"
                :pager="pager"
            />
            </va-inner-loading>
        </Wrapper>
        <va-modal v-model="showModal" hide-default-actions>
            <slot>
              
                <EditStudents
                    :data="editStudentData"
                    @closeModal="closeModal"
                    @refetchStudents="fetchStudentsOnAction"
                />
            </slot>
        </va-modal>
    </Container>
</template>
<script>
import{students}from "./TeacherStudentData";
import{
   
    TableStyled,
    HeadStyled,
    BodyStyled,
    ColumnStyled,
    CellStyled,
    RowStyled,
    GradeWrapper,
    FinalGrade,
    OtherGrades,
    ActionWrapper,
    Edit,

} from "./TeacherStudent.styles";
import EditStudents from "./EditStudents";
import Paginator from "@/components/Paginator";
import { paginationStudents } from "../../api/ApiMethods";

export default{
    components:{
    
        TableStyled,
        HeadStyled,
        BodyStyled,
        ColumnStyled,
        CellStyled,
        RowStyled,
        GradeWrapper,
        FinalGrade,
        OtherGrades,
        ActionWrapper,
        Edit,
        EditStudents,
        Paginator,
      
    },
    data(){
        return{
            students,
            pager:{},
            showModal:false,
            editStudentData:[],
            currentPage: 1,
        }
    },
    methods: {
    calculatedGrade(firstGrade, secondGrade) {
      const calculatedGPA = Math.round((firstGrade + secondGrade) / 2);
      return calculatedGPA;
    },
    editModal(students){
        this.editStudentData = students;
        this.showModal = true;
    },
    closeModal(){
        this.showModal = false;
    },
    async fetchStudentsOnAction() {
      await this.fetchPaginationItems(this.currentPage);
    },
    async fetchPaginationItems(page) {
      this.currentPage = page;
      const data = await paginationStudents(page);
      this.students = data.pageOfItems;
      this.pager = data.pager;
    },
  },
}
</script>
