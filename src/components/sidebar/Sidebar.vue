<template>
  <div>
    <NavigationBtn v-if="!showNavigation" v-on:click="display"
      ><i class="fas fa-bars"></i>
    </NavigationBtn>
    <Navigation
      :showNavbar="showNavigation"
      v-click-away="this.showNavigation && hide"
    >
      <ul>
        <CloseButton>
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
  </div>
</template>
<script>
import { Navigation, CloseButton, NavigationBtn } from "./Sidebar.styles";
import { basicItems, studentItems } from "./SidebarItems.config";
import { directive } from "vue3-click-away";
export default {
  name: "Sidebar",
  components: {
    Navigation,
    CloseButton,
    NavigationBtn,
  },
  data() {
    return {
      showNavigation: false,
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
      this.showNavigation = false;
    },
  },
  directives: {
    ClickAway: directive,
  },
  created() {
    if (this.userRole === "Student") {
      this.sidebarItems = [...basicItems, ...studentItems];
    } else if (this.userRole === "Staff") {
      this.sidebarItems = basicItems;
    }
  },
};
</script>

<style>
/* @import "./Sidebar.styles.scss"; */
</style>
