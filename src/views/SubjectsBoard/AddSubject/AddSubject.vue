<template>
  <Wrapper>
    <h3>Add New Subject</h3>
    <Form
      @submit="registerSubject"
      :validation-schema="registerSchema"
      v-slot="{ errors }"
    >
      <InputField :error="errors" name="subjectName" placeholder="Name" />
      <InputField :error="errors" name="targetedLevel" placeholder="Level" />
      <InputField
        :error="errors"
        name="subjectDescription"
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
  },
  data() {
    return {
      registerSchema: yup.object({
        subjectName: yup
          .string()
          .label("Name")
          .matches(/^[aA-zZ\s]+$/, "Only letters are allowed for this field ")
          .required(),
        targetedLevel: yup.number().min(1).label("Level").required(),
        subjectDescription: yup.string().label("Description").required(),
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
