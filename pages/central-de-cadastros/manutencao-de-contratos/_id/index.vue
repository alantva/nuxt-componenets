<template>
  <div class="cc__page">
    <section>
      <CCDataFormContract v-model="contractVal" />
    </section>
    <section>
      <CCDataTableContractFixedPayments v-model="fixedPaymentsTableVal" />
    </section>
  </div>
</template>

<script>
import CCDataTableContractFixedPayments from '~/components/templates/CCDataTable/ContractFixedPayments'
import CCDataFormContract from '~/components/templates/CCDataForm/Contract'

export default {
  name: 'ManutencaoDeContratosPorID',
  components: { CCDataTableContractFixedPayments, CCDataFormContract },
  data: () => ({
    contractVal: {},
    fixedPaymentsTableVal: []
  })
}
</script>

<style lang="scss" scoped>
.cc__page {
  section {
    @extend %BasicPageSection;
  }
}
</style>
