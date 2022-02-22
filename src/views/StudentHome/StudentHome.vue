<template>
  <Wrapper>
   <TopBox>
       <div>
       <p>Welcome back Agnesa!</p>
       <span>Lorem ipsum lorem lorem ipsum sdhjs lorem ipsum sum lorem lorem ipsum sdhjs lorem ipsum</span>
       </div>
     <img src="@/assets/studentProfile.svg" alt=""  width="300"/>
   </TopBox>
   <MiddleBox>
          <RightBox>
             <h3>List Of Classmates</h3>
     <StudentList
          bgColor="var(--va-green600)"
          name="Ana Smith"
          studentEmail="as29120@std-uni.net"
          image="profilee.jpeg"
          activeStudent="Active Student"
        />
          <StudentList
          bgColor="var(--va-errorMain)"
          name="Ela Smith"
          studentEmail="el2233220@std-uni.net"
          image="profilee.jpeg"
          activeStudent="Non Active Student"
        />
   </RightBox>
   <LeftBox>
      <h3>List Of   Teachers</h3>
       <TeacherContainer>
        <Teacher
          bgColor="var(--va-orange50)"
          textColor="var(--va-orange400)"
          name="Alicia Smith"
          subjectTeacher="English Teacher"
          image="profilee.jpeg"
        />
       </TeacherContainer>
        <TeacherContainer>
        <Teacher
          bgColor="var(--va-green40)"
          textColor="var(--va-green200)"
          name="Alicia Smith"
          subjectTeacher="Math Teacher"
          image="profile.jpeg"
        />
       </TeacherContainer>
       <TeacherContainer>
        <Teacher
          bgColor="var(--va-blue50)"
          textColor="var(--va-blue100)"
          name="Alicia Smith"
          subjectTeacher="Education Teacher"
          image="profilee.jpeg"
        />
       </TeacherContainer>
       <TeacherContainer>
        <Teacher
          bgColor="var(--va-pink50)"
          textColor="var(--va-pink300)"
          name="Alicia Smith"
          subjectTeacher="Spanish Teacher"
          image="profile.jpeg"
        />
       </TeacherContainer>
       <TeacherContainer>
        <Teacher
          bgColor="var(--va-yellow50)"
          textColor="var(--va-yellow200)"
          name="Alicia Smith"
          subjectTeacher="Math Teacher"
          image="profile.jpeg"
        />
       </TeacherContainer> 
       <TeacherContainer>
        <Teacher
          bgColor="var(--va-orange50)"
          textColor="var(--va-orange400)"
          name="Alicia Smith"
          subjectTeacher="English Teacher"
          image="profilee.jpeg"
        />
       </TeacherContainer> 
   </LeftBox>
 </MiddleBox>
       
  </Wrapper>
</template>
<script>
import { Wrapper,TopBox,LeftBox,MiddleBox,RightBox,TeacherContainer} from "./StudentHome.styles";
import Teacher from "../../components/teacher";
import StudentList from "../../components/studentList";
export default {
  components: {
    Wrapper,
    TopBox,
    MiddleBox,
    LeftBox,
    RightBox,
    TeacherContainer,
    StudentList,
    Teacher
  },
};
</script>
