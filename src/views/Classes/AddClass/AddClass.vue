<template>
  <Wrapper>
    <h3>Add New Class</h3>
    <Form
      @submit="registerClass"
      :validation-schema="registerSchema"
      v-slot="{ errors }"
    >
      <InputField :error="errors" name="className" placeholder="Classname" />
      <InputField :error="errors" name="level" placeholder="Level" />
      <InputField :error="errors" name="classCapacity" placeholder="Capacity" />
      <SaveButton title="Register" :loading="loading" type="submit" />
      <ButtonContainer>
        <CancelButton :title="$t('cancel')" @click="$emit('closeModal')" />
      </ButtonContainer>
    </Form>
  </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import {
  Wrapper,
  FormWrapper,
  SaveButton,
  CancelButton,
  ButtonContainer,
} from "./AddClass.styles";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import * as yup from "yup";
import { addClass } from "@/api/ApiMethods";

export default {
  components: {
    InputField,
    Wrapper,
    FormWrapper,
    DateInput,
    SelectInput,
    Form,
    SaveButton,
    CancelButton,
    ButtonContainer,
  },
  data() {
    return {
      registerSchema: yup.object({
        className: yup
          .string()
          .label("Classname")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        level: yup.number().label("Level").required(),
        classCapacity: yup.number().label("Capacity").required(),
      }),
      loading: false,
    };
  },
  methods: {
    async registerClass(data) {
      this.loading = true;
      try {
        const result = await addClass(data);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.emitter.emit("fetchClasses");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Class added successfully!",
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
