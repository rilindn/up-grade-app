<template>
  <Wrapper>
    <Chart
      :size="{ width: 500, height: 420 }"
      :data="chartData"
      :margin="margin"
      :direction="direction"
      :axis="axis"
    >
      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Area
          :dataKeys="['Month', 'Nr']"
          type="monotone"
          :areaStyle="{ fill: 'var(--va-primaryMain)' }"
        />
        <Line
          :dataKeys="['Month', 'Nr']"
          type="monotone"
          :lineStyle="{
            stroke: 'var(--va-primaryMain)',
          }"
        />
        <Marker
          v-if="marker"
          :value="1000"
          label="Mean."
          color="var(--va-primaryMain)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient id="grad" gradientTransform="rotate(90)">
            <stop
              offset="0%"
              stop-color="var(--va-primaryMain)"
              stop-opacity="1"
            />
            <stop offset="100%" stop-color="white" stop-opacity="0.4" />
          </linearGradient>
        </defs>
      </template>

      <template #widgets>
        <Tooltip
          color="var(--va-primaryMain)"
          :config="{
            Nr: { color: 'var(--va-primaryMain)' },
            avg: { hide: true },
            inc: { hide: true },
          }"
        />
      </template>
    </Chart>
  </Wrapper>
</template>

<script>
import { Wrapper } from "./AreaChart.styles";
import { defineComponent, ref } from "vue";
import { Chart, Grid, Line, Tooltip } from "vue3-charts";

export default {
  components: {
    Wrapper,
    Chart,
    Grid,
    Line,
    Tooltip,
  },
  props: {
    chartData: {
      type: Array,
    },
  },
  setup() {
    const direction = ref("horizontal");
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    const axis = ref({
      primary: {
        type: "band",
      },
      secondary: {
        domain: ["dataMin", "dataMax + 100"],
        type: "linear",
        ticks: 8,
      },
    });

    return { direction, margin, axis };
  },
};
</script>

<style></style>
