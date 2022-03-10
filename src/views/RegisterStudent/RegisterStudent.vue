<template>
  <Wrapper>
    <FormWrapper>
      <h3>{{ $t("students.addStudent") }}</h3>
      <Form
        @submit="register"
        :validation-schema="registerSchema"
        v-slot="{ errors }"
      >
        <InputsWrapper>
          <div class="inputs">
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
            <InputField
              :error="errors"
              name="parentName"
              :placeholder="$t('students.parentName')"
            />
            <DateInput :error="errors" name="dateOfBirth" />
            <SelectInput
              :error="errors"
              name="gender"
              :placeholder="$t('students.gender')"
              :options="['Female', 'Male']"
            />
            <InputField
              :error="errors"
              name="enrolledYear"
              :placeholder="$t('students.enrolledYear')"
            />
          </div>
          <div class="inputs">
            <InputField
              :error="errors"
              name="nationality"
              :placeholder="$t('students.nationality')"
            />
            <InputField
              :error="errors"
              name="citizenship"
              :placeholder="$t('students.citizenship')"
            />
            <InputField
              :error="errors"
              name="place"
              :placeholder="$t('students.place')"
            />
            <InputField
              :error="errors"
              name="zipCode"
              :placeholder="$t('students.zipCode')"
            />
            <InputField
              :error="errors"
              name="personalEmail"
              :placeholder="$t('students.personalEmail')"
              type="email"
            />
            <InputField
              :error="errors"
              name="phoneNumber"
              :placeholder="$t('students.parentNumber')"
            />
          </div>
        </InputsWrapper>
        <SaveButton :title="$t('register')" :loading="loading" type="submit" />
      </Form>
    </FormWrapper>
  </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import {
  Wrapper,
  FormWrapper,
  SaveButton,
  Column,
  InputsWrapper,
} from "./RegisterStudent.styles";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import * as yup from "yup";
import { registerStudent } from "../../api/ApiMethods";

export default {
  components: {
    InputField,
    Wrapper,
    FormWrapper,
    DateInput,
    SelectInput,
    Form,
    SaveButton,
    Column,
    InputsWrapper,
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
        gender: yup.string().label("Gender").required(),
        zipCode: yup.string().label("Zipcode"),
        nationality: yup.string().label("Nationality").required(),
        citizenship: yup.string().label("Citizenship").required(),
        place: yup.string().label("Place"),
        personalEmail: yup.string().label("Personal Email"),
        parentName: yup.string().label("Parent Name").required(),
        enrolledYear: yup.number().label("Enrolled year").required(),
        phoneNumber: yup.number().label("Phone number"),
      }),
      loading: false,
    };
  },
  methods: {
    async register(data) {
      this.loading = true;
      const { parentName, phoneNumber, ...userData } = data;
      userData.parent = {
        firstName: parentName,
        phoneNumber,
      };
      try {
        const result = await registerStudent(userData);
        if (result?.status === 200) {
          this.loading = false;
          window.location.reload();
          this.$notify({
            type: "success",
            duration: 2000,
            text: "New student registerd successfully!",
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
