<template>
  <Wrapper>
    <SingleClass :backgroundColor="bgColor">
      <Action>
        <span>{{ classroom.classCapacity }}</span>
        <va-button-dropdown flat class="ml-2">
          <ActionContent>
            <span @click="editModal()"><i class="far fa-edit"></i>Edit</span>
            <span><i class="far fa-trash-alt"></i>Delete</span>
          </ActionContent>
        </va-button-dropdown>
      </Action>
      <Content>
        <p>{{ classroom.className }}</p>
        <h1>{{ classroom.level }}</h1>
      </Content>
    </SingleClass>
    <DropDownWrapper :backgroundColor="bgColor" @click="triggerMenu">
      <DropDownText>
        <span>Parallels</span>
        <span>
          <i class="fas fa-sort-down fa-2x"></i>
        </span>
      </DropDownText>
      <Menu v-if="displayMenu" v-click-away="triggerMenu">
        <router-link to="class-students">
          <MenuItem>
            <span>
              <p>Paralel I</p>
            </span>
          </MenuItem>
        </router-link>
        <Divider />
        <MenuItem>
          <span>
            <p>Paralel 2</p>
          </span>
        </MenuItem>
      </Menu>
    </DropDownWrapper>
  </Wrapper>
  <va-modal v-model="showModal" hide-default-actions>
    <slot>
      <EditClassroom :data="classroom" @closeModal="closeModal" />
    </slot>
  </va-modal>
</template>
<script>
import {
  Wrapper,
  DropDownWrapper,
  MenuItem,
  Menu,
  Divider,
  DropDownText,
  SingleClass,
  Action,
  Content,
  ActionContent,
} from "./Classroom.styles";
import { directive } from "vue3-click-away";
import EditClassroom from "./EditClassroom/EditClassroom.vue";
import { getAllClasses } from "@/api/ApiMethods";

export default {
  components: {
    Wrapper,
    DropDownWrapper,
    MenuItem,
    Menu,
    Divider,
    DropDownText,
    SingleClass,
    Action,
    Content,
    ActionContent,
    EditClassroom,
  },
  data() {
    return {
      displayMenu: false,
      classes: [],
      showModal: false,
    };
  },
  props: {
    classroom: {
      type: Object,
    },
    bgColor: {
      type: String,
    },
  },
  directives: {
    ClickAway: directive,
  },
  methods: {
    triggerMenu() {
      this.displayMenu = !this.displayMenu;
    },
    editModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
