<template>
  <NavWrapper>
    <Navigation>
      <router-link to="/">
        <LogoSection>
          <img src="@/assets/logosvg.svg" width="93" height="43" alt="logo" />
          <span>Up <span>Grade</span></span>
        </LogoSection>
      </router-link>
      <List>
        <ListItem
          v-for="item in sidebarItems"
          :key="item.name"
          :isCurrentRoute="$route.fullPath === item.path"
        >
          <router-link :to="item.path">
            <i :class="item.icon" />
            <span>
              {{ $t(item.name) }}
            </span>
          </router-link>
        </ListItem>
      </List>
    </Navigation>
  </NavWrapper>
</template>
<script>
import {
  Navigation,
  NavWrapper,
  LogoSection,
  List,
  ListItem,
} from "./Sidebar.styles";
import { studentItems, adminItems, teacherItems } from "./SidebarItems.config";
export default {
  name: "Sidebar",
  components: {
    Navigation,
    NavWrapper,
    LogoSection,
    List,
    ListItem,
  },
  data() {
    return {
      sidebarItems: [],
      userRole: this.$store.state.loggedUser.role,
    };
  },
  created() {
    if (this.userRole === "Student") this.sidebarItems = studentItems;
    else if (this.userRole === "Staff") this.sidebarItems = teacherItems;
    else if (this.userRole === "Admin") this.sidebarItems = adminItems;
  },
};
</script>

<style>
/* @import "./Sidebar.styles.scss"; */
</style>
