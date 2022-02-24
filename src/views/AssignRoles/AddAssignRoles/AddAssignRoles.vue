<template>
  <FormWrapper>
    <Title>Add Assign Roles</Title>
    <FormStyled
      @submit="addAssignRoles"
      :validation-schema="addSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
    >
     <SelectInput
          :error="errors"
          name="teacher"
          placeholder="Choose a Teacher"
          :options="['Ali Samsme', 'Ela Shshed','Shasin Sjahe']"
        />
      <SelectInput
          :error="errors"
          name="subject"
          placeholder="Choose a Subject"
          :options="['Maths', 'Physics','Sweden']"
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
} from "./AddAssignRoles.styles";
import * as yup from "yup";
import SelectInput from "@/components/SelectInput";

export default {
  components: {
    Modal,
    FormWrapper,
    FormStyled,
    Title,
    CancelButton,
    SaveButton,
    SelectInput,
  },
  data() {
    return {
      addSchema: yup.object({
       teacher: yup.string().required("Please choose a teacher"),
       subject: yup.string().required("Please choose a subject"),
      }),  
    };
  },
  props: {
    data: {
      type: String,
    },
  },

};
</script>
