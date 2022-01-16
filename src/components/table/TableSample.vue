<template>
  <Table>
    <Head>
      <Column>Name</Column>
      <Column>Username</Column>
      <Column>Email</Column>
      <Column>Phone</Column>
      <Column>Website</Column>
      <Column>Street</Column>
      <Column>City</Column>
      <Column>Name</Column>
    </Head>
    <Body>
      <Row v-for="(user, i) in users" :key="user.id" :index="++i">
        <Cell>{{ user.name }}</Cell>
        <Cell>{{ user.username }}</Cell>
        <Cell>{{ user.email }}</Cell>
        <Cell>{{ user.phone }}</Cell>
        <Cell>{{ user.website }}</Cell>
        <Cell>{{ user.address.street }}</Cell>
        <Cell>{{ user.address.city }}</Cell>
        <Cell>{{ user.company.name }}</Cell>
      </Row>
    </Body>
  </Table>
</template>

<script>
import { Table, Head, Body, Column, Row, Cell } from "./Table.styles";
import { users } from "./sampleData";
export default {
  components: {
    Table,
    Head,
    Body,
    Column,
    Row,
    Cell,
  },
  data() {
    return {
      users: users,
    };
  },
};
</script>
