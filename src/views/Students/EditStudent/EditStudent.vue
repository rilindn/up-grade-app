<template>
  <FormWrapper>
    <h2>{{ $t("editStudent.edit") }}</h2>
    <Form
      @submit="editUser"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <InputsWrapper>
        <div>
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
          <DateInput
            :error="errors"
            name="dateOfBirth"
            :defaultValue="formValues.dateOfBirth"
          />
          <SelectInput
            :error="errors"
            name="gender"
            :placeholder="$t('students.gender')"
            :options="['Female', 'Male']"
            :defaultValue="formValues.gender"
          />
          <InputField
            :error="errors"
            name="enrolledYear"
            :placeholder="$t('students.enrolledYear')"
          />
        </div>
        <div>
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
      <SaveButton :title="$t('save')" :loading="loading" type="submit" />
      <CancelButton :title="$t('cancel')" @click="$emit('closeModal')" />
    </Form>
  </FormWrapper>
</template>

<script>
import {
  Wrapper,
  FormWrapper,
  FormStyled,
  InputsWrapper,
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
import { Form } from "vee-validate";

export default {
  components: {
    Wrapper,
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
    InputsWrapper,
    Form,
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
      formValues: {
        firstName: this.data?.firstName,
        lastName: this.data?.lastName,
        dateOfBirth: new Date(this.data?.dateOfBirth),
        email: this.data?.email,
        gender: this.data?.gender,
        zipCode: this.data?.zipCode,
        nationality: this.data?.nationality,
        citizenship: this.data?.citizenship,
        place: this.data?.place,
        personalEmail: this.data?.personalEmail,
        parentName: this.data?.parent?.firstName,
        enrolledYear: this.data?.enrolledYear,
        phoneNumber: this.data?.parent?.phoneNumber,
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
      const { parentName, phoneNumber, ...userData } = values;
      userData.parent = {
        firstName: parentName,
        phoneNumber,
      };
      try {
        const result = await updateStudent(id, userData);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          await this.$emit("refetchStudents");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Student updated successfully!",
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
