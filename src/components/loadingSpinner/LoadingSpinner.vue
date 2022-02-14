<template>
  <div>
    <va-inner-loading :loading="loading" color="#d7d7d7" :size="size" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    size: {
      type: String,
      default: "20px",
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
