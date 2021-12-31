<template>
  <SelectStyled>
    <OptionStyled
      v-for="(option, i) in options"
      :key="`lang-${i}`"
      :value="option"
    >
      {{ option }}
    </OptionStyled>
  </SelectStyled>
</template>

<script>
import { SelectStyled, OptionStyled } from "./Select.styles";
import palette from "@/theme/palette";
import { radius } from "@/theme/shapings";
export default {
  components: {
    SelectStyled,
    OptionStyled,
  },
  props: {
    title: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style></style>
