<template>
  <Wrapper>
    <FormWrapper>
      <h3>Register New User</h3>
      <InputField name="" placeholder="Firstname" />
      <InputField name="" placeholder="Lastname" />
      <InputField name="" type="email" placeholder="Email" />
      <va-select
        class="role-select"
        placeholder="Choose a role"
        v-model="role"
        color="#008466"
        :options="['Student', 'Staff']"
      >
      </va-select>
      <DateInput :error="errors" name="dateOfBirth" />
      <Button
        :title="'Register'"
        type="submit"
        width="40%"
        borderRadius="20px"
        backgroundColor="#10ac74"
      />
    </FormWrapper>
  </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import { Wrapper, FormWrapper } from "./Register.styles";
import Button from "@/components/button";
import DateInput from "@/components/DateInput";

export default {
  components: {
    InputField,
    Wrapper,
    FormWrapper,
    Button,
    DateInput,
  },
  data() {
    return {
      role: "",
    };
  },
};
</script>
<style>
.role-select {
  width: 100%;
  border-radius: 5px;
}
.va-input__content-wrapper {
  height: 50px;
  padding: 13px 10px;
}
.va-input__container {
  background-color: #f2f5f7 !important;
}
.date-picker {
  width: 100%;
  margin-bottom: 20px;
}
</style>
