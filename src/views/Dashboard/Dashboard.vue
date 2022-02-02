<template>
  <Wrapper>
    <div class="stats">
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
    </div>
    <Chart>
      <SingeChart>
        <h2 class="display-5">Users stat</h2>
        <em>New users registered in past 6 months.</em>
        <AreaChart :chartData="chartData" />
      </SingeChart>
      <GendersChart />
    </Chart>
  </Wrapper>
</template>
<script>
import Statistics from "@/components/admin/statistics";
import {
  Wrapper,
  StatisticsSection,
  Chart,
  SingleChart,
} from "./Dashboard.styles";
import AreaChart from "@/components/charts/Area";

import GendersChart from "@/components/admin/GendersChart";

export default {
  components: {
    Wrapper,
    Statistics,
    StatisticsSection,
    AreaChart,
    GendersChart,
    Chart,
    SingleChart,
  },
  data() {
    return {
      chartData: [
        { Month: "Jan", Nr: 1000, avg: 500, inc: 300 },
        { Month: "Feb", Nr: 2000, avg: 900, inc: 400 },
        { Month: "Apr", Nr: 400, avg: 400, inc: 500 },
        { Month: "Mar", Nr: 3100, avg: 1300, inc: 700 },
        { Month: "May", Nr: 200, avg: 100, inc: 200 },
        { Month: "Jun", Nr: 600, avg: 400, inc: 300 },
        { Month: "Jul", Nr: 500, avg: 90, inc: 100 },
      ],
    };
  },
};
</script>
