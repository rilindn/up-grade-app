<template>
  <Wrapper>
    <Avatar :color="color || randomColor()" :size="size">
      <span>{{ getInitials() }}</span>
    </Avatar>
  </Wrapper>
</template>

<script>
import { Wrapper, Avatar } from "./Avatar.styles";

export default {
  components: {
    Avatar,
    Wrapper,
  },
  props: {
    size: {
      type: Number,
    },
    name: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  data() {
    return {
      colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
    };
  },
  methods: {
    getInitials() {
      const names = this.name?.split(" ");
      const firstName = names?.[0]?.[0];
      const lastName = names?.[1]?.[0];
      if (!lastName) return firstName;
      return firstName + lastName;
    },
    randomColor() {
      const randomNum = Math.floor(Math.random() * 4);
      return this.colors[randomNum];
    },
  },
};
</script>

<style></style>
