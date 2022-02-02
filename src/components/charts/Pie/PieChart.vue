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
            :dataKeys="['Gender', 'Nr']"
            :pie-style="{
              colors: ['var(--va-primaryMain)', 'var(--va-pink100)'],
              innerRadius: 100,
              padAngle: 0.05,
            }"
          />
        </template>
        <template #widgets>
          <Tooltip
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
