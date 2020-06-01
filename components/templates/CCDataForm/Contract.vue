<template>
  <div class="cc__data-form">
    <CCLabel color="secondary" typography="subtitle">
      Dados do Contrato
    </CCLabel>
    <CCFormContractData v-model="formVal" />
    <CCLabel color="secondary" typography="subtitle">
      Reajuste
    </CCLabel>
    <CCFormContractAdjustment v-model="formVal" />
    <CCLabel color="secondary" typography="subtitle">
      Remuneração Fixa
    </CCLabel>
    <CCFormContractFixedPayment v-model="formVal" />
    <CCLabel color="secondary" typography="subtitle">
      Remuneração Variável
    </CCLabel>
    <CCFormContractVariablePayment v-model="formVal" />
  </div>
</template>

<script>
import CCFormContractAdjustment from '~/components/organisms/CCForm/ContractAdjustment'
import CCFormContractData from '~/components/organisms/CCForm/ContractData'
import CCFormContractFixedPayment from '~/components/organisms/CCForm/ContractFixedPayment'
import CCFormContractVariablePayment from '~/components/organisms/CCForm/ContractVariablePayment'
import CCLabel from '~/components/atoms/CCLabel'

export default {
  name: 'CCDataFormContract',
  components: {
    CCFormContractAdjustment,
    CCFormContractData,
    CCFormContractFixedPayment,
    CCFormContractVariablePayment,
    CCLabel
  },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    loading: false
  }),
  computed: {
    formVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  created() {
    return this.handleFetch()
  },
  methods: {
    async handleFetch() {
      this.loading = true
      try {
        const params = {
          ...this.$route.params,
          ...this.$route.query
        }
        // Request
        const response = await this.$store.dispatch(
          'contract/fetchContract',
          params
        )
        // Successo
        this.$emit('input', response)
      } catch (error) {
        console.error('handleFetch', error)
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
