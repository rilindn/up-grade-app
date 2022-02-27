<template>
  <Wrapper :error="error?.[name]">
    <Field @blur="change" :name="name" v-slot="{ field }">
      <va-select
        v-bind="field"
        class="role-select"
        :placeholder="placeholder"
        v-model="selected"
        color="#008466"
        :options="options"
      >
      </va-select>
    </Field>
    <ErrorMessage :name="name" />
  </Wrapper>
</template>

<script>
import { Wrapper } from "./SelectInput.styles";
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Wrapper,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      selected: this.defaultValue,
    };
  },
  props: {
    error: {
      type: String,
      default: null,
    },
    defaultValue: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
