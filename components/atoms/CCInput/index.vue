<template>
  <input
    v-model="inputVal"
    type="text"
    class="cc__input"
    autocomplete="off"
    v-bind="$attrs"
    v-on="getListeners"
  />
</template>

<script>
export default {
  name: 'CCInput',
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
.cc__input {
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
