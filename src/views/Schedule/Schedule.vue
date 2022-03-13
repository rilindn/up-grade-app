<template>
  <Wrapper>
    <SecondWrapper>
      <Container>
        <WeekWrapper>
          <WeekDay
            v-for="(day, i) in days"
            :key="i"
            @click="handleSelectedDay(i, day.full)"
            :isSelected="selectedDayOrder === i"
          >
            <span>{{ day.short }}</span>
          </WeekDay>
        </WeekWrapper>
        <Course
          v-for="(hour, i) in schedule?.days?.[this.selectedDayOrder]?.hours"
          :key="hour?._id"
          @click="handleSelectedHour(i, hour)"
          :isSelected="selectedHourOrder === i"
        >
          <CourseContainer>
            <span>{{ i + 1 }}</span>
            <span>{{ hour?.course }}</span>
            <span>{{ hour?.courseCode }}</span>
          </CourseContainer>
        </Course>
      </Container>
      <ThirdWrapper>
        <ul>
          <ListItem>
            <span>Course:</span><span>{{ selectedHour?.course || "---" }}</span>
          </ListItem>
          <ListItem>
            <span>Class:</span
            ><span>{{ selectedHour?.classroom || "---" }}</span>
          </ListItem>
          <ListItem>
            <span>Code:</span
            ><span>{{ selectedHour?.courseCode || "---" }}</span>
          </ListItem>
          <ListItem>
            <span>Professor:</span
            ><span>{{ selectedHour?.teacher || "---" }}</span>
          </ListItem>
          <ListItem>
            <span>Start time:</span
            ><span>{{
              selectedHour?.startTime
                ? moment(selectedHour?.startTime).format("hh:mm A")
                : "---"
            }}</span>
          </ListItem>
          <ListItem>
            <span>End time:</span
            ><span>{{
              selectedHour?.startTime
                ? moment(selectedHour?.endTime).format("hh:mm A")
                : "---"
            }}</span>
          </ListItem>
        </ul>
      </ThirdWrapper>
    </SecondWrapper>
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
  AddHour,
  WeekDay,
} from "./Schedule.styles";
import days from "@/data/days";
import { getStudentSchedule } from "@/api/ApiMethods";
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
    AddHour,
    WeekDay,
  },
  data() {
    return {
      days,
      schedule: {},
      selectedDay: "Monday",
      selectedDayOrder: 0,
      selectedHour: {},
      selectedHourOrder: 0,
    };
  },
  methods: {
    async getSchedule() {
      const studentId = this.$store.getters.loggedUser?.id;
      const schedule = await getStudentSchedule(studentId);
      this.schedule = schedule;
      this.selectedHour = schedule?.days?.[this.selectedDayOrder]?.hours?.[0];
    },
    handleSelectedHour(order, hour) {
      this.selectedHour = hour;
      this.selectedHourOrder = order;
    },
    handleSelectedDay(order, val) {
      this.selectedDay = val;
      this.selectedDayOrder = order;
      this.selectedHourOrder = 0;
      this.selectedHour = this.schedule?.days?.[order]?.hours?.[0];
    },
  },
  async created() {
    await this.getSchedule();
  },
};
</script>
