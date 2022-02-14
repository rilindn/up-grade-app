<template>
  <SingleChart>
    <h5 class="chart-title">Genders</h5>
    <em>Current users by their gender.</em>
    <PieChart
      :usersData="usersData"
      :dataKeys="['Gender', 'Nr']"
      :colors="['var(--va-primaryMain)', 'var(--va-pink100)']"
      :padAngle="0.05"
      :innerRadius="100"
      :cornerRadius="10"
    />
    <Legend>
      <div>
        <Color color="var(--va-primaryMain)" />
        <span>Male</span>
      </div>
      <div>
        <Color color="var(--va-pink100)" />
        <span>Female</span>
      </div>
    </Legend>
    <StatsMale
      ><hr />
      2000 Male Students</StatsMale
    >
    <StatsFemale
      ><hr />
      1000 Female Students</StatsFemale
    >
  </SingleChart>
</template>

<script>
import {
  Color,
  Legend,
  StatsMale,
  StatsFemale,
  SingleChart,
} from "./GendersChart.styles";
import PieChart from "@/components/charts/Pie";

export default {
  components: {
    PieChart,
    Color,
    Legend,
    StatsMale,
    StatsFemale,
    SingleChart,
  },
  data() {
    return {
      usersData: [
        { Gender: "Male", Nr: 2000, avg: 900, inc: 400 },
        { Gender: "Female", Nr: 1000, avg: 500, inc: 300 },
      ],
    };
  },
};
</script>

<style scoped></style>
