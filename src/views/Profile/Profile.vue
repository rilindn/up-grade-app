<template>
  <Wrapper>
    <MiddleBox>
      <RightWrapper>
        <TopWrapper>
          <PhotoWrapper>
            <img
              :src="
                student.profilePictureUrl
                  ? student.profilePictureUrl
                  : EmptyImage
              "
            />
          </PhotoWrapper>
          <NameWrapper>
            <Status :active="student?.status"></Status>
            <p>{{ student?.firstName }} {{ student?.lastName }}</p>
            <span>{{
              student?.status === true ? "(Active)" : "(NonActive)"
            }}</span>
          </NameWrapper>
        </TopWrapper>
        <Container>
          <ContainerColumn>
            <div>
              <DataField>
                <p>{{ $t("studentProfile.id") }}:</p>
                <span>{{ student?.studentId }}</span>
              </DataField>
              <DataField>
                <p>{{ $t("studentProfile.studentEmail") }}:</p>
                <span>{{ student?.email }}</span>
              </DataField>
              <DataField>
                <p>{{ $t("studentProfile.generate") }}:</p>
                <span>{{ student?.enrolledYear }}</span>
              </DataField>
              <DataField>
                <p>{{ $t("studentProfile.parentName") }}:</p>
                <span>{{ student?.parent?.firstName }}</span>
              </DataField>
            </div>
          </ContainerColumn>
          <ContainerColumn>
            <div>
              <DataField>
                <p>{{ $t("studentProfile.nationality") }}:</p>
                <span>{{ student?.nationality }}</span>
              </DataField>
              <DataField>
                <p>{{ $t("studentProfile.citizenship") }}:</p>
                <span>{{ student?.citizenship }}</span>
              </DataField>
              <div style="display: flex; flex-direction: column">
                <DataField>
                  <p>{{ $t("studentProfile.place") }}:</p>
                  <span>{{ student?.place }}</span>
                </DataField>
              </div>
              <div style="display: flex; flex-direction: column">
                <DataField>
                  <p>{{ $t("studentProfile.zipcode") }}:</p>
                  <span>{{ student?.zipCode }}</span>
                </DataField>
              </div>
            </div>
          </ContainerColumn>
          <ContainerColumn>
            <div>
              <DataField>
                <p>{{ $t("studentProfile.birthday") }}:</p>
                <span>{{
                  moment(student?.dateOfBirth).format("YYYY-MM-DD")
                }}</span>
              </DataField>
              <DataField>
                <p>{{ $t("studentProfile.gender") }}:</p>
                <span>{{ student?.gender }}</span>
              </DataField>
              <div style="display: flex; flex-direction: column">
                <DataField>
                  <p>{{ $t("studentProfile.personalEmail") }}:</p>
                  <span>{{ student?.personalEmail }}</span>
                </DataField>
              </div>
              <div style="display: flex; flex-direction: column">
                <DataField>
                  <p>{{ $t("studentProfile.phoneNumber") }}:</p>
                  <span>{{ student?.parent?.phoneNumber }}</span>
                </DataField>
              </div>
            </div>
          </ContainerColumn>
        </Container>
      </RightWrapper>
    </MiddleBox>
  </Wrapper>
</template>
<script>
import {
  Wrapper,
  TopWrapper,
  MiddleBox,
  RightWrapper,
  PhotoWrapper,
  ContainerColumn,
  Container,
  NameWrapper,
  EditWrapper,
  SubmitButton,
  DataField,
  Status,
} from "./Profile.styles";
import InputField from "@/components/InputField";
import { getStudentById } from "@/api/ApiMethods";
import EmptyImage from "@/assets/EmptyImage.png";

export default {
  components: {
    Wrapper,
    TopWrapper,
    MiddleBox,
    RightWrapper,
    PhotoWrapper,
    Container,
    NameWrapper,
    EditWrapper,
    SubmitButton,
    InputField,
    DataField,
    ContainerColumn,
    Status,
  },
  data() {
    return {
      student: {},
      role: "",
      EmptyImage,
    };
  },
  methods: {},
  async beforeCreate() {
    const student = await getStudentById(this.$route.params.id);
    this.student = student?.[0];
  },
};
</script>
