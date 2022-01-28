<template>
  <Wrapper>
    <i :class="icon"></i>
    <span>{{ statistic }}</span>
    <span>{{ field }}</span>
  </Wrapper>
</template>

<script>
import { Wrapper } from "./Statistics.styles";
export default {
  components: {
    Wrapper,
  },
  props: {
    icon: {
      type: String,
    },
    statistic: {
      type: Number,
    },
    field: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
