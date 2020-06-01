<template>
  <tr class="cc__table-row">
    <td>{{ value.created_at }}</td>
    <td>{{ value.economic_group }}</td>
    <td>{{ value.company }}</td>
    <td>{{ value.unit }}</td>
    <td>{{ value.user_email }}</td>
    <td>{{ value.type }}</td>
    <td>{{ value.status }}</td>
    <td>Botão</td>
  </tr>
</template>

<script>
export default {
  name: 'CCTableRowLogs',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
