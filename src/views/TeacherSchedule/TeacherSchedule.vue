<template>
  <Wrapper>
    <SecondWrapper>
      <Container>
        <WeekWrapper>
          <div>
            <span>Mon</span>
          </div>
          <div>
            <span>Tue</span>
          </div>
          <div>
            <span>Wed</span>
          </div>
          <div>
            <span>Thur</span>
          </div>
          <div>
            <span>Fri</span>
          </div>
        </WeekWrapper>
        <Course>
          <CourseContainer>
            <p>1</p>
            <CourseCode>
              <h4>First Grade</h4>
              <span>Parallel 1</span>
            </CourseCode>
          </CourseContainer>
          <CourseContainer>
            <p>2</p>
            <CourseCode>
              <h4>Second Grade</h4>
              <span>Parallel 2</span>
            </CourseCode>
          </CourseContainer>
          <CourseContainer>
            <p>3</p>
            <CourseCode>
              <h4>Third Grade</h4>
              <span>Parallel 1</span>
            </CourseCode>
          </CourseContainer>
          <CourseContainer>
            <p>4</p>
            <CourseCode>
              <h4>Second Grade</h4>
              <span>Parallel 1</span>
            </CourseCode>
          </CourseContainer>
          <CourseContainer>
            <p>5</p>
            <CourseCode>
              <h4>Third Grade</h4>
              <span>Parallel 1</span>
            </CourseCode>
          </CourseContainer>
          <CourseContainer>
            <p>6</p>
            <CourseCode>
              <h4>Forth Grade</h4>
              <span>Parallel 1</span>
            </CourseCode>
          </CourseContainer>
        </Course>
      </Container>
    </SecondWrapper>
    <ThirdWrapper>
      <ul>
        <ListItem>
          <span>{{ $t("schedule.course") }}:</span><span>Mathematics</span>
        </ListItem>
        <ListItem>
          <span>{{ $t("schedule.class") }}:</span><span>Z008</span>
        </ListItem>
        <ListItem>
          <span>{{ $t("schedule.code") }}:</span><span>MAT001</span>
        </ListItem>
        <ListItem>
          <span>{{ $t("schedule.startTime") }}:</span><span>08:00 AM</span>
        </ListItem>
        <ListItem>
          <span>{{ $t("schedule.endTime") }}:</span><span>08:45 AM</span>
        </ListItem>
      </ul>
    </ThirdWrapper>
  </Wrapper>
</template>
<script>
import {
  Wrapper,
  SecondWrapper,
  ThirdWrapper,
  WeekWrapper,
  Container,
  Course,
  CourseContainer,
  CourseCode,
  ListItem,
} from "./TeacherSchedule.styles";
export default {
  components: {
    Wrapper,
    SecondWrapper,
    ThirdWrapper,
    WeekWrapper,
    Container,
    Course,
    CourseContainer,
    CourseCode,
    ListItem,
  },
};
</script>
