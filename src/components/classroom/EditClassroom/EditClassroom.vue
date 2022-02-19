<template>
  <FormWrapper>
    <Title>Edit Grade</Title>
    <FormStyled
      @submit="editClass"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <InputField
        :error="errors"
        name="className"
        type="text"
        placeholder="Classname"
      />
      <InputField
        :error="errors"
        name="level"
        type="number"
        placeholder="Level"
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
} from "./EditClassroom.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import Select from "@/components/select";
import Button from "@/components/button";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { updateClass } from "../../../api/ApiMethods";

export default {
  components: {
    Modal,
    FormWrapper,
    InputField,
    FormStyled,
    Select,
    Button,
    DateInput,
    Title,
    CancelButton,
    SaveButton,
    SelectInput,
  },
  data() {
    return {
      editSchema: yup.object({
        className: yup
          .string()
          .label("Firstname")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        level: yup.number().min(1).label("Level").required(),
      }),
      loading: false,
      formValues: {
        className: this.data?.className,
        level: this.data?.level,
      },
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    async editClass(values) {
      const id = this.data?._id;
      this.loading = true;
      try {
        const result = await updateClass(id, values);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          await this.$emit("fetchClasses");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Grade updated successfully!",
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
