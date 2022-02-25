<template>
  <FormWrapper>
    <Title>Assign new Role</Title>
    <FormStyled
      @submit="handleSubmit"
      :validation-schema="addSchema"
      v-slot="{ errors }"
      :initial-values="formValues"
      :initial-errors="formErrors"
    >
      <InputField
        @click="teacherModal = !teacherModal"
        :error="errors"
        name="teacher"
        placeholder="Teacher"
        :disabled="true"
      />
      <va-modal v-model="teacherModal" hide-default-actions>
        <slot>
          <Wrapper>
            <Table>
              <Head>
                <Column></Column>
                <Column>Name</Column>
                <Column>Surname</Column>
                <Column>Email</Column>
              </Head>
              <Body>
                <Row
                  @click="setSelectedTeacher(teacher)"
                  v-for="teacher in teachers"
                  :key="teacher._id"
                >
                  <Cell
                    ><Avatar
                      :size="40"
                      :name="`${teacher.firstName} ${teacher.lastName}`"
                  /></Cell>
                  <Cell>{{ teacher.firstName }}</Cell>
                  <Cell>{{ teacher.lastName }}</Cell>
                  <Cell>{{ teacher.email }}</Cell>
                </Row>
              </Body>
            </Table>
          </Wrapper>
        </slot>
      </va-modal>

      <InputField
        @click="subjectModal = !subjectModal"
        :error="errors"
        name="subject"
        placeholder="Subject"
        :disabled="true"
      />
      <va-modal v-model="subjectModal" hide-default-actions>
        <slot>
          <Wrapper>
            <Table>
              <Head>
                <Column>Name</Column>
                <Column>Targeted Level</Column>
              </Head>
              <Body>
                <Row
                  @click="setSelectedSubject(subject)"
                  v-for="subject in subjects"
                  :key="subject._id"
                >
                  <Cell>{{ subject.subjectName }}</Cell>
                  <Cell>{{ subject.targetedLevel }}</Cell>
                </Row>
              </Body>
            </Table>
          </Wrapper>
        </slot>
      </va-modal>
      <SaveButton :title="$t('save')" :loading="loading" type="submit" />
      <CancelButton :title="$t('cancel')" @click="$emit('closeModal')" />
    </FormStyled>
  </FormWrapper>
</template>

<script>
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";
import {
  Modal,
  FormWrapper,
  FormStyled,
  Title,
  CancelButton,
  SaveButton,
  Wrapper,
} from "./AddAssignRoles.styles";
import InputField from "@/components/InputField";
import * as yup from "yup";
import SelectInput from "@/components/SelectInput";
import { getAllStaff, getAllSubjects } from "@/api/ApiMethods.js";
import Avatar from "@/components/Avatar";
import { addSubjectTeacher } from "@/api/ApiMethods.js";

export default {
  components: {
    Modal,
    FormWrapper,
    FormStyled,
    Title,
    CancelButton,
    SaveButton,
    SelectInput,
    InputField,
    Avatar,
    Table,
    Column,
    Row,
    Cell,
    Head,
    Body,
    Wrapper,
  },
  data() {
    return {
      addSchema: yup.object({
        teacher: yup.string().required("Please choose a teacher"),
        subject: yup.string().required("Please choose a subject"),
      }),
      teachers: [],
      subjects: [],
      selectedSubject: {},
      selectedTeacher: {},
      teacherModal: false,
      subjectModal: false,
      loading: false,
      formValues: {
        teacher: "",
        subject: "",
      },
      formErrors: {
        teacher: "",
        subject: "",
      },
    };
  },
  methods: {
    setSelectedTeacher(teacher) {
      this.selectedTeacher = {
        teacher: {
          id: teacher._id,
          name: `${teacher.firstName} ${teacher.lastName}`,
        },
      };
      this.formErrors.teacher = null;
      this.teacherModal = false;
      this.formValues.teacher = `${teacher.firstName} ${teacher.lastName}`;
    },
    setSelectedSubject(subject) {
      this.selectedSubject = {
        subject: {
          id: subject._id,
          name: subject.subjectName,
        },
      };
      this.formErrors.subject = null;
      this.subjectModal = false;
      this.formValues.subject = subject.subjectName;
    },
    async handleSubmit() {
      this.loading = true;
      const data = { ...this.selectedSubject, ...this.selectedTeacher };
      try {
        const result = await addSubjectTeacher(data);
        if (result?.status === 200) {
          this.loading = false;
          this.$emit("closeModal");
          this.$emit("fetchSubjectTeacher");
          this.$notify({
            type: "success",
            duration: 2000,
            text: "New role was assigned successfully!",
          });
        } else {
          this.loading = false;
          this.$notify({
            type: "error",
            duration: 2000,
            text: "Please try again!",
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  async beforeCreate() {
    const staff = await getAllStaff();
    const subjects = await getAllSubjects();
    this.teachers = staff;
    this.subjects = subjects;
  },
};
</script>
