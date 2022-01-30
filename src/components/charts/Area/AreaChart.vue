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
          :areaStyle="{ fill: palette.primary.main }"
        />
        <Line
          :dataKeys="['Month', 'Nr']"
          type="monotone"
          :lineStyle="{
            stroke: palette.primary.main,
          }"
        />
        <Marker
          v-if="marker"
          :value="1000"
          label="Mean."
          :color="palette.primary.main"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient id="grad" gradientTransform="rotate(90)">
            <stop
              offset="0%"
              :stop-color="palette.primary.main"
              stop-opacity="1"
            />
            <stop offset="100%" stop-color="white" stop-opacity="0.4" />
          </linearGradient>
        </defs>
      </template>

      <template #widgets>
        <Tooltip
          :color="palette.primary.main"
          :config="{
            Nr: { color: palette.primary.main },
            avg: { hide: true },
            inc: { hide: true },
          }"
        />
      </template>
    </Chart>
  </Wrapper>
</template>

<script>
import palette from "@/theme/palette";
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
  data() {
    return {
      palette,
    };
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
