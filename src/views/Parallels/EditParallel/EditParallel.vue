<template>
  <FormWrapper>
    <Title>Edit Parallel</Title>
    <FormStyled
      @submit="editParallel"
      :validation-schema="editSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
      <InputField :error="errors" name="class" placeholder="Class" />
      <InputField :error="errors" name="name" placeholder="Name" />
      <InputField
        :error="errors"
        name="capacity"
        placeholder="Capacity"
        type="number"
      />
      <SaveButton :title="$t('save')" :loading="loading" type="submit" />
      <CancelButton :title="$t('cancel')" @click="$emit('closeModal')" />
    </FormStyled>
  </FormWrapper>
</template>

<script>
import {
  Modal,
  FormWrapper,
  FormStyled,
  Title,
  CancelButton,
  SaveButton,
} from "./EditParallel.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import Select from "@/components/select";
import Button from "@/components/button";
import DateInput from "@/components/DateInput";
import SelectInput from "@/components/SelectInput";
import { updateParallel } from "../../../api/ApiMethods";

export default {
  components: {
    Modal,
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
  },
  data() {
    return {
      editSchema: yup.object({
        class: yup.string().required().label("Class"),
        name: yup.string().required().label("Name"),
        capacity: yup.number().min(2).max(40).required().label("Capacity"),
      }),
      loading: false,
      formValues: {
        class: this.data?.class,
        name: this.data?.name,
        capacity: this.data?.capacity,
      },
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    async editParallel(values) {
      const id = this.data?._id;
      this.loading = true;
      try {
        const result = await updateParallel(id, values);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          await this.$emit("refetchParallels");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Parallel updated successfully!",
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
