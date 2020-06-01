<template>
  <div class="cc__form">
    <div class="cc__form-field">
      <CCLabel for="cc-adjustment-base-date">
        Data Base
      </CCLabel>
      <CCDatepicker
        id="cc-adjustment-base-date"
        v-model="formVal.adjustment_base_date"
      />
    </div>
    <div class="cc__form-field">
      <CCLabel for="cc-adjustment-next-date">
        Data do Próximo Reajuste
      </CCLabel>
      <CCDatepicker
        id="cc-adjustment-next-date"
        v-model="formVal.adjustment_next_date"
      />
    </div>
    <div class="cc__form-field">
      <CCLabel for="cc-adjustment-last-date">
        Data do Último Reajuste
      </CCLabel>
      <CCDatepicker
        id="cc-adjustment-last-date"
        v-model="formVal.adjustment_last_date"
      />
    </div>
    <CCSearchAsync
      id="cc-adjustment-index"
      v-model="formVal.adjustment_index"
      class="cc__form-field"
      label="Índice"
      action="search/fetchAdjustmentIndex"
      search-on-focus
    />
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'
import CCDatepicker from '~/components/atoms/CCDatepicker'
import CCSearchAsync from '~/components/molecules/CCSearchAsync'

export default {
  name: 'CCFormContractAdjustment',
  components: { CCDatepicker, CCLabel, CCSearchAsync },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formVal: {
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

<style lang="scss" scoped src="./style.scss" />
