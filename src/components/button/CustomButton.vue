<template>
  <ButtonStyled
    @click="onClick"
    :backgroundColor="bgColor"
    :borderRadius="borderRadius"
    :borderColor="borderColor"
    :width="width"
    :height="height"
  >
    <i v-bind:class="startIcon"></i>
    {{ title }}
  </ButtonStyled>
</template>

<script>
import { ButtonStyled } from "./CustomButton.styles";
import palette from "@/theme/palette";
import { radius } from "@/theme/shapings";
export default {
  components: {
    ButtonStyled,
  },
  props: {
    title: {
      type: String,
    },
    bgColor: {
      type: String,
      default: palette.primary.dark,
    },
    borderRadius: {
      type: String,
      default: radius.button,
    },
    borderColor: {
      type: String,
      default: palette.primary.dark,
    },
    startIcon: {
      type: Element,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "40px",
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
