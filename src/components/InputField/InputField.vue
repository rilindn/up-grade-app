<template>
  <Wrapper :error="error[name]">
    <Field
      @blur="change"
      :name="name"
      :type="type"
      :placeholder="placeholder"
    />
    <ErrorMessage :name="name" />
  </Wrapper>
</template>

<script>
import { Wrapper } from "./InputField.styles";
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Wrapper,
    Field,
    ErrorMessage,
  },
  props: {
    error: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
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

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

input:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}

.InputField.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.TextIInputFieldnput.has-error input:focus {
  border-color: var(--error-color);
}

.InputField.has-error .help-message {
  color: var(--error-color);
}

.InputField.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.InputField.success input:focus {
  border-color: var(--success-color);
}

.InputField.success .help-message {
  color: var(--success-color);
}
</style>
