<template>
  <Wrapper>
    <h1>{{ $t("welcome.title", { name: "Rilinda" }) }}</h1>
  </Wrapper>
</template>
<script>
import { Wrapper } from "./Welcome.styles";
export default {
  components: {
    Wrapper,
  },
};
</script>
