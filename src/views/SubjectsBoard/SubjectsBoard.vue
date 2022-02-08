
<template>
  <Container>
    <Wrapper>
        <AddNew>
        <span><i class="fas fa-plus-circle"></i></span>
        <span>Add New</span>
      </AddNew>
      <Table>
        <Head>
          <Column>Nr.</Column>
          <Column>Subject</Column>
          <Column>Description</Column>
          <Column>Actions</Column>
        </Head>
        <Body>
          <Row  v-for="(subject, i) in subjects" :key="i">
            <Cell>{{ subject.number }}</Cell>
            <Cell>{{ subject.name }}</Cell>
            <Cell>{{ subject.description }}</Cell>
              <Cell>
              <ActionWrapper>
                <Edit><i class="far fa-edit"></i></Edit>
                <Delete> <i class="far fa-trash-alt"></i></Delete>
              </ActionWrapper>
            </Cell>
          </Row>
        </Body>
      </Table>
    </Wrapper>
  </Container>
</template>

<script>
import {
   Table,
  Head,
  Body,
  Column,
  Row,
  Cell

} from "../../components/table/Table.styles";
import { subjects } from "./SubjectsData";
import {
   Wrapper,
  ActionWrapper,
  Edit,
  Delete,
  Container,
  AddNew,
} from "./SubjectsBoard.styles";
export default {
  components: {
     Table,
    Head,
    Body,
    Column,
    Row,
    Cell,
    Wrapper,
    ActionWrapper,
    Edit,
    Delete,
    Container,
    AddNew,
  },
  data() {
    return {
     subjects
    };
  },
};
</script>
