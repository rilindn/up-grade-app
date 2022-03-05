<template>
  <FormWrapper>
    <Title>Edit Grades</Title>
    <FormStyled
      @submit="editStudents"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <InputField
        v-if="data?.field === 'final'"
        :error="errors"
        name="finalGrade"
        type="number"
        placeholder="Final grade"
      />
      <template v-else>
        <InputField
          :error="errors"
          name="first"
          type="number"
          placeholder="First grade"
        />
        <InputField
          :error="errors"
          name="second"
          type="number"
          placeholder="Second grade"
        />
        <InputField
          :error="errors"
          name="final"
          type="number"
          placeholder="Final grade"
        />
      </template>
      <SaveButton :title="$t('save')" :loading="loading" type="submit" />
      <CancelButton :title="$t('cancel')" @click="$emit('closeModal')" />
    </FormStyled>
  </FormWrapper>
</template>

<script>
import {
  Modal,
  FormWrapper,
  FormStyled,
  Title,
  CancelButton,
  SaveButton,
} from "./EditStudentGrades.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import Select from "@/components/select";
import Button from "@/components/button";
import SelectInput from "@/components/SelectInput";
import { editStudentGrades, updateStudent } from "../../../api/ApiMethods";

export default {
  components: {
    Modal,
    FormWrapper,
    InputField,
    FormStyled,
    Select,
    Button,
    Title,
    CancelButton,
    SaveButton,
    SelectInput,
  },
  data() {
    return {
      editSchema: yup.object({
        first: yup
          .number()
          .typeError("Grade must be a number")
          .nullable()
          .label("First grade")
          .when("second", {
            is: Number,
            then: yup
              .number()
              .typeError("Grade must be a number")
              .nullable()
              .required("Must enter first grade"),
          })
          .when("final", {
            is: Number,
            then: yup
              .number()
              .typeError("Grade must be a number")
              .nullable()
              .required("Must enter first grade"),
          }),
        second: yup
          .number()
          .typeError("Grade must be a number")
          .nullable()
          .label("Second grade")
          .when("final", {
            is: Number,
            then: yup
              .number()
              .typeError("Grade must be a number")
              .nullable()
              .required("Must enter second grade"),
          }),
        final: yup
          .number()
          .typeError("Grade must be a number")
          .nullable()
          .label("Final grade"),
      }),
      loading: false,
      formValues: {
        first: this.data?.first,
        second: this.data?.second,
        final: this.data?.final,
        finalGrade: this.data?.finalGrade,
      },
    };
  },
  props: {
    data: {
      type: Object,
    },
    ids: {
      type: Object,
    },
  },
  methods: {
    async editStudents(values) {
      const field = this.data.field;
      const { finalGrade, ...periodGrades } = values;
      let payload;
      if (finalGrade) {
        payload = {
          ids: this.ids,
          gradesPayload: {
            [field]: finalGrade,
          },
        };
      } else {
        payload = {
          ids: this.ids,
          gradesPayload: {
            periods: {
              [field]: periodGrades,
            },
          },
        };
      }
      this.loading = true;
      try {
        const result = await editStudentGrades(this.ids.gradesId, payload);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.$emit("refetchGrades");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Student grades updated successfully!",
          });
        } else {
          this.loading = false;
          this.$notify({
            type: "error",
            duration: 2000,
            text: result?.response?.data,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
