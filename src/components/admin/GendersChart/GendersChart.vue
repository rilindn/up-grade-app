<template>
  <SingleChart>
    <h2>Genders</h2>
    <em>Current users by their gender.</em>
    <PieChart :usersData="usersData" />
    <Legend>
      <div>
        <Color :color="palette.primary.main" />
        <span>Male</span>
      </div>
      <div>
        <Color :color="palette.pink[100]" />
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
import palette from "@/theme/palette";
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
      palette,
      usersData: [
        { Gender: "Male", Nr: 2000, avg: 900, inc: 400 },
        { Gender: "Female", Nr: 1000, avg: 500, inc: 300 },
      ],
    };
  },
};
</script>

<style scoped></style>
