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
          v-for="(scheduleHour, i) in schedule?.[this.selectedDayOrder]?.hours"
          :key="scheduleHour?.hour?._id"
          @click="handleSelectedHour(i, scheduleHour?.hour)"
          :isSelected="selectedHourOrder === i"
        >
          <CourseContainer>
            <span>{{ i + 1 }}</span>
            <span>{{ scheduleHour?.parallel?.parallelClass }}</span>
            <span>Parallel {{ scheduleHour?.parallel?.parallelName }}</span>
          </CourseContainer>
        </Course>
      </Container>
      <ThirdWrapper>
        <ul>
          <ListItem>
            <span>{{ $t("schedule.course") }}:</span
            ><span>{{ selectedHour?.course || "---" }}</span>
          </ListItem>
          <ListItem>
            <span>{{ $t("schedule.class") }}:</span
            ><span>{{ selectedHour?.classroom || "---" }}</span>
          </ListItem>
          <ListItem>
            <span>{{ $t("schedule.code") }}:</span
            ><span>{{ selectedHour?.courseCode || "---" }}</span>
          </ListItem>
          <ListItem>
            <span>{{ $t("schedule.startTime") }}:</span
            ><span>{{
              selectedHour?.startTime
                ? moment(selectedHour?.startTime).format("hh:mm A")
                : "---"
            }}</span>
          </ListItem>
          <ListItem>
            <span>{{ $t("schedule.endTime") }}:</span
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
import days from "@/data/days";
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
  WeekDay,
} from "./TeacherSchedule.styles";
import { getTeacherSchedule } from "@/api/ApiMethods";
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
      const teacherId = this.$store.getters.loggedUser?.id;
      const schedule = await getTeacherSchedule(teacherId);
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
      this.selectedHour = this.schedule?.[order]?.hours?.[0]?.hour;
    },
  },
  async created() {
    await this.getSchedule();
  },
};
</script>
