<template>
  <Wrapper>
    <SingleClass :backgroundColor="bgColor">
      <h2>{{ classname }}</h2>
    </SingleClass>
    <DropDownWrapper :backgroundColor="bgColor">
      <DropDownText @click="triggerMenu">
        <span>{{ $t("classes.parallel") }} {{ subTitle }}</span>
        <span>
          <i class="fas fa-sort-down fa-2x"></i>
        </span>
      </DropDownText>
      <Menu v-if="displayDropDown" v-click-away="triggerMenu">
        <router-link
          v-for="{ _id, ...course } in courses"
          :key="_id"
          :to="{ name: 'My Students', params: { courseId: _id, parallelId } }"
        >
          <MenuItem>
            <span>
              <p>{{ course.subject.name }}</p>
            </span>
          </MenuItem>
          <Divider />
        </router-link>
      </Menu>
    </DropDownWrapper>
  </Wrapper>
</template>

<script>
import {
  Wrapper,
  SingleClass,
  DropDownWrapper,
  MenuItem,
  Menu,
  Divider,
  DropDownText,
} from "./TeacherClass.styles";
import { directive } from "vue3-click-away";
import { getTeacherParallelCourses } from "../../api/ApiMethods";

export default {
  components: {
    Wrapper,
    SingleClass,
    DropDownWrapper,
    MenuItem,
    Menu,
    Divider,
    DropDownText,
  },
  data() {
    return {
      displayDropDown: false,
      courses: [],
    };
  },
  props: {
    bgColor: {
      type: String,
    },
    classname: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    parallelId: {
      type: String,
    },
  },
  methods: {
    triggerMenu() {
      this.displayDropDown = !this.displayDropDown;
    },
  },
  directives: {
    ClickAway: directive,
  },
  async beforeCreate() {
    let teacherId = this.$store.getters.loggedUser.id;
    const courses = await getTeacherParallelCourses(this.parallelId, teacherId);
    this.courses = courses;
  },
};
</script>
