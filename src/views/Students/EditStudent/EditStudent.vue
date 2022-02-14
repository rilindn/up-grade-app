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
        name="firstname"
        type="name"
        placeholder="Firstname"
      />
      <InputField
        :error="errors"
        name="lastname"
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
        firstname: yup
          .string()
          .label("Firstname")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        lastname: yup
          .string()
          .label("Lastname")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        email: yup.string().required().email().label("Email"),
        dateOfBirth: yup.date().required().label("Date of birth"),
        role: yup.string().required("Please choose a role"),
      }),
      loading: false,
      username: this.data?.name,
      formValues: {
        firstname: this.data?.name,
        lastname: this.data?.lastname,
        dateOfBirth: new Date(this.data?.dateOfBirth),
        email: this.data?.email,
      },
    };
  },
  props: {
    data: {
      type: String,
    },
  },
  methods: {
    editUser(data) {
      this.loading = true;
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve(() => {
            this.loading = false;
          });
        }, 2000);
      }).then(() => {
        console.log("data", data);
        this.$emit("closeModal");
      });
    },
  },
};
</script>
