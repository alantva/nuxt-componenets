<template>
  <vue2-datepicker
    v-model="inputVal"
    value-type="YYYYMMDD"
    format="DD/MM/YYYY"
    placeholder="Data"
    :editable="false"
    :clearable="false"
    :disabled-date="disabledDate"
    input-class="cc__datepicker"
    :style="{ width: 'auto', minWidth: '140px', maxWidth: '180px' }"
  />
</template>

<script>
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/pt-br'
import Vue2Datepicker from 'vue2-datepicker'

export default {
  name: 'CCDatepicker',
  components: { Vue2Datepicker },
  props: {
    value: {
      type: String,
      default: null
    },
    disabledDate: {
      type: Function,
      default: () => false
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
    }
  }
}
</script>

<style lang="scss">
.cc__datepicker {
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
