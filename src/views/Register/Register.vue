<template>
  <Wrapper>
    <FormWrapper>
      <Form
        @submit="register"
        :validation-schema="registerSchema"
        v-slot="{ errors }">
      <h3>Register New User</h3>
      <InputField 
       :error="errors" 
       name="firstname" 
       placeholder="Firstname"
        />
      <InputField 
      :error="errors" 
      name="lastname" 
      placeholder="Lastname"
       />
      <InputField 
      :error="errors" 
      name="email" 
      type="email" 
      placeholder="Email" 
      />
      <SelectInput
        :error="errors"
        name="role"
        placeholder="Choose a role"
        :options="['Student', 'Staff']"
      />
      <DateInput 
      :error="errors" 
      name="dateOfBirth" 
      />
      <SaveButton
        title="Register"
        type="submit"
      />
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

export default {
  components: {
    InputField,
    Wrapper,
    FormWrapper,
    DateInput,
    SelectInput,
    Form,
    SaveButton
  },
  data() {
    return {
      registerSchema: yup.object({
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

    };
  },
  methods: {
    register(data) {
      this.loading = true;
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve(() => {
            this.loading = false;
          });
        }, 2000);
      })
    },
  },
};
</script>
<style>
</style>
