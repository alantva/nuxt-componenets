<template>
  <div class="cc__form">
    <div class="cc__form-field">
      <CCLabel for="cc-effective-date-start">
        Inicio da Vigência do Contrato
      </CCLabel>
      <CCDatepicker
        id="cc-effective-date-start"
        v-model="formVal.effective_date_start"
      />
    </div>
    <div class="cc__form-field">
      <CCLabel for="cc-effective-date-end">
        Fim da Vigência do Contrato
      </CCLabel>
      <CCDatepicker
        id="cc-effective-date-end"
        v-model="formVal.effective_date_end"
      />
    </div>
    <CCSearchAsync
      id="cc-payment-terms"
      v-model="formVal.payment_terms"
      class="cc__form-field"
      label="Condição de Pagamento"
      action="search/fetchPaymentTerms"
      search-on-focus
    />
    <CCSearchAsync
      id="cc-automatic-renovation"
      v-model="formVal.automatic_renovation"
      class="cc__form-field"
      label="Renovação Automatica"
      action="search/fetchAutomaticRenovation"
      search-on-focus
    />
    <div v-if="hasAutomaticRenovation" class="cc__form-field">
      <CCLabel for="cc-automatic-renovation-value">
        Prazo de Renovação Automática
      </CCLabel>
      <CCMonth
        id="cc-automatic-renovation-value"
        v-model="formVal.automatic_renovation_value"
      />
    </div>
    <div class="cc__form-field">
      <CCLabel for="cc-billing-date-start">
        Inicio da Cobrança
      </CCLabel>
      <CCDatepicker
        id="cc-billing-date-start"
        v-model="formVal.billing_date_start"
      />
    </div>
  </div>
</template>

<script>
import CCLabel from '~/components/atoms/CCLabel'
import CCDatepicker from '~/components/atoms/CCDatepicker'
import CCMonth from '~/components/atoms/CCMonth'
import CCSearchAsync from '~/components/molecules/CCSearchAsync'

export default {
  name: 'CCFormContractData',
  components: { CCDatepicker, CCLabel, CCMonth, CCSearchAsync },
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
    hasAutomaticRenovation() {
      return (
        this.formVal.automatic_renovation &&
        this.formVal.automatic_renovation.id === '1'
      )
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
