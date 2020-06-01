<template>
  <div class="cc__search">
    <CCLabel v-if="label" :for="$attrs.id">{{ label }}</CCLabel>
    <CCAutocomplete
      v-model="autocompleteVal"
      :options="options"
      v-bind="$attrs"
      v-on="getListeners"
      @search="handleSearchDebounce"
    />
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'
import CCAutocomplete from '~/components/molecules/CCAutocomplete'

export default {
  name: 'CCSearch',
  components: { CCAutocomplete, CCLabel },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Object,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    debounce: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    fnDebounce: null
  }),
  computed: {
    autocompleteVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    getListeners() {
      const { search, ...listeners } = this.$listeners
      return listeners
    }
  },
  methods: {
    handleSearchDebounce(val) {
      this.clearDebounce()
      this.createDebounce(val)
    },
    clearDebounce() {
      if (this.fnDebounce) clearInterval(this.fnDebounce)
    },
    createDebounce(val) {
      this.fnDebounce = setTimeout(() => {
        this.$emit('search', val)
      }, this.debounce)
    }
  }
}
</script>

<style lang="scss" scoped>
.cc__search {
  display: block;
}
</style>
