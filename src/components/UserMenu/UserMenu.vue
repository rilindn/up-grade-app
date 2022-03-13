<template>
  <Wrapper>
    <NameField>{{ name }}</NameField>
    <AvatarWrapper>
      <Avatar :size="37" :name="name" @click="triggerMenu" :color="color" />
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
      <MenuItem @click="handleLogout">
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
import { logout } from "../../api/ApiMethods";

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
      color: this.$store.getters.loggedUser.avatarColor,
      name: this.$store.getters.loggedUser.name,
      displayMenu: false,
      menuItems,
    };
  },
  props: {},
  methods: {
    triggerMenu() {
      this.displayMenu = !this.displayMenu;
    },
    handleLogout() {
      logout()
        .then(() => {
          localStorage.removeItem("token");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    },
  },
  directives: {
    ClickAway: directive,
  },
};
</script>

<style></style>
