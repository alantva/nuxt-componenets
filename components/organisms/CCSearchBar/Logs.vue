<template>
  <div class="cc__search-bar">
    <div class="cc__search-bar__wrapper">
      <CCSearchAsync
        id="cc-search-economic-groups"
        v-model="formVal.economicgroup_id"
        label="Grupo Econômico"
        action="search/fetchEconomicGroups"
      />
      <CCSearchAsync
        id="cc-search-companies"
        v-model="formVal.company_id"
        label="Grupo de Empresa"
        action="search/fetchCompanies"
      />
      <CCSearchAsync
        id="cc-search-units"
        v-model="formVal.id"
        label="Unidade"
        action="search/fetchUnits"
      />
    </div>
    <div class="cc__search-bar__wrapper">
      <CCSearchAsync
        id="cc-search-requesters"
        v-model="formVal.user_id"
        label="Solicitante"
        action="search/fetchRequesters"
      />
      <CCSearch
        id="cc-search-request-types"
        v-model="formVal.type"
        label="Tipo de Solicitação"
        :options="requestTypesOptions"
      />
      <CCSearch
        id="cc-search-status"
        v-model="formVal.status"
        label="Status"
        :options="statusOptions"
      />
    </div>
    <div class="cc__search-bar__wrapper">
      <CCButton color="primary" :disabled="blockSubmit" @click="handleSubmit">
        Filtrar
      </CCButton>
    </div>
  </div>
</template>

<script>
import CCButton from '~/components/atoms/CCButton'
import CCSearch from '~/components/molecules/CCSearch'
import CCSearchAsync from '~/components/molecules/CCSearchAsync'

export default {
  name: 'CCSearchBarLogs',
  components: { CCButton, CCSearch, CCSearchAsync },
  props: {
    value: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    requestTypesOptions: [
      { description: 'Unitária', id: 'unitaria' },
      { description: 'Multipla', id: 'multipla' }
    ],
    statusOptions: [
      { description: 'Processado', id: 'processado' },
      { description: 'Falha', id: 'falha' }
    ]
  }),
  computed: {
    formVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    blockSubmit() {
      if (this.loading) return true
      const keys = Object.keys(this.formVal)
      return keys.filter((key) => this.formVal[key]).length === 0
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.formVal)
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
