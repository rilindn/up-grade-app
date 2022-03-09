<template>
  <Wrapper>
    <span>
      {{ $t("students.page") }} <b>{{ currentPage }}</b>
      {{ $t("students.of") }} <b>{{ pager.totalPages }}</b></span
    >
    <va-pagination
      v-model="value"
      :total="pager.totalItems"
      :page-size="pager.pageSize"
      :visible-pages="7"
      boundary-numbers
    />
  </Wrapper>
</template>

<script>
import { Wrapper } from "./Paginator.styles";

export default {
  components: {
    Wrapper,
  },
  props: {
    page: {
      type: Number,
      default: 2,
    },
    pager: {
      type: Object,
    },
  },
  data() {
    return {
      value: this.page,
      currentPage: 1,
    };
  },
  watch: {
    value: async function () {
      this.currentPage = Math.floor(this.value / this.pager.pageSize) + 1;
      this.$emit("fetchPaginationItems", this.currentPage);
    },
  },
};
</script>

<style></style>
