<template>
  <div class="cc__pagination">
    <span
      class="cc__pagination__item"
      :disabled="isDisabledFirstOrPrev"
      @click="goToFirst"
    >
      Primeira
    </span>
    <span
      class="cc__pagination__item"
      :disabled="isDisabledFirstOrPrev"
      @click="goToPrev"
    >
      <i class="fa fa-chevron-left"></i>
    </span>
    <span
      v-for="pageNumber in getProximityPages"
      :key="`PaginationItem${pageNumber}`"
      class="cc__pagination__item"
      :active="isSelected(pageNumber)"
      :disabled="isDisabled"
      @click="goToPage(pageNumber)"
    >
      {{ pageNumber }}
    </span>
    <span
      class="cc__pagination__item"
      :disabled="isDisabledLastOrNext"
      @click="goToNext"
    >
      <i class="fa fa-chevron-right"></i>
    </span>
    <span
      class="cc__pagination__item"
      :disabled="isDisabledLastOrNext"
      @click="goToLast"
    >
      Última
    </span>
  </div>
</template>

<script>
export default {
  name: 'CCPagination',
  props: {
    value: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getValue() {
      return this.value
    },
    getProximityPages() {
      const lastPage = this.getLastPage
      const pages = [-2, -1, 0, 1, 2].map((v) => v + this.getCurrentPage)
      return pages.filter((v) => v > 0 && v < lastPage + 1)
    },
    getCurrentPage() {
      return this.getValue.page
    },
    getLastPage() {
      const { total, perPage } = this.getValue
      const d = total / perPage
      const dFloor = Math.floor(d)
      return !d || dFloor < d ? dFloor + 1 : dFloor
    },
    isDisabled() {
      return this.loading
    },
    isDisabledFirstOrPrev() {
      return this.isDisabled || this.getCurrentPage <= 1
    },
    isDisabledLastOrNext() {
      return this.isDisabled || this.getCurrentPage >= this.getLastPage
    }
  },
  methods: {
    isSelected(page) {
      return this.getCurrentPage === page
    },
    goToFirst() {
      if (this.getCurrentPage > 1) this.handleChange({ page: 1 })
    },
    goToPrev() {
      const nPage = this.getCurrentPage - 1
      if (nPage >= 1) this.handleChange({ page: nPage })
    },
    goToPage(page) {
      if (this.getCurrentPage !== page) this.handleChange({ page })
    },
    goToNext() {
      const nPage = this.getCurrentPage + 1
      if (nPage <= this.getLastPage) this.handleChange({ page: nPage })
    },
    goToLast() {
      if (this.getCurrentPage < this.getLastPage)
        this.handleChange({ page: this.getLastPage })
    },
    handleChange(val) {
      const nValue = { ...this.value, ...val }
      this.emitValue(nValue)
      this.emitPaginate(nValue)
    },
    emitValue(val) {
      this.$emit('input', val)
    },
    emitPaginate(val) {
      this.$emit('paginate', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.cc__pagination {
  display: flex;
  justify-content: center;
  align-items: baseline;
  line-height: 1.2em;

  &__item {
    font-weight: bold;
    font-size: 0.8em;
    padding: 3px 8px;
    border-radius: 3px;
    min-width: 40px;

    &:not(:last-child) {
      margin-right: 5px !important;
    }

    &:not([disabled]) {
      cursor: pointer;

      &:not([active]) {
        color: t($theme, 'text');
      }

      &[active] {
        color: t($theme, 'on-primary');
        background-color: t($theme, 'primary');
      }
    }

    &[disabled] {
      pointer-events: none;
      cursor: not-allowed;
      color: t($theme, 'default');
    }
  }
}
</style>
