<template>
  <SingleChart>
    <span class="display-5">My GPA</span>
    <ChartWrapper>
      <PieChart
        :usersData="usersData"
        :dataKeys="['Gender', 'Nr']"
        :colors="['var(--va-primaryMain)', 'var(--va-green100)']"
        :padAngle="0"
        :innerRadius="100"
        :cornerRadius="10"
        :showTooltip="false"
      />
      <Legend>
        <span>{{ usersData[0].Nr }}/10</span>
      </Legend>
    </ChartWrapper>
  </SingleChart>
</template>

<script>
import {
  Color,
  Legend,
  StatsMale,
  StatsFemale,
  SingleChart,
  ChartWrapper,
} from "./PieChartGPA.styles";
import PieChart from "@/components/charts/Pie";

export default {
  components: {
    PieChart,
    Color,
    Legend,
    StatsMale,
    StatsFemale,
    SingleChart,
    ChartWrapper,
  },
  data() {
    return {
      usersData: [
        { Gender: "GPA", Nr: 8.45 },
        { Gender: "Blank", Nr: 1.65 },
      ],
    };
  },
};
</script>

<style scoped></style>
