<template>
  <div>
    <NavigationBtn v-if="!showNavigation" v-on:click="display"
      ><i class="fas fa-bars"></i>
    </NavigationBtn>
    <Navigation :showNavbar="showNavigation">
      <ul>
        <CloseButton>
          <a v-on:click="hide"><i class="fas fa-times"></i></a>
        </CloseButton>
        <li v-for="item in sitebarItems" :key="item.name">
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
import items from "./SidebarItems.config";
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
      sitebarItems: items,
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
};
</script>

<style>
/* @import "./Sidebar.styles.scss"; */
</style>
