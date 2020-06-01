<template>
  <div>
    <CCDataTableContracts v-model="tableVal" />
  </div>
</template>

<script>
import data from './data'
import CCDataTableContracts from '~/components/templates/CCDataTable/Contracts'

export default {
  name: 'ManutencaoDeContratos',
  components: { CCDataTableContracts },
  data: () => ({
    tableVal: [] || data
  })
}
</script>
