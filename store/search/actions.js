const api = {
  fetchCells: '/api/v1/celulas',
  fetchFronts: '/api/v1/fronts',
  fetchMiddles: '/api/v1/middle',
  fetchEconomicGroups: '/api/v1/grupoeconomico',
  fetchCompanies: '/api/v1/empresas',
  fetchUnits: '/api/v1/clientes',
  fetchStates: '/api/v1/estados',
  fetchSubmarkets: '/api/v1/submercados',
  fetchRequesters: '/api/v1/usuarios',
  fetchAdjustmentIndex: '/api/v1/indicesreajustes',
  fetchPaymentTerms: '/api/v1/condicoespagamento',
  fetchAutomaticRenovation: '/api/v1/listbox',
  fetchFixedPaymentType: '/api/v1/listbox'
}

const mapCommon = ({ data }) =>
  data.map((item) => ({
    description: item.description,
    id: item.id
  }))

const mapEconomicGroups = ({ data }) =>
  data.map((item) => ({
    description: item.descricao,
    id: item.A1_XGRECON
  }))

const mapCompanies = ({ data }) =>
  data.map((item) => ({
    description: item.descricao,
    id: item.A1_XGRCLI
  }))

const mapUnits = ({ data }) =>
  data.map((item) => ({
    description: item.short_name,
    id: item.id
  }))

const mapStates = ({ data }) =>
  data.map((item) => ({
    description: item.description,
    id: item.state_id
  }))

const mapSubmarkets = ({ data }) =>
  data.map((item) => ({
    description: item.descricao,
    id: item.A1_XSUBMER
  }))

const mapRequesters = ({ data }) =>
  data.map((item) => ({
    description: item.name || item.email,
    id: item._id
  }))

export default {
  fetchCells(context, payload) {
    return this.$axios
      .$get(api.fetchCells, { params: payload })
      .then(mapCommon)
      .catch((error) => {
        console.error('fetchCells', error)
        return Promise.resolve([])
      })
  },
  fetchFronts(context, payload) {
    return this.$axios
      .$get(api.fetchFronts, { params: payload })
      .then(mapCommon)
      .catch((error) => {
        console.error('fetchFronts', error)
        return Promise.resolve([])
      })
  },
  fetchMiddles(context, payload) {
    return this.$axios
      .$get(api.fetchMiddles, { params: payload })
      .then(mapCommon)
      .catch((error) => {
        console.error('fetchMiddles', error)
        return Promise.resolve([])
      })
  },
  fetchEconomicGroups(context, payload) {
    const { perPage, ...next } = payload // Não sei o motivo, mas com 'perPage' ele da erro
    return this.$axios
      .$get(api.fetchEconomicGroups, { params: next })
      .then(mapEconomicGroups)
      .catch((error) => {
        console.error('fetchEconomicGroups', error)
        return Promise.resolve([])
      })
  },
  fetchCompanies(context, payload) {
    return this.$axios
      .$get(api.fetchCompanies, { params: payload })
      .then(mapCompanies)
      .catch((error) => {
        console.error('fetchCompanies', error)
        return Promise.resolve([])
      })
  },
  fetchUnits(context, payload) {
    return this.$axios
      .$get(api.fetchUnits, { params: payload })
      .then(mapUnits)
      .catch((error) => {
        console.error('fetchUnits', error)
        return Promise.resolve([])
      })
  },
  fetchStates(context, payload) {
    return this.$axios
      .$get(api.fetchStates, { params: payload })
      .then(mapStates)
      .catch((error) => {
        console.error('fetchStates', error)
        return Promise.resolve([])
      })
  },
  fetchSubmarkets(context, payload) {
    return this.$axios
      .$get(api.fetchSubmarkets, { params: payload })
      .then(mapSubmarkets)
      .catch((error) => {
        console.error('fetchSubmarkets', error)
        return Promise.resolve([])
      })
  },
  fetchRequesters(context, payload) {
    return this.$axios
      .$get(api.fetchRequesters, { params: payload })
      .then(mapRequesters)
      .catch((error) => {
        console.error('fetchRequesters', error)
        return Promise.resolve([])
      })
  },
  fetchAdjustmentIndex(context, payload) {
    const params = {
      fields: 'id,description',
      ...payload
    }
    return this.$axios
      .$get(api.fetchAdjustmentIndex, { params })
      .then(mapCommon)
      .catch((error) => {
        console.error('fetchAdjustmentIndex', error)
        return Promise.resolve([])
      })
  },
  fetchPaymentTerms(context, payload) {
    const params = {
      filter: 'true',
      ...payload
    }
    return this.$axios
      .$get(api.fetchPaymentTerms, { params })
      .then(mapCommon)
      .catch((error) => {
        console.error('fetchPaymentTerms', error)
        return Promise.resolve([])
      })
  },
  fetchAutomaticRenovation(context, payload) {
    const params = {
      PAE_REVAUT: true,
      ...payload
    }
    return this.$axios
      .$get(api.fetchAutomaticRenovation, { params })
      .then(mapCommon)
      .catch((error) => {
        console.error('fetchAutomaticRenovation', error)
        return Promise.resolve([])
      })
  },
  fetchFixedPaymentType(context, payload) {
    const params = {
      PAE_TIPFIX: true,
      ...payload
    }
    return this.$axios
      .$get(api.fetchFixedPaymentType, { params })
      .then(mapCommon)
      .catch((error) => {
        console.error('fetchFixedPaymentType', error)
        return Promise.resolve([])
      })
  }
}
