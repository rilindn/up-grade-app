<template>
  <Wrapper>
    <EditWrapper>
      <i @click="displayInputs = !displayInputs" class="far fa-edit"></i>
    </EditWrapper>
    <MiddleBox>
      <RightWrapper>
        <TopWrapper>
          <PhotoWrapper @click="openPicker">
            <img
              :src="
                student.profilePictureUrl
                  ? student.profilePictureUrl
                  : EmptyImage
              "
            />
            <span class="plus">
              <i
                :class="
                  student.profilePictureUrl ? 'far fa-edit' : 'far fa-plus'
                "
              ></i>
            </span>
          </PhotoWrapper>
          <NameWrapper>
            <Status :active="student?.status"></Status>
            <p>{{ student?.firstName }} {{ student?.lastName }}</p>
            <span>{{
              student?.status === true ? "(Active)" : "(NonActive)"
            }}</span>
          </NameWrapper>
        </TopWrapper>
        <Form
          @submit="editProfile"
          :validation-schema="profileSchema"
          v-slot="{ errors }"
          :initial-values="formValues"
        >
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
                  <InputField
                    v-if="displayInputs"
                    name="place"
                    :error="errors"
                    placeholder="Place"
                    type="text"
                  />
                </div>
                <div style="display: flex; flex-direction: column">
                  <DataField>
                    <p>{{ $t("studentProfile.zipcode") }}:</p>
                    <span>{{ student?.zipCode }}</span>
                  </DataField>
                  <InputField
                    v-if="displayInputs"
                    name="zipCode"
                    :error="errors"
                    placeholder="Zip Code"
                    type="number"
                  />
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
                  <InputField
                    v-if="displayInputs"
                    :error="errors"
                    placeholder="Personal Email"
                    name="personalEmail"
                    type="email"
                  />
                </div>
                <div style="display: flex; flex-direction: column">
                  <DataField>
                    <p>{{ $t("studentProfile.phoneNumber") }}:</p>
                    <span>{{ student?.parent?.phoneNumber }}</span>
                  </DataField>
                  <InputField
                    v-if="displayInputs"
                    name="phoneNumber"
                    :error="errors"
                    placeholder="Phone number"
                    type="text"
                  />
                </div>
              </div>
            </ContainerColumn>
          </Container>
          <SubmitButton
            v-if="displayInputs"
            title="Submit"
            :loading="loading"
            type="submit"
          />
        </Form>
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
} from "./StudentProfile.styles";
import InputField from "@/components/InputField";
import { Form } from "vee-validate";
import * as yup from "yup";
import { configure } from "vee-validate";
import { getLoggedUser, updateStudent } from "../../api/ApiMethods";
import * as filestack from "filestack-js";
import EmptyImage from "../../assets/EmptyImage.png";

configure({
  validateOnBlur: true,
});
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
    Form,
    SubmitButton,
    InputField,
    DataField,
    ContainerColumn,
    Status,
  },
  data() {
    return {
      student: {},
      displayInputs: false,
      role: "",
      EmptyImage,
      profileSchema: yup.object({
        place: yup.string().label("Place"),
        phoneNumber: yup
          .string()
          .label("Phone Number")
          .matches(/^[0-9]*$/, "Only numbers are allowed for this field "),
        zipCode: yup
          .string()
          .label("Zip Code")
          .matches(/^[0-9]*$/, "Only numbers are allowed for this field "),
        personalEmail: yup.string().email().label("Email"),
      }),
      formValues: {},
      options: {
        accept: "image/*",
        maxSize: 1024 * 1024,
        maxFiles: 1,
        onOpen: () => console.log("opened!"),
        onUploadDone: async (response) => {
          const profilePictureUrl = response?.filesUploaded?.[0]?.url;
          await this.editProfile({ profilePictureUrl });
          console.log(
            "User data has been saved",
            response?.filesUploaded?.[0]?.url
          );
        },
      },
    };
  },
  methods: {
    async editProfile(values) {
      const id = this.student?._id;
      const { phoneNumber, ...data } = values;
      data.parent = { phoneNumber };
      this.loading = true;
      this.displayInputs = false;
      try {
        const result = await updateStudent(id, data);
        if (result?.status === 200) {
          this.loading = false;
          const student = await getLoggedUser();
          this.student = student?.data?.user;
          this.$notify({
            type: "success",
            duration: 2000,
            text: "Updated successfully!",
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
    openPicker() {
      const client = filestack.init(process.env.FILESTACK_API_KEY);
      client.picker(this.options).open();
    },
  },
  async beforeCreate() {
    const student = await getLoggedUser();
    this.student = student?.data?.user;
    this.formValues = {
      place: student?.data?.user?.place,
      phoneNumber: student?.data?.user?.parent?.phoneNumber,
      zipCode: student?.data?.user?.zipCode,
      personalEmail: student?.data?.user?.personalEmail,
    };
  },
};
</script>
