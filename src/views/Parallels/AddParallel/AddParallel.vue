<template>
  <Wrapper>
    <Title>Add New Parallel</Title>
    <Form
      @submit="registerParallel"
      :validation-schema="registerSchema"
      v-slot="{ errors }"
    >
      <InputField :error="errors" name="class" placeholder="Class" />
      <InputField :error="errors" name="name" placeholder="Name" />
      <InputField
        :error="errors"
        name="capacity"
        placeholder="Capacity"
        type="number"
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
} from "./AddParallel.styles";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { Form } from "vee-validate";
import * as yup from "yup";
import { getAllSubjects } from "@/api/ApiMethods";
import { newParallel } from "../../../api/ApiMethods";

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
        class: yup.string().required().label("Class"),
        name: yup.string().required().label("Name"),
        capacity: yup.number().min(2).max(40).required().label("Capacity"),
      }),
      loading: false,
    };
  },
  methods: {
    async registerParallel(data) {
      this.loading = true;
      try {
        const result = await newParallel(data);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.$emit("refetchParallels");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Parallel added successfully!",
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
