const api = {
  fetchLogs: '/api/v1/logs'
}

export default {
  fetchLogs(context, payload) {
    return this.$axios
      .$get(api.fetchLogs, { params: payload })
      .catch((error) => {
        console.error('fetchLogs', error)
        return Promise.reject(error)
      })
  }
}
