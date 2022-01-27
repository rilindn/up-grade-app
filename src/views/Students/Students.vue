<template>
<Wrapper>
  <Table>
    <Head>
      <Column>Number</Column>
      <Column>Name</Column>
      <Column>Lastname</Column>
      <Column>Date of Birth</Column>
      <Column>Email</Column>
    </Head>
    <Body>
      <Row v-for="(user, i) in users" :key="user.id" :index="++i">
        <Cell>{{ user.number }}</Cell>
        <Cell>{{ user.name }}</Cell>
        <Cell>{{ user.lastname }}</Cell>
        <Cell>{{ user.dateOfBirth }}</Cell>
        <Cell>{{ user.email }}</Cell>
      </Row>
    </Body>
  </Table>
  </Wrapper>
</template>

<script>
import { Table, Head, Body, Column, Row, Cell } from '../../components/table/Table.styles';
import { users } from '../../components/table/sampleData'
import {Wrapper} from './Students.styles'
export default {
  components: {
    Table,
    Head,
    Body,
    Column,
    Row,
    Cell,
    Wrapper
  },
  data() {
    return {
      users: users,
    };
  },
};
</script>
