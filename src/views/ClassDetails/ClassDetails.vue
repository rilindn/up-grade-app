<template>
  <Wrapper>
    <Tabs>
      <Tab
        :active="currentTabComponent === 'ClassStudents'"
        @click="switchComponent('ClassStudents')"
      >
        Students
      </Tab>
      <Tab
        :active="currentTabComponent === 'ClassCourses'"
        @click="switchComponent('ClassCourses')"
        >Courses</Tab
      >
    </Tabs>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </Wrapper>
</template>

<script>
import ClassStudents from "./ClassStudents";
import ClassCourses from "./ClassCourses";
import { Tabs, Tab, Wrapper } from "./ClassDetails.styles";
export default {
  components: {
    ClassStudents,
    ClassCourses,
    Tabs,
    Tab,
    Wrapper,
  },
  data() {
    return {
      currentTabComponent: "ClassStudents",
    };
  },
  methods: {
    switchComponent(component) {
      this.currentTabComponent = component;
    },
  },
};
</script>
