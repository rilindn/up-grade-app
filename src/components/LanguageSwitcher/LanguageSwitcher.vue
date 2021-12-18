<template>
  <Wrapper>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in locales" :key="`lang-${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </Wrapper>
</template>

<script>
import { Wrapper } from "./LanguageSwitcher.styles";
export default {
  name: "LanguageSwitcher",
  components: {
    Wrapper,
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
    };
  },
};
</script>

<style></style>
