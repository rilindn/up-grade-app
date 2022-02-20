<template>
  <FormWrapper>
    <Title>Edit user</Title>
    <FormStyled
      @submit="editUser"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <InputField
        :error="errors"
        name="firstName"
        type="name"
        placeholder="Firstname"
      />
      <InputField
        :error="errors"
        name="lastName"
        type="lastname"
        placeholder="Lastname"
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
        placeholder="email"
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
} from "./EditStudent.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import Select from "@/components/select";
import Button from "@/components/button";
import DateInput from "@/components/DateInput";
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
        email: yup.string().required().email().label("Email"),
        dateOfBirth: yup.date().required().label("Date of birth"),
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
    async editUser(values) {
      const id = this.data?._id;
      this.loading = true;
      try {
        const result = await updateStudent(id, values);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          await this.$emit("fetchStudents");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "User data updated successfully!",
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
