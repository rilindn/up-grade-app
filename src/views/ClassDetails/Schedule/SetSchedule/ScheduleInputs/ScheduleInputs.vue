<template>
  <Wrapper>
    <va-collapse
      v-model="collapse"
      style="width: 400px"
      :header="course || 'Set a hour schedule'"
    >
      <InputsWrapper>
        <InputField placeholder="Classroom" :name="`classroom${order}`" />
        <SelectCourseBtn
          type="button"
          @click="courseModal = !courseModal"
          bgColor="var(--va-primaryLight)"
          borderColor="var(--va-primaryLight)"
          :title="course ? 'Change course' : 'Select a course'"
        />
        <InputField :name="`course${order}`" style="display: none" />
      </InputsWrapper>
      <InputsWrapper>
        <TimeInput
          placeholder="Start Time"
          :error="errors"
          :name="`startTime${order}`"
        />
        <TimeInput
          placeholder="End Time"
          :error="errors"
          :name="`endTime${order}`"
        />
      </InputsWrapper>
    </va-collapse>
    <RemoveIcon v-if="isLast" @click="$emit('removeLastOne')">
      <i class="far fa-minus-circle"></i>
    </RemoveIcon>
    <va-modal v-model="courseModal" hide-default-actions>
      <slot>
        <SelectCourse
          @selectCourse="selectCourse"
          :parallelId="this.$route.params.id"
          @closeModal="courseModal = false"
        />
      </slot>
    </va-modal>
  </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import {
  Wrapper,
  FormWrapper,
  SelectCourseBtn,
  Column,
  InputsWrapper,
  RemoveIcon,
} from "./ScheduleInputs.styles";
import TimeInput from "@/components/TimeInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import SelectCourse from "./SelectCourse";

export default {
  components: {
    Wrapper,
    InputField,
    RemoveIcon,
    FormWrapper,
    TimeInput,
    SelectInput,
    Form,
    SelectCourseBtn,
    Column,
    InputsWrapper,
    SelectCourse,
  },
  props: {
    isLast: { type: Boolean },
    errors: { type: Object },
    order: { type: String },
    formValues: { type: Object },
  },
  data() {
    return {
      collapse: this.isLast,
      courseModal: false,
      course: "",
    };
  },
  methods: {
    selectCourse(course) {
      this.course = `${course?.teacher?.name}   -   ${course?.subject?.name}`;
      this.$emit("updateFormSchedule", this.order, course);
    },
  },
};
</script>
<style></style>
