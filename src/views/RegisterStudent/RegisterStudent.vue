<template>
  <Wrapper>
    <FormWrapper>
      <h3>Register New Student</h3>
      <Form
        @submit="register"
        :validation-schema="registerSchema"
        v-slot="{ errors }"
      >
        <InputsWrapper>
          <div>
            <InputField
              :error="errors"
              name="firstName"
              placeholder="Firstname"
            />
            <InputField
              :error="errors"
              name="lastName"
              placeholder="Lastname"
            />
            <InputField
              :error="errors"
              name="parentName"
              placeholder="Parent Name"
            />
            <DateInput :error="errors" name="dateOfBirth" />
            <SelectInput
              :error="errors"
              name="gender"
              placeholder="Choose  gender"
              :options="['Female', 'Male']"
            />
            <InputField
              :error="errors"
              name="enrolledYear"
              placeholder="Enrolled year"
            />
          </div>
          <div>
            <InputField
              :error="errors"
              name="nationality"
              placeholder="Nationality"
            />
            <InputField
              :error="errors"
              name="citizenship"
              placeholder="Citizenship"
            />
            <InputField :error="errors" name="place" placeholder="Place" />
            <InputField :error="errors" name="zipCode" placeholder="Zipcode" />
            <InputField
              :error="errors"
              name="personalEmail"
              placeholder="Personal Email"
              type="email"
            />
            <InputField
              :error="errors"
              name="phoneNumber"
              placeholder="Parent phone number"
            />
          </div>
        </InputsWrapper>
        <SaveButton title="Register" :loading="loading" type="submit" />
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
        zipCode: yup.string().label("Zipcode").required(),
        nationality: yup.string().label("Nationality").required(),
        citizenship: yup.string().label("Citizenship").required(),
        place: yup.string().label("Place").required(),
        personalEmail: yup.string().label("Personal Email").required(),
        parentName: yup.string().label("Parent Name").required(),
        enrolledYear: yup.number().label("Enrolled year").required(),
        phoneNumber: yup.number().label("Phone number").required(),
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
