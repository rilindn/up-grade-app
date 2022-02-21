<template>
  <Wrapper :error="error?.[name]">
    <Icon><i class="fas fa-search"></i> </Icon>
    <Field
      @blur="change"
      :name="name"
      :type="type"
      :placeholder="placeholder"
    />
  </Wrapper>
</template>

<script>
import { Wrapper, Icon } from "./SearchInput.styles";
import { Field } from "vee-validate";

export default {
  components: {
    Wrapper,
    Field,
    Icon,
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

<style scoped></style>
