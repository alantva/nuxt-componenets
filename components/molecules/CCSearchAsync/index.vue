<template>
  <CCSearch
    v-model="searchVal"
    :options="options"
    :loading="loading"
    :debounce="600"
    v-bind="$attrs"
    v-on="getListeners"
    @focus="handleFocus"
    @search="handleSearch"
  />
</template>

<script>
import CCSearch from '~/components/molecules/CCSearch'

export default {
  name: 'CCSearchAsync',
  components: { CCSearch },
  props: {
    value: {
      type: Object,
      default: null
    },
    action: {
      type: String,
      required: true
    },
    searchOnFocus: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    options: [],
    loading: false
  }),
  computed: {
    searchVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    getListeners() {
      const { search, focus, ...listeners } = this.$listeners
      return listeners
    }
  },
  methods: {
    handleFocus(s) {
      if (this.searchOnFocus) this.handleSearch(s)
    },
    async handleSearch(s) {
      this.loading = true
      const params = { s, perPage: 9999 }
      this.options = await this.$store.dispatch(this.action, params)
      this.loading = false
    }
  }
}
</script>
