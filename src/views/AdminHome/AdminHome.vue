<template>
  <Wrapper>
    <h1>{{ `${$t("admin.title")}  ${$store.state.loggedUser.name}` }}</h1>
    <StatisticsSection>
      <Statistics
        icon="fad fa-user-graduate"
        :statistic="1004"
        field="Students"
      />
      <Statistics
        icon="fad fa-chalkboard-teacher"
        :statistic="140"
        field="Teachers"
      />
      <Statistics icon="fad fa-users-class" :statistic="40" field="Classes" />
      <Statistics icon="fad fa-school" :statistic="3" field="Schools" />
    </StatisticsSection>
  </Wrapper>
</template>
<script>
import Statistics from "@/components/admin/statistics";
import { Wrapper, StatisticsSection } from "./AdminHome.styles";
export default {
  components: {
    Wrapper,
    Statistics,
    StatisticsSection,
  },
};
</script>
