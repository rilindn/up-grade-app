<template>
  <Wrapper :error="error?.[name]">
    <h4>{{ placeholder }}</h4>
    <Field @blur="change" :name="name" v-slot="{ field }">
      <va-time-input
        v-bind="field"
        v-model="time"
        placeholder="Time"
        ampm
        color="#008466"
      />
    </Field>
    <ErrorMessage :name="name" />
  </Wrapper>
</template>

<script>
import { Wrapper } from "./TimeInput.styles";
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Wrapper,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      time: this.defaultValue,
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
