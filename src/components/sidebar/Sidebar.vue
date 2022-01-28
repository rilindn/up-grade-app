<template>
  <NavWrapper>
    <NavigationBtn v-if="!isStatic && !showNavigation" v-on:click="display"
      ><i class="fas fa-bars"></i>
    </NavigationBtn>
    <Navigation
      :isStatic="isStatic"
      :showNavbar="showNavigation"
      v-click-away="this.showNavigation && hide"
    >
      <ul>
        <CloseButton v-if="!isStatic">
          <a v-on:click="hide"><i class="fas fa-times"></i></a>
        </CloseButton>
        <li v-for="item in sidebarItems" :key="item.name">
          <router-link :to="item.path">
            <i :class="item.icon" />
            {{ $t(item.name) }}
          </router-link>
        </li>
      </ul>
    </Navigation>
  </NavWrapper>
</template>
<script>
import {
  Navigation,
  CloseButton,
  NavigationBtn,
  NavWrapper,
} from "./Sidebar.styles";
import { basicItems, studentItems, adminItems } from "./SidebarItems.config";
import { directive } from "vue3-click-away";
export default {
  name: "Sidebar",
  components: {
    Navigation,
    CloseButton,
    NavigationBtn,
    NavWrapper,
  },
  props: {
    isStatic: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showNavigation: this.isStatic ? true : false,
      sidebarItems: [],
      userRole: this.$store.state.loggedUser.role,
    };
  },
  methods: {
    display() {
      // this.showNavigation=!this.showNavigation, //showNavigation and hide
      this.showNavigation = true; //showNavigation
    },
    hide() {
      if (!this.isStatic) this.showNavigation = false;
    },
  },
  directives: {
    ClickAway: directive,
  },
  created() {
    if (this.userRole === "Student")
      this.sidebarItems = [...basicItems, ...studentItems];
    else if (this.userRole === "Staff") this.sidebarItems = basicItems;
    else if (this.userRole === "Admin") this.sidebarItems = adminItems;
  },
};
</script>

<style>
/* @import "./Sidebar.styles.scss"; */
</style>
