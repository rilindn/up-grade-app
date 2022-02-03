<template>
  <Wrapper>
    <NameField>{{ name }}</NameField>
    <AvatarWrapper>
      <Avatar :size="37" :name="name" @click="triggerMenu" />
    </AvatarWrapper>
    <Menu v-if="displayMenu" v-click-away="triggerMenu">
      <div v-for="{ name, icon, path } in menuItems" :key="name">
        <MenuItem>
          <router-link :to="path">
            <i :class="icon"></i>
            <span>{{ $t(name) }}</span>
          </router-link>
        </MenuItem>
        <Divider />
      </div>
      <MenuItem @click="logout">
        <i class="fas fa-sign-out-alt"></i>
        <span>{{ $t("userMenu.logout") }}</span>
      </MenuItem>
    </Menu>
  </Wrapper>
</template>

<script>
import Avatar from "../Avatar/Avatar.vue";
import {
  Wrapper,
  NameField,
  Menu,
  MenuItem,
  Divider,
  AvatarWrapper,
} from "./UserMenu.styles";
import menuItems from "./UserMenu.config";
import { directive } from "vue3-click-away";

export default {
  components: {
    Wrapper,
    NameField,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    AvatarWrapper,
  },
  data() {
    return {
      name: this.$store.state.loggedUser.name,
      displayMenu: false,
      menuItems,
    };
  },
  props: {},
  methods: {
    triggerMenu() {
      this.displayMenu = !this.displayMenu;
    },
    logout() {
      localStorage.removeItem("vuex");
      window.location.reload();
    },
  },
  directives: {
    ClickAway: directive,
  },
};
</script>

<style></style>
