<template>
  <Wrapper>
    <AddClassContainer>
      <AddNew @click="triggerModal">
        <span><i class="fas fa-plus-circle"></i></span>
        <span>{{ $t("addNew") }}</span>
      </AddNew>
    </AddClassContainer>
    <Container>
      <Classroom
        v-for="(classroom, i) in classes"
        :key="classroom._id"
        :bgColor="backgroundColors[i]"
        :classroom="classroom"
      />
    </Container>
  </Wrapper>
  <va-modal v-model="showModal" hide-default-actions>
    <slot>
      <AddClass @closeModal="triggerModal" />
    </slot>
  </va-modal>
</template>
<script>
import Select from "@/components/select";
import Classroom from "../../components/classroom";
import {
  Wrapper,
  Container,
  AddNew,
  AddClassContainer,
} from "./Classes.styles";
import { getAllClasses } from "../../api/ApiMethods";
import backgroundColors from "./ClassesColor.config";
import AddClass from "./AddClass/AddClass.vue";

export default {
  components: {
    Select,
    Classroom,
    Wrapper,
    Container,
    AddNew,
    AddClass,
    AddClassContainer,
  },
  data() {
    return {
      classes: [],
      backgroundColors,
      showModal: false,
    };
  },
  methods: {
    triggerModal() {
      this.showModal = !this.showModal;
    },
  },
  async beforeCreate() {
    const classes = await getAllClasses();
    this.classes = classes;
  },
  created() {
    this.emitter.on("fetchClasses", async () => {
      const classes = await getAllClasses();
      this.classes = classes;
    });
  },
};
</script>
