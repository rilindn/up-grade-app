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
import {
  basicItems,
  studentItems,
  superAdminItems,
  adminItems,
  teacherItems,
} from "./SidebarItems.config";
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
    if (this.userRole === "Student")
      this.sidebarItems = [...basicItems, ...studentItems];
    else if (this.userRole === "Staff")
      this.sidebarItems = [...basicItems, ...teacherItems];
    else if (this.userRole === "Admin") {
      this.sidebarItems = adminItems;
      const userEmail = this.$store.getters.loggedUser.email;
      console.log("first", userEmail, process.env.VUE_APP_SUPERADMIN_EMAIL);
      if (userEmail === process.env.VUE_APP_SUPERADMIN_EMAIL)
        this.sidebarItems = [...this.sidebarItems, ...superAdminItems];
    }
  },
};
</script>

<style>
/* @import "./Sidebar.styles.scss"; */
</style>
