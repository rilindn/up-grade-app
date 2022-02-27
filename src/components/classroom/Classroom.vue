<template>
  <Wrapper>
    <SingleClass :backgroundColor="bgColor">
      <Action>
        <span>{{ classroom.classCapacity }}</span>
        <va-button-dropdown flat class="ml-2">
          <ActionContent>
            <span @click="editModal()"
              ><i class="far fa-edit"></i>Edit class</span
            >
            <span @click="handleDelete(classroom._id)"
              ><i class="far fa-trash-alt"></i>Delete</span
            >
          </ActionContent>
        </va-button-dropdown>
      </Action>
      <Content>
        <p>{{ classroom.className }}</p>
        <h1>{{ classroom.level }}</h1>
      </Content>
    </SingleClass>
    <DropDownWrapper :backgroundColor="bgColor">
      <DropDownText @click="triggerMenu">
        <span>Parallels</span>
        <span>
          <i class="fas fa-sort-down fa-2x"></i>
        </span>
      </DropDownText>
      <Menu v-if="displayMenu" v-click-away="triggerMenu">
        <AddParallel @click="parallelsModal = true"
          ><i class="far fa-plus-circle"></i
        ></AddParallel>
        <router-link
          v-for="{ _id, name } in parallels"
          :key="_id"
          :to="{ name: 'ClassStudents', params: { id: _id } }"
        >
          <MenuItem>
            <span>
              <p>Parallel {{ name }}</p>
            </span>
          </MenuItem>
          <Divider />
        </router-link>
      </Menu>
    </DropDownWrapper>
  </Wrapper>
  <va-modal v-model="showModal" hide-default-actions>
    <slot>
      <EditClassroom
        :data="classroom"
        @closeModal="closeModal"
        @fetchClasses="fetchClasses"
      />
    </slot>
  </va-modal>
  <va-modal v-model="parallelsModal" hide-default-actions>
    <slot>
      <AddClassParallel
        :classId="classroom._id"
        :parallels="parallels"
        @closeModal="parallelsModal = false"
      />
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
  AddParallel,
} from "./Classroom.styles";
import { directive } from "vue3-click-away";
import EditClassroom from "./EditClassroom/EditClassroom.vue";
import { getParallel } from "@/api/ApiMethods";
import { deleteClass } from "../../api/ApiMethods";
import AddClassParallel from "./AddClassParallel";

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
    AddParallel,
    AddClassParallel,
  },
  data() {
    return {
      displayMenu: false,
      parallels: [],
      showModal: false,
      parallelsModal: false,
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
    async handleDelete(id) {
      if (confirm("Are you sure you want to delete this class?")) {
        await deleteClass(id);
        this.$notify({
          type: "success",
          duration: 2000,
          text: "Class deleted!",
        });
        this.emitter.emit("fetchClasses");
      }
    },
  },
  async beforeCreate() {
    this.classroom?.parallels.map(async ({ parallel }) => {
      const data = await getParallel(parallel);
      this.parallels.push(data[0]);
    });
  },
};
</script>
