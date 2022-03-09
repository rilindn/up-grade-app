<template>
  <FormWrapper>
    <Title>{{ $t("subjects.edit") }}</Title>
    <FormStyled
      @submit="editSubject"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <InputField
        :error="errors"
        name="subjectName"
        type="text"
        :placeholder="$t('parallels.name')"
      />
      <InputField
        :error="errors"
        name="targetedLevel"
        type="number"
        :placeholder="$t('subjects.level')"
      />
      <InputField
        :error="errors"
        name="subjectDescription"
        type="text"
        as="textarea"
        :placeholder="$t('subjects.description')"
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
} from "./EditSubject.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import Select from "@/components/select";
import Button from "@/components/button";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { updateSubject } from "../../../api/ApiMethods";

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
        subjectName: yup
          .string()
          .label("Name")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        targetedLevel: yup
          .number()
          .min(1)
          .label("Level")
          .typeError("Level is a required field")
          .required(),
        subjectDescription: yup.string().min(3).label("Description").required(),
      }),
      loading: false,
      formValues: {
        subjectName: this.data?.subjectName,
        targetedLevel: this.data?.targetedLevel,
        subjectDescription: this.data?.subjectDescription,
      },
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    async editSubject(values) {
      const id = this.data?._id;
      this.loading = true;
      try {
        const result = await updateSubject(id, values);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          await this.$emit("refetchSubjects");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Subject updated successfully!",
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
