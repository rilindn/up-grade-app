<template>
  <Responsive class="w-full">
    <template #main>
      <Chart
        :size="{ width: 300, height: 300 }"
        :data="usersData"
        :margin="margin"
        :direction="direction"
        :axis="axis"
        :controlHover="true"
      >
        <template #layers>
          <Pie
            :dataKeys="dataKeys"
            :pie-style="{
              colors: colors,
              innerRadius: innerRadius,
              padAngle: padAngle,
              cornerRadius: cornerRadius,
            }"
          />
        </template>
        <template #widgets>
          <Tooltip
            v-if="showTooltip"
            color="var(--va-primaryMain)"
            :config="{
              name: {},
              avg: { hide: true },
              pl: { label: 'value' },
              inc: { hide: true },
            }"
            hideLine
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script>
import { ref } from "vue";
import { Chart, Responsive, Pie, Tooltip } from "vue3-charts";

export default {
  name: "PieChart",
  components: { Chart, Responsive, Pie, Tooltip },
  props: {
    usersData: {
      type: Array,
    },
    dataKeys: {
      type: Array,
    },
    colors: {
      type: Array,
    },
    padAngle: {
      type: Number,
    },
    cornerRadius: {
      type: Number,
    },
    innerRadius: {
      type: Number,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const direction = ref("circular");
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    const axis = ref({
      primary: {
        hide: true,
      },
      secondary: {
        hide: true,
      },
    });

    return { direction, margin, axis };
  },
};
</script>
