<template>
  <tr class="cc__table-row">
    <td>
      <input v-model="value.checked" type="checkbox" />
    </td>
    <td>{{ value.economicgroup_name }}</td>
    <td>{{ value.company_name }}</td>
    <td>{{ value.short_name }}</td>
    <td>{{ value.cnpj }}</td>
    <td>{{ value.cell_name }}</td>
    <td>{{ value.middle_name }}</td>
    <td>{{ value.front_name }}</td>
    <td>{{ value.state_id }}</td>
    <td>{{ value.id }}</td>
    <td>Botão</td>
  </tr>
</template>

<script>
export default {
  name: 'CCTableRow',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    rowVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
