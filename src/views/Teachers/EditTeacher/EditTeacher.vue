<template>
  <FormWrapper>
    <Title>{{ $t("editTeacher.edit") }}</Title>
    <FormStyled
      @submit="editStaff"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <InputField
        :error="errors"
        name="firstName"
        type="text"
        :placeholder="$t('firstname')"
      />
      <InputField
        :error="errors"
        name="lastName"
        type="text"
        :placeholder="$t('lastname')"
      />
      <DateInput
        :error="errors"
        name="dateOfBirth"
        :defaultValue="formValues.dateOfBirth"
      />
      <InputField
        :error="errors"
        name="email"
        type="email"
        :placeholder="$t('email')"
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
} from "./EditTeacher.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import Select from "@/components/select";
import Button from "@/components/button";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { updateStaff } from "@/api/ApiMethods";

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
        firstName: yup
          .string()
          .label("Firstname")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        lastName: yup
          .string()
          .label("Lastname")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        dateOfBirth: yup.date().required().label("Date of birth"),
        email: yup.string().required().email(),
      }),
      loading: false,
      formValues: {
        firstName: this.data?.firstName,
        lastName: this.data?.lastName,
        dateOfBirth: new Date(this.data?.dateOfBirth),
        email: this.data?.email,
      },
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    async editStaff(values) {
      const id = this.data?._id;
      this.loading = true;
      try {
        const result = await updateStaff(id, values);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          await this.$emit("refetchStaff");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Teacher updated successfully!",
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
