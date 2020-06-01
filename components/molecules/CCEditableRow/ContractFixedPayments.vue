<template>
  <tr class="cc__editable-row">
    <template v-if="isOpen">
      <td>{{ model.unit_name }}</td>
      <td><CCMoney v-model="model.fixed_payment_value" /></td>
      <td><CCDatepicker v-model="model.effective_date_start" /></td>
      <td><CCDatepicker v-model="model.adjustment_base_date" /></td>
      <td><CCDatepicker v-model="model.adjustment_next_date" /></td>
      <td><CCDatepicker v-model="model.adjustment_last_date" /></td>
      <td>
        <CCSearchAsync
          id="cc-search-adjustment-index"
          v-model="model.adjustment_index"
          action="search/fetchAdjustmentIndex"
          search-on-focus
        />
      </td>
      <td align="right">
        <CCIconButton color="primary" icon="check" @click="submitAction" />
        <CCIconButton color="secondary" icon="close" @click="closeAction" />
        <CCIconButton color="error" icon="trash" @click="deleteAction" />
      </td>
    </template>
    <template v-else>
      <td>{{ value.unit_name }}</td>
      <td>{{ value.fixed_payment_value }}</td>
      <td>{{ value.effective_date_start }}</td>
      <td>{{ value.adjustment_base_date }}</td>
      <td>{{ value.adjustment_next_date }}</td>
      <td>{{ value.adjustment_last_date }}</td>
      <td>{{ value.adjustment_index }}</td>
      <td align="right">
        <CCIconButton color="primary" icon="pencil" @click="openAction" />
      </td>
    </template>
  </tr>
</template>

<script>
import CCDatepicker from '~/components/atoms/CCDatepicker'
import CCIconButton from '~/components/molecules/CCIconButton'
import CCMoney from '~/components/atoms/CCMoney'
import CCSearchAsync from '~/components/molecules/CCSearchAsync'

export default {
  name: 'CCEditableRowContractFixedPayments',
  components: { CCDatepicker, CCIconButton, CCMoney, CCSearchAsync },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    open: false,
    model: null
  }),
  computed: {
    isOpen() {
      return this.model && this.open
    }
  },
  methods: {
    closeAction() {
      this.open = false
    },
    deleteAction() {
      this.open = false
      this.$emit('delete')
    },
    openAction() {
      this.open = true
      this.model = { ...this.value }
    },
    submitAction() {
      this.open = false
      this.$emit('input', this.model)
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss"></style>

<style lang="scss" scoped>
.cc__editable-row {
  td {
    min-width: 160px;
  }
}
</style>
