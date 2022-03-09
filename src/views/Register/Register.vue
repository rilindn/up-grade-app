<template>
  <Wrapper>
    <FormWrapper>
      <Form
        @submit="register"
        :validation-schema="registerSchema"
        v-slot="{ errors }"
      >
        <h3>{{ $t("teachers.addUser") }}</h3>
        <InputField
          :error="errors"
          name="firstName"
          :placeholder="$t('firstname')"
        />
        <InputField
          :error="errors"
          name="lastName"
          :placeholder="$t('lastname')"
        />
        <SelectInput
          :error="errors"
          name="role"
          :placeholder="$t('teachers.role')"
          :options="['Staff', 'Admin']"
        />
        <SelectInput
          :error="errors"
          name="gender"
          :placeholder="$t('teachers.gender')"
          :options="['Female', 'Male']"
        />
        <DateInput :error="errors" name="dateOfBirth" />
        <SaveButton :title="$t('register')" :loading="loading" type="submit" />
      </Form>
    </FormWrapper>
  </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import { Wrapper, FormWrapper, SaveButton } from "./Register.styles";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import * as yup from "yup";
import {
  registerAdmin,
  registerStaff,
  registerStudent,
} from "../../api/ApiMethods";

export default {
  components: {
    InputField,
    Wrapper,
    FormWrapper,
    DateInput,
    SelectInput,
    Form,
    SaveButton,
  },
  data() {
    return {
      registerSchema: yup.object({
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
        role: yup.string().required("Please choose a role"),
        gender: yup.string().label("Gender").required(),
      }),
      loading: false,
    };
  },
  methods: {
    async register(data) {
      this.loading = true;
      const { role, ...userData } = data;
      let result;
      try {
        if (role === "Staff") result = await registerStaff(userData);
        else if (role === "Admin") result = await registerAdmin(userData);
        if (result?.status === 200) {
          this.loading = false;
          window.location.reload();
          this.$notify({
            type: "success",
            duration: 2000,
            text: "New user registerd successfully!",
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
