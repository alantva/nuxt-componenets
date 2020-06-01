<template>
  <div class="cc__data-table">
    <CCLabel color="secondary" typography="subtitle">
      Remuneração Fixa Por Unidade
    </CCLabel>
    <CCLabel typography="caption">
      * Os valores digitados manualmente irão sobrepor o valor padrão da
      remuneração fixa.
    </CCLabel>
    <CCTable v-model="tableVal">
      <template slot="thead">
        <tr class="cc__data-table__row">
          <th>Unidade</th>
          <th>Valor</th>
          <th>Inicio da Vigência</th>
          <th>Data Base</th>
          <th>Data do Próximo Reajuste</th>
          <th>Data do Último Reajuste</th>
          <th>Índice</th>
          <th></th>
        </tr>
      </template>
      <template slot="tbody">
        <CCEditableRowContractFixedPayments
          v-for="(item, i) in tableVal"
          :key="i"
          v-model="tableVal[i]"
        />
      </template>
    </CCTable>
  </div>
</template>

<script>
import CCEditableRowContractFixedPayments from '~/components/molecules/CCEditableRow/ContractFixedPayments'
import CCLabel from '~/components/atoms/CCLabel'
import CCTable from '~/components/molecules/CCTable'

export default {
  name: 'CCDataTableContractFixedPayments',
  components: {
    CCEditableRowContractFixedPayments,
    CCLabel,
    CCTable
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    loading: false
  }),
  computed: {
    tableVal: {
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
          'contract/fetchContractFixedPayments',
          params
        )
        // Successo
        this.$emit('input', response.data)
      } catch (error) {
        console.error('handleFetch', error)
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
