<template>
  <Wrapper>
    <Avatar :color="randomColor()" :size="size">
      <span>{{ getInitials() }}</span>
    </Avatar>
  </Wrapper>
</template>

<script>
import palette from "@/theme/palette";
import { Wrapper, Avatar } from "./Avatar.styles";

export default {
  components: {
    Avatar,
    Wrapper,
  },
  props: {
    size: {
      type: Number,
      default: palette.primary.main,
    },
    name: {
      type: String,
    },
    profilePic: {
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
      return names?.[0]?.[0] + names?.[1]?.[0];
    },
    randomColor() {
      const randomNum = Math.floor(Math.random() * 4);
      return this.colors[randomNum];
    },
  },
};
</script>

<style></style>
