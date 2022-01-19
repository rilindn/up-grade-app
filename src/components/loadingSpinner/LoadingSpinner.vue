<template>
  <div v-if="loading">
    <!-- <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
      class="spinner"
      :style="{ width: width, height: height }"
    >
    </v-progress-circular> -->
    loading...
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    width: {
      type: String,
      default: "20px",
    },
    height: {
      type: String,
      default: "18px",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.spinner {
}
</style>
