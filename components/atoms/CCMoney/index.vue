<template>
  <money
    v-model.lazy="inputVal"
    decimal=","
    thousands="."
    prefix="R$ "
    :precision="2"
    class="cc__money"
    autocomplete="off"
    v-bind="$attrs"
    v-on="getListeners"
  />
</template>

<script>
import { Money } from 'v-money'

export default {
  name: 'CCMoney',
  components: { Money },
  props: {
    value: {
      type: [Number, String],
      default: ''
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
.cc__money {
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
