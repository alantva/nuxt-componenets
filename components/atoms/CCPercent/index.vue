<template>
  <money
    v-model.lazy="inputVal"
    decimal=","
    thousands="."
    suffix=" %"
    :precision="4"
    class="cc__percent"
    autocomplete="off"
    v-bind="$attrs"
    v-on="getListeners"
  />
</template>

<script>
import { Money } from 'v-money'

export default {
  name: 'CCPercent',
  components: { Money },
  props: {
    value: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    getListeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    }
  }
}
</script>

<style lang="scss" scoped>
.cc__percent {
  @extend %CCInputShape;
  @extend %CCInputSize;
  @extend %CCInputTransition;
  @extend %CCInputColors;
  /* Misc */
  display: inline-block;
  text-decoration: none;
  outline: none;
}
</style>
