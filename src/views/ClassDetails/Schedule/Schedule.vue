<template>
  <Wrapper>
    <AddHour @click="addScheduleHour = true">
      <span><i class="fas fa-plus-circle"></i></span>
      <span>{{ $t("addNew") }}</span>
    </AddHour>
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
        <Actions>
          <va-button-dropdown label="Actions" class="ml-2">
            <ActionsContent>
              <span @click="editSchedule = true"
                ><i class="far fa-edit"></i>{{ $t("edit") }}</span
              >
              <span @click="handleDelete"
                ><i class="far fa-trash-alt"></i>{{ $t("delete") }}</span
              >
            </ActionsContent>
          </va-button-dropdown>
        </Actions>
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
    <va-modal v-model="addScheduleHour" hide-default-actions>
      <slot>
        <SetSchedule
          @refetchSchedule="getSchedule"
          @closeModal="addScheduleHour = false"
        />
      </slot>
    </va-modal>
    <va-modal v-model="editSchedule" hide-default-actions>
      <slot>
        <EditSchedule
          @closeModal="editSchedule = false"
          :defaultValues="{ ...selectedHour, selectedDay }"
          @refetchSchedule="getSchedule"
        />
      </slot>
    </va-modal>
  </Wrapper>
</template>
<script>
import days from "@/data/days";
import { getParallelsSchedule } from "@/api/ApiMethods";
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
  Actions,
  ActionsContent,
} from "./Schedule.styles";
import SetSchedule from "./SetSchedule";
import EditSchedule from "./EditSchedule";
import { deleteScheduleHour } from "../../../api/ApiMethods";
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
    SetSchedule,
    Actions,
    EditSchedule,
    ActionsContent,
  },
  data() {
    return {
      days,
      addScheduleHour: false,
      editSchedule: false,
      schedule: {},
      selectedDay: "Monday",
      selectedDayOrder: 0,
      selectedHour: {},
      selectedHourOrder: 0,
    };
  },
  methods: {
    async getSchedule() {
      const schedule = await getParallelsSchedule(this.$route.params.id);
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
    async handleDelete() {
      const payload = {
        parallel: this.$route.params.id,
        day: this.selectedDay,
        hourId: this.selectedHour?._id,
      };
      if (confirm("Are you sure?")) {
        await deleteScheduleHour(payload);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Hour deleted!",
        });
        this.selectedHourOrder = 0;
        await this.getSchedule();
      }
    },
  },
  async created() {
    await this.getSchedule();
  },
};
</script>
