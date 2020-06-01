<template>
  <div class="cc__data-table">
    <CCSearchBarContracts
      :value="searchVal"
      :loading="loading"
      @submit="handleSearchBar"
    />
    <CCTable v-model="tableVal">
      <template slot="thead">
        <tr class="cc__data-table__row">
          <th>Grupo Econômico</th>
          <th>Número do Contrato</th>
          <th>Unidade(s) Atendida(s)</th>
          <th></th>
        </tr>
      </template>
      <template slot="tbody">
        <CCTableRowContracts
          v-for="(item, i) in tableVal"
          :key="i"
          v-model="tableVal[i]"
        />
      </template>
    </CCTable>
    <CCPagination
      :value="paginationVal"
      :loading="loading"
      @paginate="handlePaginate"
    />
  </div>
</template>

<script>
import AxiosHelpers from '~/utils/axios-helpers'
import CCPagination from '~/components/molecules/CCPagination'
import CCSearchBarContracts from '~/components/organisms/CCSearchBar/Contracts'
import CCTable from '~/components/molecules/CCTable'
import CCTableRowContracts from '~/components/atoms/CCTableRow/Contracts'

export default {
  name: 'CCDataTableContracts',
  components: {
    CCPagination,
    CCSearchBarContracts,
    CCTable,
    CCTableRowContracts
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    loading: false,
    searchVal: {},
    paginationVal: AxiosHelpers.getDefaultPagination()
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
  methods: {
    async handleSubmit(searchVal, paginationVal) {
      this.loading = true
      try {
        const pageParams = AxiosHelpers.toAxiosPagination(paginationVal)
        const searchParams = AxiosHelpers.toAxiosParams(searchVal)
        const params = { ...pageParams, ...searchParams }
        // Request
        const response = await this.$store.dispatch(
          'contract/fetchContracts',
          params
        )
        // Successo
        this.paginationVal = { ...paginationVal, ...response.meta }
        this.searchVal = { ...searchVal }
        this.$emit('input', response.data)
      } catch (error) {
        console.error('handleSubmit', error)
      }
      this.loading = false
    },
    handleSearchBar(searchVal) {
      const paginationVal = { ...this.paginationVal, page: 1 }
      this.handleSubmit(searchVal, paginationVal)
    },
    handlePaginate(paginationVal) {
      this.handleSubmit(this.searchVal, paginationVal)
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
