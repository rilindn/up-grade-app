<template>
  <Wrapper :error="error?.[name]">
    <Field @blur="change" :name="name" v-slot="{ field }">
      <va-date-input
        v-bind="field"
        class="date-picker"
        highlight-weekend="{true}"
        placeholder="Date of birth"
        color="#008466"
        manual-input="{true}"
        v-model="birthdate"
      >
      </va-date-input>
    </Field>
    <ErrorMessage :name="name" />
  </Wrapper>
</template>

<script>
import { Wrapper } from "./DateInput.styles";
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Wrapper,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      birthdate: this.defaultValue,
    };
  },
  props: {
    error: {
      type: String,
      default: null,
    },
    defaultValue: {
      type: Date,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
/* .InputField {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
} */
</style>
