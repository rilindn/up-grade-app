<template>
  <div>
  <Wrapper :backgroundColor="bgColor">
    <p>{{title}}</p>
    <h1>{{subTitle}}</h1>
  </Wrapper>
    <DropDownWrapper @click="dropDown" >
     <DropDownText>
        <span>Parallels</span>
        <span> <i class="fas fa-sort-down"></i></span>
    </DropDownText>
      <Menu v-if="displayDropDown" v-click-away="dropDown">
        <MenuItem >
          <span>
            <p>Paralel I</p>
          </span>
        </MenuItem>
         <Divider />
          <MenuItem >
          <span>
            <p>Paralel 2</p>
          </span>
         
        </MenuItem>
        </Menu>
  </DropDownWrapper>
  </div>
</template>

<script>
import {Wrapper, DropDownWrapper, MenuItem, Menu, Divider,DropDownText } from './Classroom.styles'
import { directive } from "vue3-click-away";

export default{
    components:{
        Wrapper,
        DropDownWrapper,
        MenuItem,
        Menu,
        Divider,
        DropDownText
    },
    data () {
      return {
      displayDropDown:false
      }
    },
    props:{
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
    }
  },
    directives: {
    ClickAway: directive,
  },
}
</script>
