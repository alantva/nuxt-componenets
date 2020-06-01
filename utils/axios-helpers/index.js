export default {
  getDefaultPagination() {
    return {
      page: 1,
      perPage: 10
    }
  },
  toAxiosParams(obj) {
    console.log(obj)
    return Object.keys(obj).reduce((result, key) => {
      const item = obj[key]
      if (item) result[key] = item.id
      return result
    }, {})
  },
  toAxiosPagination(obj) {
    const { page = 1, perPage = 10 } = obj
    return { page, perPage }
  }
}
