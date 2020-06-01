const api = {
  fetchContract: ({ id }) => `/api/v1/contrato/${id}`,
  fetchContracts: '/api/v1/totalunidadesporcontrato',
  fetchContractFixedPayments: ({ id, review }) =>
    `/api/v1/contrato/${id}${review}/remuneracaofixa`
}

export default {
  fetchContract(contex, payload) {
    return this.$axios
      .$get(api.fetchContract(payload), {
        params: {
          fields:
            'contract_id,effective_date_start,effective_date_end,payment_terms,automatic_renovation,automatic_renovation_value,billing_date_start,adjustment_base_date,adjustment_next_date,adjustment_last_date,adjustment_index,fixed_payment_type,fixed_payment_value,fixed_payment_base_value,fixed_payment_floor_value,fixed_payment_ceiling_value,variable_payment_percent,variable_payment_floor_value,variable_payment_ceiling_value,economicgroup_id,review',
          contractID: payload.id,
          revisionID: payload.review
        }
      })
      .catch((error) => {
        console.error('fetchContract', error)
        return Promise.reject(error)
      })
  },
  fetchContracts(context, payload) {
    return this.$axios
      .$get(api.fetchContracts, {
        params: {
          fields: 'contract_id,economicgroup,units_count,review',
          ...payload
        }
      })
      .catch((error) => {
        console.error('fetchContracts', error)
        return Promise.reject(error)
      })
  },
  fetchContractFixedPayments(context, payload) {
    const params = {
      fields: [
        'RECNO',
        'unit_id',
        'unit_name',
        'fixed_payment_value',
        'effective_date_start',
        'adjustment_base_date',
        'adjustment_next_date',
        'adjustment_last_date',
        'adjustment_index'
      ].join(),
      perPage: 9999
    }
    return this.$axios
      .$get(api.fetchContractFixedPayments(payload), { params })
      .catch((error) => {
        console.error('fetchContractFixedPayments', error)
        return Promise.reject(error)
      })
  }
}
