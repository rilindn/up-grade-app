<template>
  <SingleChart>
    <span class="display-5">My GPA</span>
    <ChartWrapper>
      <PieChart
        :usersData="usersData"
        :dataKeys="['GPA', 'Nr']"
        :colors="['var(--va-primaryMain)', 'var(--va-green100)']"
        :padAngle="0"
        :innerRadius="100"
        :cornerRadius="10"
        :showTooltip="false"
      />
      <Legend>
        <span>{{ usersData[0].Nr }}/5</span>
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
  props: {
    gpa: {
      type: Number,
    },
  },
  data() {
    return {
      usersData: [
        { GPA: "GPA", Nr: this.gpa },
        { GPA: "Blank", Nr: 5 - this.gpa },
      ],
    };
  },
};
</script>

<style scoped></style>
