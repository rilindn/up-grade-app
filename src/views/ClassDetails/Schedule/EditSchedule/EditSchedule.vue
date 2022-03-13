<template>
  <Wrapper>
    <FormWrapper>
      <h2>Edit Schedule</h2>
      <Form
        @submit="handleEdit"
        v-slot="{ errors }"
        :initial-values="formValues"
      >
        <InputField placeholder="Classroom" name="classroom" />
        <InputsWrapper>
          <CurrentCourse>
            <span>{{ formValues.course }} - {{ formValues.teacher }}</span>
          </CurrentCourse>
          <SelectCourseBtn
            type="button"
            @click="courseModal = !courseModal"
            bgColor="var(--va-primaryLight)"
            borderColor="var(--va-primaryLight)"
            title="Change course"
          />
        </InputsWrapper>
        <InputsWrapper>
          <TimeInput
            placeholder="Start Time"
            :error="errors"
            name="startTime"
            :defaultValue="formValues.startTime"
          />
          <TimeInput
            placeholder="End Time"
            :error="errors"
            name="endTime"
            :defaultValue="formValues.endTime"
          />
        </InputsWrapper>
        <RemoveIcon v-if="isLast" @click="$emit('removeLastOne')">
          <i class="far fa-minus-circle"></i>
        </RemoveIcon>
        <va-modal v-model="courseModal" hide-default-actions>
          <slot>
            <SelectCourse
              @selectCourse="updateFormSchedule"
              :parallelId="this.$route.params.id"
              @closeModal="courseModal = false"
            />
          </slot>
        </va-modal>
        <SaveButton title="Save" :loading="loading" type="submit" />
        <CancelButton :title="$t('cancel')" @click="$emit('closeModal')" />
      </Form>
    </FormWrapper>
  </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import Button from "@/components/button";
import {
  Wrapper,
  FormWrapper,
  SaveButton,
  Column,
  InputsWrapper,
  CancelButton,
  NewSchedule,
  SelectCourseBtn,
  CurrentCourse,
} from "./EditSchedule.styles";
import TimeInput from "@/components/TimeInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import SelectCourse from "./SelectCourse";
import { updateScheduleHour } from "@/api/ApiMethods";

export default {
  components: {
    CancelButton,
    NewSchedule,
    InputField,
    Wrapper,
    FormWrapper,
    TimeInput,
    SelectInput,
    Form,
    SaveButton,
    Column,
    InputsWrapper,
    Button,
    SelectCourse,
    SelectCourseBtn,
    CurrentCourse,
  },
  data() {
    return {
      courseModal: false,
      schedules: 1,
      currentInputs: 2,
      loading: false,
      formValues: {},
    };
  },
  props: {
    defaultValues: { type: Object },
  },
  methods: {
    updateFormSchedule(data) {
      this.formValues = {
        ...this.formValues,
        courseId: data?._id,
        course: data?.subject?.name,
        teacher: data?.teacher?.name,
        teacherId: data?.teacher?.id,
        courseCode: data?.courseCode,
      };
    },
    async handleEdit(data) {
      const courseId = this.formValues?.courseId;
      const course = this.formValues?.course;
      const teacher = this.formValues?.teacher;
      const teacherId = this.formValues?.teacherId;
      const courseCode = this.formValues?.courseCode;
      const classroom = data?.classroom;
      const startTime = data?.startTime;
      const endTime = data?.endTime;
      let payload = {
        parallel: this.$route.params.id,
        course: this.defaultValues?.courseId,
        day: data?.day,
        hours: {
          courseId,
          course,
          teacher,
          teacherId,
          courseCode,
          classroom,
          startTime,
          endTime,
        },
      };
      this.loading = true;
      try {
        const result = await updateScheduleHour({ ...payload });
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("refetchSchedule");
          this.$emit("closeModal");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Changes saved successfully!",
          });
        } else {
          this.loading = false;
          this.$notify({
            type: "error",
            duration: 2000,
            text: "Please try again!",
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.formValues = {
      day: this.defaultValues?.selectedDay,
      classroom: this.defaultValues?.classroom,
      courseId: this.defaultValues?.courseId,
      course: this.defaultValues?.course,
      teacher: this.defaultValues?.teacher,
      teacherId: this.defaultValues?.teacherId,
      courseCode: this.defaultValues?.courseCode,
      startTime: new Date(this.defaultValues?.startTime),
      endTime: new Date(this.defaultValues?.endTime),
    };
  },
};
</script>
<style></style>
