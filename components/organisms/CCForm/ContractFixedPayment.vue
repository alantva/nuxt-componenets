<template>
  <div class="cc__form">
    <CCSearchAsync
      id="cc-fixed-payment-type"
      v-model="formVal.fixed_payment_type"
      class="cc__form-field"
      label="Tipo"
      action="search/fetchFixedPaymentType"
      search-on-focus
    />
    <div class="cc__form-field">
      <CCLabel for="cc-fixed-payment-value">Preço</CCLabel>
      <CCMoney
        id="cc-fixed-payment-value"
        v-model="formVal.fixed_payment_value"
      />
    </div>
    <div class="cc__form-field">
      <CCLabel for="cc-fixed-payment-base-value">Valor Base</CCLabel>
      <CCMoney
        id="cc-fixed-payment-base-value"
        v-model="formVal.fixed_payment_base_value"
        disabled
      />
    </div>
    <div v-if="notHasFixedPaymentTypeInBRL" class="cc__form-field">
      <CCLabel for="cc-fixed-payment-floor-value">Piso</CCLabel>
      <CCMoney
        id="cc-fixed-payment-floor-value"
        v-model="formVal.fixed_payment_floor_value"
      />
    </div>
    <div v-if="notHasFixedPaymentTypeInBRL" class="cc__form-field">
      <CCLabel for="cc-fixed-payment-ceiling-value">Teto</CCLabel>
      <CCMoney
        id="cc-fixed-payment-ceiling-value"
        v-model="formVal.fixed_payment_ceiling_value"
      />
    </div>
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'
import CCMoney from '~/components/atoms/CCMoney'
import CCSearchAsync from '~/components/molecules/CCSearchAsync'

export default {
  name: 'CCFormContractFixedPayment',
  components: { CCLabel, CCMoney, CCSearchAsync },
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
    },
    notHasFixedPaymentTypeInBRL() {
      return (
        this.formVal.fixed_payment_type &&
        this.formVal.fixed_payment_type.id !== '1'
      )
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
