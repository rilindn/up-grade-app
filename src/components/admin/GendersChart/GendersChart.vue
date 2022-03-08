<template>
  <SingleChart>
    <h5 class="chart-title">{{ $t("genderChart.gender") }}</h5>
    <em>{{ $t("genderChart.current") }}</em>
    <PieChart
      :usersData="gendersChartData"
      :dataKeys="['Gender', 'Nr']"
      :colors="['var(--va-primaryMain)', 'var(--va-pink100)']"
      :padAngle="0.05"
      :innerRadius="100"
      :cornerRadius="10"
    />
    <Legend>
      <div>
        <Color color="var(--va-primaryMain)" />
        <span> {{ $t("genderChart.male") }}</span>
      </div>
      <div>
        <Color color="var(--va-pink100)" />
        <span> {{ $t("genderChart.female") }}</span>
      </div>
    </Legend>
    <StatsMale
      ><hr />
      {{ this.gendersCount.male }} {{ $t("genderChart.numberMale") }}
    </StatsMale>
    <StatsFemale
      ><hr />
      {{ this.gendersCount.female }}
      {{ $t("genderChart.numberFemale") }}</StatsFemale
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
  props: {
    gendersCount: {
      type: Object,
    },
    gendersChartData: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
