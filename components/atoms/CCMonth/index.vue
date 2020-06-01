<template>
  <money
    v-model.lazy="inputVal"
    thousands="."
    :suffix="getSuffix"
    :precision="0"
    class="cc__month"
    autocomplete="off"
    v-bind="$attrs"
    v-on="getListeners"
  />
</template>

<script>
import { Money } from 'v-money'

export default {
  name: 'CCMonth',
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
    getSuffix() {
      return this.inputVal > 1 ? ' meses' : ' mês'
    },
    getListeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    }
  }
}
</script>

<style lang="scss" scoped>
.cc__month {
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
