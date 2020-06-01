<template>
  <div class="cc__search-bar">
    <div class="cc__search-bar__wrapper">
      <CCSearchAsync
        id="cc-search-cells"
        v-model="formVal.cell_id"
        label="Célula"
        action="search/fetchCells"
        search-on-focus
      />
      <CCSearchAsync
        id="cc-search-fronts"
        v-model="formVal.front_id"
        label="Front"
        action="search/fetchFronts"
        search-on-focus
      />
      <CCSearchAsync
        id="cc-search-middles"
        v-model="formVal.middle_id"
        label="Middle"
        action="search/fetchMiddles"
        search-on-focus
      />
      <CCSearchAsync
        id="cc-search-economic-groups"
        v-model="formVal.economicgroup_id"
        label="Grupo Econômico"
        action="search/fetchEconomicGroups"
      />
    </div>
    <div class="cc__search-bar__wrapper">
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
      <CCSearchAsync
        id="cc-search-states"
        v-model="formVal.state_id"
        label="Estado"
        action="search/fetchStates"
        search-on-focus
      />
      <CCSearchAsync
        id="cc-search-submarket"
        v-model="formVal.submarket_id"
        label="Submercado"
        action="search/fetchSubmarkets"
        search-on-focus
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
import CCSearchAsync from '~/components/molecules/CCSearchAsync'

export default {
  name: 'CCSearchBarRegister',
  components: { CCButton, CCSearchAsync },
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
