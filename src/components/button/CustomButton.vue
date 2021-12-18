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
    <h4 v-if="!loading">{{ title }}</h4>
    <LoadingSpinner :loading="loading"></LoadingSpinner>
  </ButtonStyled>
</template>

<script>
import { ButtonStyled } from "./CustomButton.styles";
import LoadingSpinner from "@/components/loadingSpinner";
import palette from "@/theme/palette";
import { radius } from "@/theme/shapings";
export default {
  components: {
    ButtonStyled,
    LoadingSpinner,
  },
  props: {
    title: {
      type: String,
    },
    bgColor: {
      type: String,
      default: palette.primary.main,
    },
    borderRadius: {
      type: String,
      default: radius.button,
    },
    borderColor: {
      type: String,
      default: palette.primary.main,
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
    loading: {
      type: Boolean,
      default: false,
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
