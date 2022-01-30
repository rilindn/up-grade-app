<template>
<Container>
  <Wrapper>
  <AddNew>
    <span><i class="fas fa-plus-circle"></i></span>
    <span>Add New</span>
  </AddNew>
  <Table>
    <Head>
      <Column>Number</Column>
      <Column>Name</Column>
      <Column>Lastname</Column>
      <Column>Date of Birth</Column>
      <Column>Email</Column>
      <Column>Actions</Column>
    </Head>
    <Body>
      <Row v-for="(user, i) in users" :key="user.id" :index="++i">
        <Cell>{{ user.number }}</Cell>
        <Cell>{{ user.name }}</Cell>
        <Cell>{{ user.lastname }}</Cell>
        <Cell>{{ user.dateOfBirth }}</Cell>
        <Cell>{{ user.email }}</Cell>
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
import { Table, Head, Body, Column, Row, Cell } from '../../components/table/Table.styles';
import { users } from '../../components/table/sampleData'
import {Wrapper, ActionWrapper, Edit, Delete, AddNew, Container} from './Students.styles'
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
    AddNew,
    Container,
  },
  data() {
    return {
      users: users,
    };
  },
};
</script>
