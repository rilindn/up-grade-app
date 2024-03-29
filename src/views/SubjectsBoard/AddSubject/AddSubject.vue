<template>
  <Wrapper>
    <Title>Add New Subject</Title>
    <Form
      @submit="registerSubject"
      :validation-schema="registerSchema"
      v-slot="{ errors }"
    >
      <InputField :error="errors" name="subjectName" placeholder="Name" />
      <InputField
        :error="errors"
        name="targetedLevel"
        placeholder="Level"
        type="number"
      />
      <InputField
        :error="errors"
        name="subjectDescription"
        type="text"
        as="textarea"
        placeholder="Description"
      />
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
  Title,
} from "./AddSubject.styles";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import * as yup from "yup";
import { addSubject, getAllSubjects } from "@/api/ApiMethods";

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
    Title,
  },
  data() {
    return {
      registerSchema: yup.object({
        subjectName: yup
          .string()
          .label("Name")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        targetedLevel: yup
          .number()
          .typeError("Level must be a number")
          .min(1)
          .max(12)
          .label("Level")
          .required(),
        subjectDescription: yup.string().min(3).label("Description").required(),
      }),
      loading: false,
    };
  },
  methods: {
    async registerSubject(data) {
      this.loading = true;
      try {
        const result = await addSubject(data);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.$emit("refetchSubjects");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Subject added successfully!",
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
  created() {
    this.emitter.on("fetchSubjects", async () => {
      const subjects = await getAllSubjects();
      this.subjects = subjects;
    });
  },
};
</script>
<style></style>
