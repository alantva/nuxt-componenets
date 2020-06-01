<template>
  <div class="cc__form">
    <div class="cc__form-field">
      <CCLabel for="cc-variable-payment-percent">Percentual</CCLabel>
      <CCPercent
        id="cc-variable-payment-percent"
        v-model="formVal.variable_payment_percent"
      />
    </div>
    <div class="cc__form-field">
      <CCLabel for="cc-variable-payment-floor-value">Piso</CCLabel>
      <CCMoney
        id="cc-variable-payment-floor-value"
        v-model="formVal.variable_payment_floor_value"
      />
    </div>
    <div class="cc__form-field">
      <CCLabel for="cc-variable-payment-ceiling-value">Teto</CCLabel>
      <CCMoney
        id="cc-variable-payment-ceiling-value"
        v-model="formVal.variable_payment_ceiling_value"
      />
    </div>
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'
import CCMoney from '~/components/atoms/CCMoney'
import CCPercent from '~/components/atoms/CCPercent'

export default {
  name: 'CCFormContractVariablePayment',
  components: { CCLabel, CCMoney, CCPercent },
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
