const api = {
  fetchUnits: '/api/v1/clientes'
}

export default {
  fetchUnits(context, payload) {
    return this.$axios
      .$get(api.fetchUnits, { params: payload })
      .catch((error) => {
        console.error('fetchUnits', error)
        return Promise.reject(error)
      })
  }
}
