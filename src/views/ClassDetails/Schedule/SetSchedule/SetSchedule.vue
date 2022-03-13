<template>
  <Wrapper>
    <FormWrapper>
      <h2>Set Schedule</h2>
      <Form
        @submit="register"
        :validation-schema="registerSchema"
        v-slot="{ errors }"
      >
        <SelectInput
          :error="errors"
          name="day"
          placeholder="Choose a day"
          :options="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']"
        />

        <ScheduleInputs
          :errors="errors"
          v-for="s in schedules"
          :key="s"
          :order="s"
          :isLast="schedules === s"
          @removeLastOne="schedules--"
          :formValues="formValues"
          @updateFormSchedule="updateFormSchedule"
        />
        <NewSchedule @click="handleNewSchedule">
          <i class="far fa-plus-circle"></i>
        </NewSchedule>
        <SaveButton title="Save" :loading="loading" type="submit" />
        <CancelButton :title="$t('cancel')" @click="$emit('closeModal')" />
      </Form>
    </FormWrapper>
  </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import ScheduleInputs from "./ScheduleInputs";
import Button from "@/components/button";
import {
  Wrapper,
  FormWrapper,
  SaveButton,
  Column,
  InputsWrapper,
  CancelButton,
  NewSchedule,
} from "./SetSchedule.styles";
import TimeInput from "@/components/TimeInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import { addScheduleHour } from "@/api/ApiMethods";

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
    ScheduleInputs,
    Button,
  },
  data() {
    return {
      schedules: 1,
      currentInputs: 2,
      loading: false,
      formValues: {},
    };
  },
  methods: {
    handleNewSchedule() {
      this.schedules++;
      this.formValues = {
        ...this.formValues,
        [`course${this.schedules}`]: "",
      };
    },
    updateFormSchedule(order, data) {
      this.formValues = {
        ...this.formValues,
        [`courseId${order}`]: data?._id,
        [`course${order}`]: data?.subject?.name,
        [`teacher${order}`]: data?.teacher?.name,
        [`teacherId${order}`]: data?.teacher?.id,
        [`courseCode${order}`]: data?.courseCode,
      };
    },
    async register(data) {
      let payload = {
        parallel: this.$route.params.id,
        day: data?.day,
        hours: [],
      };
      for (let i = 1; i <= this.schedules; i++) {
        const courseId = this.formValues?.[`courseId${i}`];
        const course = this.formValues?.[`course${i}`];
        const teacher = this.formValues?.[`teacher${i}`];
        const teacherId = this.formValues?.[`teacherId${i}`];
        const courseCode = this.formValues?.[`courseCode${i}`];
        const classroom = data?.[`classroom${i}`];
        const startTime = data?.[`startTime${i}`];
        const endTime = data?.[`endTime${i}`];
        if (course && startTime && endTime) {
          payload.hours.push({
            teacher,
            courseId,
            courseCode,
            teacherId,
            course,
            classroom,
            startTime,
            endTime,
          });
        }
      }
      this.loading = true;
      try {
        const result = await addScheduleHour({ ...payload });
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("refetchSchedule");
          this.$emit("closeModal");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "New hour added successfully!",
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
};
</script>
<style></style>
