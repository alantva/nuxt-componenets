<template>
  <tr class="cc__table-row">
    <td>{{ value.economicgroup | description }}</td>
    <td>{{ value.contract_id }}</td>
    <td>{{ value.units_count }}</td>
    <td>
      <span class="cc__link" @click="navContract">
        Editar Contrato
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CCTableRowContracts',
  filters: {
    description: (val) => val && val.description
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    navContract() {
      this.$router.push({
        name: 'central-de-cadastros-manutencao-de-contratos-id',
        params: {
          id: this.value.contract_id
        },
        query: {
          review: this.value.review
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
