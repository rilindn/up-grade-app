<template>
  <Wrapper v-click-away="onClickAway">
    <CurrentLang @click="displayMenu">
      <span>
        <CountryFlag
          :country="this.$i18n.locale === 'en' ? 'gb' : this.$i18n.locale"
        ></CountryFlag>
      </span>
      <span>{{ this.$i18n.locale.toUpperCase() }}</span>
    </CurrentLang>
    <Menu v-show="show">
      <MenuItem
        v-for="(lang, i) in locales"
        :key="`lang-${i}`"
        :value="lang"
        @click="changeLang(lang)"
      >
        <span
          ><CountryFlag :country="lang === 'en' ? 'gb' : lang"></CountryFlag
        ></span>
        <span>{{ lang.toUpperCase() }}</span>
      </MenuItem>
    </Menu>
  </Wrapper>
</template>

<script>
import {
  Wrapper,
  Menu,
  MenuItem,
  CurrentLang,
} from "./LanguageSwitcher.styles";
import { directive } from "vue3-click-away";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "LanguageSwitcher",
  components: {
    Wrapper,
    Menu,
    MenuItem,
    CountryFlag,
    CurrentLang,
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),
      show: false,
    };
  },
  methods: {
    displayMenu() {
      this.show = !this.show;
    },
    changeLang(lang) {
      this.show = false;
      this.$i18n.locale = lang;
    },
    onClickAway() {
      this.show = false;
    },
  },
  directives: {
    ClickAway: directive,
  },
};
</script>

<style></style>
