<template>
  <Wrapper>
    <SingleClass :backgroundColor="bgColor">
      <p>{{ title }}</p>
      <h1>{{ subTitle }}</h1>
    </SingleClass>
    <DropDownWrapper :backgroundColor="bgColor" @click="dropDown">
      <DropDownText>
        <span>Parallels</span>
        <span>
          <i class="fas fa-sort-down fa-2x"></i>
        </span>
      </DropDownText>
      <Menu v-if="displayDropDown" v-click-away="dropDown">
         <router-link to="class-students" >
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
} from "./Classroom.styles";
import { directive } from "vue3-click-away";

export default {
  components: {
    Wrapper,
    DropDownWrapper,
    MenuItem,
    Menu,
    Divider,
    DropDownText,
    SingleClass,
  },
  data() {
    return {
      displayDropDown: false,
    };
  },
  props: {
    bgColor: {
      type: String,
    },
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
  },
  methods: {
    dropDown() {
      this.displayDropDown = !this.displayDropDown;
    },
  },
  directives: {
    ClickAway: directive,
  },
  created() {
    console.log(this.bgColor);
  },
};
</script>
