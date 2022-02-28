<template>
  <FormWrapper>
    <Title>Edit Student</Title>
    <FormStyled
      @submit="editStudents"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <SelectInput
        :error="errors"
        defaultValue="Periods"
        name="periods"
        options="I"
        placeholder="Periods"
      />
      <InputField
        :error="errors"
        name="firstGrade"
        type="grade"
        placeholder="FirstGrade"
      />
      <InputField
        :error="errors"
        name="secondGrade"
        type="grade"
        placeholder="SecondGrade"
      />
      <InputField
        :error="errors"
        name="finalGrade"
        type="grade"
        placeholder="FinalGrade"
      />
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
} from "./EditStudents.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import Select from "@/components/select";
import Button from "@/components/button";
import SelectInput from "@/components/SelectInput";
import { updateStudent } from "../../../api/ApiMethods";

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
        firstGrade: yup.number().required().label("firstGrade"),
        secondGrade: yup.number().required().label("secondGrade"),
        finalGrade: yup.number().required().label("finalGrade"),

      }),
      loading: false,
      formValues: {
        firstGrade: this.data?.firstGrade,
        secondGrade: this.data?.secondGrade,
        finalGrade: this.data?.finalGrade,
      },
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    async editStudents(values) {
      const id = this.data?._id;
      this.loading = true;
      try {
        const result = await updateStudent(id, values);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          await this.$emit("refetchStudents");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Student data updated successfully!",
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
