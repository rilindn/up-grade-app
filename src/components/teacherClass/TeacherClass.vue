<template>
  <Wrapper>
    <SingleClass :backgroundColor="bgColor">
      <p>{{ title }}</p>
      <h1>{{ subTitle }}</h1>
    </SingleClass>
    <MenuWrapper>
        <MenuText>
      <Menu >
        <MenuItem>
          <span>
            <p>Paralel I</p>
          </span>
        </MenuItem>
      </Menu>
      </MenuText>
    </MenuWrapper>
  </Wrapper>
</template>

<script>
import {
  Wrapper,
  MenuItem,
  Menu,
  SingleClass,
  MenuWrapper
} from "./TeacherClass.styles";
import { directive } from "vue3-click-away";

export default {
  components: {
    Wrapper,
    MenuItem,
    Menu,
    SingleClass,
    MenuWrapper
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
